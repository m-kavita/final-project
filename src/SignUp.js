import { Link } from 'react-router-dom';
import React from 'react';

function SignUp(props) {

    return(
        <div className='mx-4 mt-4'>
            <div className='flex justify-center md:justify-end signup-badge text-gray-600 px-7 pt-3 font-body sticky right-0 ml-2 mt-2'>
                <Link to='/registrationscreen' className='btn text-white bg-primary-300 border-primary-300 md:border-2 hover:bg-primary-100 hover:border-primary-100 hover:shadow-sm transition ease-in-out duration-500'>
                    Sign Up
                </Link>
                <Link to='/loginscreen' className='btn ml-2 text-white bg-gray-400 border-gray-400 md:border-2 hover:bg-gray-200 hover:border-gray-200 hover:text-primary-300 hover:shadow-sm transition ease-in-out duration-500'>
                    Log In
                </Link>
            </div>
        </div>
    )
}

export default SignUp;