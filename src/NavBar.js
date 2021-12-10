import { ReactComponent as YourSvg } from './assets/logo.svg';
import { ReactComponent as HomeSvg } from './assets/home.svg';
import { ReactComponent as AboutSvg } from './assets/about.svg';
import { ReactComponent as ContactSvg } from './assets/contact.svg';
import React, {useState} from 'react';

function Navbar() {

    const burger = document.querySelector('#burger');
    const menu = document.querySelector('#menu');

    burger.addEventListener('click', (e) => {
        if (menu.classList.contains('hidden')) {
            menu.classList.remove('hidden');
        } else {
            menu.classList.add('hidden');
        }
    });

    return(
        <div>
            <div className='text-gray-600 font-serif font-body'>
                <div className='flex justify-between items-center py-2'>
                    <h1 className='text-primary-200 font-bold uppercase font-siteName hover:text-gray-400'>
                        <YourSvg className='w-5 inline-block mx-3' />
                        <a href='/'>Zahab</a>
                    </h1>
                    <div className='px-4 cursor-pointer inline-block md:hidden'>
                        <svg id='burger' className='w-6' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div className='text-center hidden md:block' id='menu'>
                <ul className='md:mt-4'>
                    <div className='border-t border-b border-gray-100 py-2'>
                        <li className='text-grey-700 font-bold'>
                            <HomeSvg className='w-5 inline-block' />
                            <a href='#' className='px-4 flex justify-center'>
                                <span>Home</span>
                            </a>
                        </li>
                    </div>

                    <div className='border-t border-b border-gray-100 py-2'>
                        <li className='text-grey-700 font-bold'>
                            <AboutSvg className='w-10 inline-block' />
                            <a href='#' className='px-4 flex justify-center '>
                                <span>About</span>
                            </a>
                        </li>
                    </div>

                    <div className='border-t border-b border-gray-100 py-2'>
                        <li className='text-grey-700 font-bold'>
                            <ContactSvg className='w-5 inline-block' />
                                <a href='#' className='px-4 flex justify-center'>
                                    <span>Contact</span>
                                </a>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;