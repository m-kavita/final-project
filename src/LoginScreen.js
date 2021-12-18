import { Link } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router';
// Connect to the context (i.e, global state)
import { UserContext } from './UserContext';

// RegEx (Regular Expressions)
const validateEmail = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const validatePassword = (password) => {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,16}$/;
    return re.test(password);
}

function LoginScreen() {

    // 'initial', 'sending', 'successful', 'unsuccessful'
    const [state, setState] = useState('initial');
    const { updateUser } = useContext(UserContext);
    
    // Declare undefined variables for later assignment (ref props)
    let emailField;
    let passwordField;

    // To instantiate a FormData object
    const formData = new FormData();

    const login = () => {

        const errors = [];

        // 1. Validate the fields
        if(emailField.value.length === 0) {
            errors.push('Please enter a valid email address');
        }
        if(passwordField.value.length === 0) {
            errors.push('Please enter a valid password');
        }

        // 1.1 If there are errors, set the state to 'validation error'
        if(errors.length > 0) {
            setState('validation error');
        }
        // 1.2 If there are no errors, set the state to 'sending'
        else {
            setState('sending');

            formData.append('email', emailField.value);
            formData.append('password', passwordField.value);

            fetch(`${process.env.REACT_APP_BACKEND}/user/login`, {
                method: 'POST',
                // headers: {'Content-Type': 'application/json'},
                body: formData
            })
            // 2.1 If the submission is successful, set the state 'successful'
            .then((backendResponse)=> backendResponse.json())
            .then((theJson)=>{
                console.log(theJson, theJson.message);

                updateUser(
                    {
                        jsonwebtoken: theJson.message.jsonwebtoken,
                        firstName: theJson.message.firstName,
                        lastName: theJson.message.lastName,
                        email: theJson.message.email,
                        avatar: theJson.message.avatar
                    }
                )
                setState('successful');
            })
            // 2.2 If the submission is unsuccessful, set the state 'unsuccessful'
            .catch((error)=>{
                console.log(error);
                setState('unsuccessful');
            });
        }
    }

    if ( state === 'successful' ) {
        return (
            <Redirect to='/profilescreen' />
        )
    } else {
        return (
            <section className='bg-gray-100 mt-4 pt-20 h-screen'>
                <div className='max-w-4xl p-6 mx-auto bg-primary-300 rounded-md shadow-md font-body'>
                    <div className='container mx-auto'>
                        <div className='max-w-md mx-auto my-10'>
                            <div className='text-center font-body'>
                                <h1 className='mt-3 mb-1 text-5xl font-siteName uppercase text-neutral-100'>
                                    Sign&nbsp; in
                                </h1>
                                <p className='text-neutral-100'>
                                    Sign in to access your account
                                </p>
                            </div>
                            <div className='m-7'>
                                <form action=''>
                                    <div className='mb-6'>
                                        <label for='email' className='block mb-2 text-sm text-neutral-100'>
                                            Email Address
                                        </label>
                                        <input ref={ (elem)=>emailField = elem } type='email' name='email' id='email' placeholder='givemefood@mail.com' className='w-full px-3 py-2 placeholder-neutral-300 border border-neutral-300 rounded-md focus:outline-none focus:ring focus:ring-red-100 focus:border-primary-300' aria-describedby='emailHelp' />
                                        <div id='emailHelp' className='block mt-0.5 text-xs text-primary-50'>
                                            We'll never share your email with anyone else.
                                        </div>
                                    </div>
                                    <div className='mb-6'>
                                        <div className='flex justify-between mb-2'>
                                            <label for='password' className='text-sm text-white'>
                                                Password
                                            </label>
                                            <div className='font-body text-xs text-primary-50 focus:outline-none focus:text-red-500 hover:text-red-700'>
                                                Forgot password?
                                            </div>
                                        </div>
                                        <input ref={ (elem)=>passwordField = elem } type='password' name='password' id='password' placeholder='Your Secret Key' className='w-full px-3 py-2 placeholder-neutral-300 border border-neutral-300 rounded-md focus:outline-none focus:ring focus:ring-red-100 focus:border-primary-300' aria-describedby='password' />
                                    </div>
                                    {
                                        state !== 'sending' && state !== 'successful' &&
                                        <div className='flex items-center justify-center'>
                                            <button 
                                            onClick={login}
                                            className='btn font-body text-neutral-100 bg-neutral-500 border-neutral-500 md:border-2 hover:bg-neutral-200 hover:border-neutral-200 hover:text-primary-300 hover:shadow-sm transition ease-in-out duration-500 items' type='button'>
                                                Log In
                                            </button>
                                        </div>
                                    }

                                    { 
                                        state === 'validation error' &&
                                        <div className='font-body text-red-700 pt-0.5 pb-2 flex items-center justify-center alert alert-danger' role='alert'>
                                            Incorrect email or password.
                                        </div>
                                    }

                                    {
                                        state === 'unsuccessful' &&
                                        <div className='font-body text-red-700 pt-0.5 pb-2 flex items-center justify-center alert alert-danger py-5' role='alert'>
                                            Internal error. Please try again later.
                                        </div>
                                    }

                                    {
                                        state === 'sending' &&
                                        <p className='font-body text-primary-300 flex items-center justify-center animate-pulse'>Loading...</p>
                                    }
                                    <p className='text-sm text-center text-primary-50 pt-1'>
                                        Don&#x27;t have an account yet?&nbsp;
                                            <Link to='/registrationscreen' className='text-neutral-100 focus:outline-none focus:underline focus:text-primary-100'>
                                                Sign up
                                            </Link>.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default LoginScreen;