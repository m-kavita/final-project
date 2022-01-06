import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ReactComponent as HomeSvg } from './assets/home.svg';
import { ReactComponent as AboutSvg } from './assets/about.svg';
import { ReactComponent as ContactSvg } from './assets/contact.svg';
import { ReactComponent as MenuSvg } from './assets/menu.svg';
import { ReactComponent as ProfileSvg } from './assets/profile.svg';
import React from 'react';

function NavBar(props) {

    const [state, setState] = useState({})

    useEffect(
        function() {
            setState(
                {
                    ...{}, 
                    [props.path]: 'active'
                }
            )
        },
        [props.path]
    )

    return(
        <div>
            <div className='text-gray-600 font-body'>
                <div className='flex justify-between md:justify-center items-center py-2 lg:py-6'>
                    <h1 className='text-primary-100 text-1xl lg:text-4xl uppercase font-siteName ml-2 hover:text-red-700 transition ease-in-out duration-200'>
                        <Link to="/">Kags</Link>
                    </h1>
                    <div className='px-4 cursor-pointer inline-block md:hidden'>
                        <svg id='burger' className='w-6' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div className='text-center hidden md:block'>
                <ul>
                    <div className='border-t border-b border-gray-100 py-2'>
                        <li className='text-gray-400 font-body transform hover:scale-110 transition ease-out duration-200 hover:text-red-700'>
                            <Link to="/" className={`nav-link ${state['/']}`}>
                                <HomeSvg className='w-5 inline-block' />
                                <div className='px-4 flex justify-center'>
                                    <span>Home</span>
                                </div>
                            </Link>

                        </li>
                    </div>
                    
                    <div className='border-t border-b border-gray-100 py-2'>
                        <li className='text-gray-400 font-body transform hover:scale-110 transition ease-out duration-200 hover:text-red-700'>
                            <Link to='/about' className={`nav-link ${state['/about']}`}>
                                <AboutSvg className='w-5 inline-block' />
                                <div className='px-4 flex justify-center'>
                                    <span>About</span>
                                </div>
                            </Link>
                        </li>
                    </div>

                    <div className='border-t border-b border-gray-100 py-2'>
                        <li className='text-gray-400 font-body transform hover:scale-110 transition ease-out duration-200 hover:text-red-700'>
                            <Link to='/menucards' className={`nav-link ${state['/menucards']}`}>
                                <MenuSvg className='w-5 inline-block' />
                                <div className='px-4 flex justify-center'>
                                    <span>Order Here</span>
                                </div>
                            </Link>
                        </li>
                    </div>

                    { localStorage.getItem('jsonwebtoken') && (
                        <div className='border-t border-b border-gray-100 py-2'>
                            <li className='text-gray-400 font-body transform hover:scale-110 transition ease-out duration-200 hover:text-red-700'>
                                <Link to='/profilescreen' className={`nav-link ${state['/contact']}`}>
                                    <ProfileSvg className='w-5 inline-block' />
                                    <div className='px-4 flex justify-center'>
                                        <span>My Profile</span>
                                    </div>
                                </Link>
                            </li>
                        </div>
                    )}

                    <div className='border-t border-b border-gray-100 py-2'>
                        <li className='text-gray-400 font-body transform hover:scale-110 transition ease-out duration-200 hover:text-red-700'>
                            <Link to='/contact' className={`nav-link ${state['/contact']}`}>
                                <ContactSvg className='w-5 inline-block' />
                                <div className='px-4 flex justify-center'>
                                    <span>Contact</span>
                                </div>
                            </Link>
                        </li>
                    </div>

                </ul>
            </div>
        </div>
    )
}

export default NavBar;