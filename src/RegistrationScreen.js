import { useState } from 'react';

function RegistrationScreen() {

    // formState: (1) initial, (2) loading, (3) validationFailed, (4) successful, (5) unsuccessful
    const [formState, setFormState] = useState('initial');

    let firstNameField;
    let lastNameField;
    let emailField;
    let addressField;
    let passwordField;
    let phoneField;
    let avatarInput;

    const formData = new FormData();
    const [errorsState, setErrorsState] = useState([]);
    const attachFile = (evt) => {
        const files = Array.from(evt.target.files);

        files.forEach(
            (fileAttachment, index) => {
                formData.append(index, fileAttachment);
            }
        );
    }

    function registerUser() {

        const errors = [];
        
        if( firstNameField.value.length === 0 ) {
            errors.push('Please enter your First Name');
        }
        if( lastNameField.value.length === 0 ) {
            errors.push('Please enter your Last Name');
        }
        if( emailField.value.length === 0 ) {
            errors.push('Please enter valid Email');
        }
        if( addressField.value.length === 0 ) {
            errors.push('Please enter valid Address');
        }
        if( passwordField.value.length === 0 ) {
            errors.push('Please enter valid Password');
        }

        if(errors.length > 0) {
            setFormState('validationFailed');
            setErrorsState(errors);
        }

        else {
            setFormState('loading');
            setErrorsState([]);
           
            
            formData.append('firstName', firstNameField.value);
            formData.append('lastName', lastNameField.value);
            formData.append('email', emailField.value);
            formData.append('address', addressField.value);
            formData.append('password', passwordField.value);
            formData.append('phoneNumber', phoneField.value);

            fetch(
                `${process.env.REACT_APP_BACKEND}/user/register`,
                {
                    method: 'POST',
                    body: formData
                }
            )
            .then(
                (backendResponseJson) => backendResponseJson.json()
            )
            .then(
                (backendResponse) => {
                    console.log(backendResponse.status);
                    if (backendResponse.status === 'ok') {
                        setFormState('successful');
                    } else {
                        setFormState('unsuccessful');
                    }
                }
            )
            .catch(
                (err) => {
                    console.log(err);
                    setFormState('unsuccessful');
                }
            );
        }
    }

    return (
        <div className='bg-gray-100 mt-4 pt-20 h-screen'>
            <section className='max-w-4xl px-6 py-3 mx-auto bg-primary-300 rounded-md shadow-md font-body'>
                <div className='container mx-auto'>
                    <div className='mx-auto my-10'>
                        <div className='text-center font-body'>
                            <h2 className='font-siteName text-white text-5xl uppercase tracking-wide'>
                                Sign&nbsp; up
                            </h2>
                            <p className='text-neutral-100 mb-1'>
                                    Sign up to order now!
                                </p>
                        </div>
                
                        <div>
                            <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                                <div>
                                    <label className='text-white' for='firstName'>First Name</label>
                                    <input ref={
                                        function(theInputElement) {
                                            firstNameField = theInputElement;
                                    }} id='firstName' type='firstName' className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring' />
                                </div>

                                <div>
                                    <label className='text-white' for='lastName'>Last Name</label>
                                    <input ref={
                                        function(thisInputField) {
                                            lastNameField = thisInputField;
                                    }} id='lastName' type='lastName' className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring' />
                                </div>

                                <div>
                                    <label className='text-white' for='email'>Email</label>
                                    <input ref={
                                        function(thisInputField) {
                                            emailField = thisInputField
                                    }} id='email' type='email' className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring' />
                                </div>

                                <div>
                                    <label className='text-white' for='address'>Address</label>
                                    <input ref={
                                        function(thisInputField) {
                                            addressField = thisInputField
                                    }} id='address' type='address' className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring' />
                                </div>

                                <div>
                                    <label className='text-white' for='password'>Password</label>
                                    <input ref={
                                        function(thisInputField) {
                                            passwordField = thisInputField
                                    }} id='password' type='password' className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring' />
                                </div>

                                <div>
                                    <label className='text-white' for='phone'>Phone (optional)</label>
                                    <input ref={
                                        function(thisInputField) {
                                            phoneField = thisInputField
                                    }} id='phone' type='phone' className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring' />
                                </div>

                                <div>
                                    <label className='text-white'>Upload your profile picture</label><br/>
                                    <input ref={(element)=>{avatarInput = element}} 
                                    onChange={attachFile}
                                    className='field form-control font-body text-white text-sm' id='photo' name='file' 
                                    type='file' multiple='multiple'/>
                                </div>
                            </div>
                        </div>
                        
                        {formState !== 'successful' &&
                            <div className='flex items-center justify-center'>
                                <button 
                                onClick={registerUser}
                                className='btn font-body text-neutral-100 bg-neutral-500 border-neutral-500 md:border-2 hover:bg-neutral-200 hover:border-neutral-200 hover:text-primary-300 hover:shadow-sm transition ease-in-out duration-500 items' type='button'>
                                    Submit
                                </button>
                            </div>
                        }

                        <div className='pt-5'>
                            {formState === 'validationFailed' &&
                                <div>
                                    <ul>
                                        {errorsState.map(
                                            (error) => {
                                                return <li v-if="alertOpen" className="text-red-600 px-6 py-3 border-0 rounded-md relative mb-2 bg-red-200">
                                                <span class="inline-block align-middle mr-8">
                                                    {error}
                                                </span></li>
                                            }
                                        )}
                                    </ul>
                                </div>
                            }
                            
                            {formState === 'successful' &&
                                <div v-if="alertOpen" className='text-green-600 px-6 py-3 border-0 rounded relative mb-2 bg-green-200'>
                                    <span class='inline-block align-middle mr-8'>
                                        You have a successfully created an account
                                    </span>
                                </div>
                            }

                            {formState === 'unsuccessful' &&
                                <div v-if="alertOpen" className="text-red-600 px-6 py-3 border-0 rounded relative mb-2 bg-red-200">
                                    <span class="inline-block align-middle mr-8">
                                        An error occured. Please try again.
                                    </span>
                                </div>
                            }

                            {formState === 'loading' &&
                                <p>Loading...</p>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default RegistrationScreen;