import { ReactComponent as HomeSvg } from './assets/home.svg';
import { ReactComponent as AboutSvg } from './assets/about.svg';
import { ReactComponent as ContactSvg } from './assets/contact.svg';
import { ReactComponent as MenuSvg } from './assets/menu.svg';
import React from 'react';
import { Anchor } from 'antd';

const { Link } = Anchor;

function Navbar() {

    return(
        <div>
            <Anchor targetOffset='64'>
                <div className='text-gray-600 font-body'>
                    <div className='flex justify-between md:justify-center items-center py-2 lg:py-6'>
                        <h1 className='text-primary-100 text-1xl lg:text-4xl uppercase font-siteName ml-2 hover:text-red-700 transition ease-in-out duration-200'>
                            <a href='#home'>Kags</a>
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
                                <HomeSvg className='w-5 inline-block' />
                                <div className='px-4 flex justify-center'>
                                <Link href="#home" title="Home" />
                                </div>
                            </li>
                        </div>
                        
                        <div className='border-t border-b border-gray-100 py-2'>
                            <li className='text-gray-400 font-body transform hover:scale-110 transition ease-out duration-200 hover:text-red-700'>
                                <AboutSvg className='w-5 inline-block' />
                                <a href='http://www.google.com' className='px-4 flex justify-center' target='_blank' rel="noreferrer">
                                    <span>About</span>
                                </a>
                            </li>
                        </div>

                        
                        <div className='border-t border-b border-gray-100 py-2'>
                            <li className='text-gray-400 font-body transform hover:scale-110 transition ease-out duration-200 hover:text-red-700'>
                                <MenuSvg className='w-5 inline-block' />
                                <div className='px-4 flex justify-center '>
                                <Link href="#menulist" title="Order Here"/>
                                </div>
                            </li>
                        </div>
                        

                        <div className='border-t border-b border-gray-100 py-2'>
                            <li className='text-gray-400 font-body transform hover:scale-110 transition ease-out duration-200 hover:text-red-700'>
                                <ContactSvg className='w-5 inline-block' />
                                    <a href='http://www.google.com' className='px-4 flex justify-center' target='_blank' rel="noreferrer">
                                        <span>Contact</span>
                                    </a>
                            </li>
                        </div>
                    </ul>
                </div>
            </Anchor>
        </div>
    )
}

export default Navbar;