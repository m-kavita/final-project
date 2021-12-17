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
            <section className='max-w-4xl p-6 mx-auto bg-neutral-700 rounded-md shadow-md dark:bg-gray-800 font-body'>
                <h2 className='font-siteName text-primary-200 text-5xl uppercase dark:text-white tracking-wide'>Sign up</h2>
                
                <div>
                    <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                        <div>
                            <label className='text-white dark:text-gray-200' for='firstName'>First Name</label>
                            <input ref={
                                function(theInputElement) {
                                    firstNameField = theInputElement;
                            }} id='firstName' type='firstName' className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring' />
                        </div>

                        <div>
                            <label className='text-white dark:text-gray-200' for='lastName'>Last Name</label>
                            <input ref={
                                function(thisInputField) {
                                    lastNameField = thisInputField;
                            }} id='lastName' type='lastName' className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring' />
                        </div>

                        <div>
                            <label className='text-white dark:text-gray-200' for='email'>Email</label>
                            <input ref={
                                function(thisInputField) {
                                    emailField = thisInputField
                            }} id='email' type='email' className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring' />
                        </div>

                        <div>
                            <label className='text-white dark:text-gray-200' for='address'>Address</label>
                            <input ref={
                                function(thisInputField) {
                                    addressField = thisInputField
                            }} id='address' type='address' className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring' />
                        </div>

                        <div>
                            <label className='text-white dark:text-gray-200' for='password'>Password</label>
                            <input ref={
                                function(thisInputField) {
                                    passwordField = thisInputField
                            }} id='password' type='password' className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring' />
                        </div>

                        <div>
                            <label className='text-white dark:text-gray-200' for='phone'>Phone (optional)</label>
                            <input ref={
                                function(thisInputField) {
                                    phoneField = thisInputField
                            }} id='phone' type='phone' className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring' />
                        </div>

                        <div>
                            <label className='text-white dark:text-gray-200'>Upload your profile picture</label>
                            <input ref={(element)=>{avatarInput = element}} 
                            onChange={attachFile}
                            className='field form-control' id='photo' name='file' 
                            type='file' multiple='multiple'/>
                        </div>

                        {formState !== 'successful' &&
                            <div className='flex justify-end mt-6'>
                                <button onClick={registerUser} className='font-body btn ml-2 leading-5 text-white bg-gray-400 border-gray-400 md:border-2 hover:bg-gray-100 hover:border-gray-100 hover:text-gray-400 hover:shadow-sm transition ease-in-out duration-500'>
                                Submit
                                </button>
                            </div>
                        }
                </div>

                    </div>

                <div className='pt-10'>
                    {formState === 'validationFailed' &&
                        <div>

                            <ul>
                                {errorsState.map(
                                    (error) => {
                                        return <li v-if="alertOpen" className="text-red-600 px-6 py-3 border-0 rounded-md relative mb-4 bg-red-200">
                                        <span class="inline-block align-middle mr-8">
                                            {error}
                                        </span></li>
                                    }
                                )}
                            </ul>
                        </div>
                    }
                    
                    {formState === 'successful' &&
                        <div v-if="alertOpen" className='text-green-600 px-6 py-3 border-0 rounded relative mb-4 bg-green-200'>
                            <span class='inline-block align-middle mr-8'>
                                You have a successfully created an account
                            </span>
                        </div>
                    }

                    {formState === 'unsuccessful' &&
                        <div v-if="alertOpen" className="text-red-600 px-6 py-3 border-0 rounded relative mb-4 bg-red-200">
                            <span class="inline-block align-middle mr-8">
                                An error occured. Please try again.
                            </span>
                        </div>
                    }

                    {formState === 'loading' &&
                        <p>Loading...</p>
                    }
                </div>
            </section>
        </div>
    )
}

export default RegistrationScreen;