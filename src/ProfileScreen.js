import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
// Connect to the context (i.e, global state)
import {UserContext} from './UserContext';

function ProfileScreen() {

    const { firstName, lastName, email, phone, address, avatar } = useContext(UserContext);

    if (!localStorage.getItem('jsonwebtoken')) {
        return (<Redirect to="/loginscreen" />)
    }
    else {
        return (
            <div className='bg-gray-100 flex items-center w-full h-screen py-10 justify-center'>
                <div className="container py-5" style={{maxWidth: 600 }}>
                    <div className="max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                        <img className="object-cover w-full h-60" src={avatar} alt="avatar" />
                        <div className="p-5 text-center">
                            <span className="font-siteName block text-4xl uppercase text-primary-200 dark:text-white pb-2">{firstName}&nbsp;&nbsp;{lastName}</span>
                            <span className="font-body text-sm text-gray-700 dark:text-gray-200">{email}</span><br/>
                            <span className="font-body text-sm text-gray-700 dark:text-gray-200">{phone}</span><br/>
                            <span className="font-body text-sm text-gray-700 dark:text-gray-200">{address}</span>
                        </div>
                    </div>
                </div>  
            </div>
        )
    }
}

export default ProfileScreen;