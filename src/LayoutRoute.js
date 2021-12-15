import { Route } from 'react-router-dom';
import NavBar from './NavBar.js';
import SignUp from './SignUp.js';
import React from 'react';

function LayoutRoute(props) {
    return (
        <>
            <div className='grid md:grid-cols-7'>
                <div className='md:col-span-1'>
                    <NavBar {...props} />
                </div>

                <div className='bg-gray-100 md:col-span-6 ease-in-out duration-300' id='home'>
                    <Route path={props.path} exact={props.exact} component={props.component} />
                    <SignUp {...props} />
                </div>
            </div>
        </>
    )
}

export default LayoutRoute;