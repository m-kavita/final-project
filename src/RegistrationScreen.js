import { useState } from 'react';

function RegistrationScreen() {

    // formState: (1) initial, (2) loading, (3) validationFailed, (4) successful, (5) unsuccessful
    const [formState, setFormState] = useState("initial");

    let firstNameField;
    let lastNameField;
    let emailField;
    let passwordField;
    let phoneField;
    let addressField;
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
            errors.push("Please enter your first name");
        }
        if( lastNameField.value.length === 0 ) {
            errors.push("Please enter your last name");
        }
        if( emailField.value.length === 0 ) {
            errors.push("Please enter valid email");
        }
        if( passwordField.value.length === 0 ) {
            errors.push("Please enter valid password");
        }
        if( addressField.value.length === 0 ) {
            errors.push("Please enter valid address");
        }

        if(errors.length > 0) {
            setFormState("validationFailed");
            setErrorsState(errors);
        }

        else {
            setFormState("loading");
            setErrorsState([]);
           
            
            formData.append('firstName', firstNameField.value);
            formData.append('lastName', lastNameField.value);
            formData.append('email', emailField.value);
            formData.append('email', addressField.value);
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
                    if (backendResponse.status === "ok") {
                        setFormState("successful");
                    } else {
                        setFormState("unsuccessful");
                    }
                }
            )
            .catch(
                (err) => {
                    console.log(err);
                    setFormState("unsuccessful");
                }
            );
        }
    }

    return (
        <div class='mt-4 pt-20 h-screen'>
            <section class="max-w-4xl p-6 mx-auto bg-primary-200 rounded-md shadow-md dark:bg-gray-800 font-body">
                <h2 class="text-lg font-siteName text-white text-5xl uppercase dark:text-white tracking-wide">Sign up</h2>
                
                <form>
                    <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label class="text-gray-700 dark:text-gray-200" for="firstName">First Name</label>
                            <input ref={
                                function(theInputElement) {
                                    firstNameField = theInputElement;
                            }} id="firstName" type="firstName" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label class="text-gray-700 dark:text-gray-200" for="lastName">Last Name</label>
                            <input ref={
                                function(thisInputField) {
                                    lastNameField = thisInputField;
                            }} id="lastName" type="lastName" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label class="text-gray-700 dark:text-gray-200" for="email">Email</label>
                            <input ref={
                                function(thisInputField) {
                                    emailField = thisInputField
                            }} id="email" type="email" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label class="text-gray-700 dark:text-gray-200" for="address">Address</label>
                            <input ref={
                                function(thisInputField) {
                                    addressField = thisInputField
                            }} id="address" type="address" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label class="text-gray-700 dark:text-gray-200" for="password">Password</label>
                            <input ref={
                                function(thisInputField) {
                                    passwordField = thisInputField
                            }} id="password" type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label class="text-gray-700 dark:text-gray-200" for="phone">Phone (optional)</label>
                            <input ref={
                                function(thisInputField) {
                                    phoneField = thisInputField
                            }} id="phone" type="phone" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label>Upload your profile picture</label>
                            <input ref={(element)=>{avatarInput = element}} 
                            onChange={attachFile}
                            className="field form-control" id="photo" name="file" 
                            type="file" multiple="multiple"/>
                        </div>
                    </div>

                    {formState !== "loading" &&
                    <div class="flex justify-end mt-6">
                        <button onClick={registerUser} class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Submit</button>
                    </div>
                    }

                    {formState === "validationFailed" &&
                        <div className="alert alert-danger">

                            <ul>
                                {errorsState.map(
                                    (error) => {
                                        return <li>{error}</li>
                                    }
                                )}
                            </ul>

                        </div>
                    }

                    {formState === "successful" &&
                        <div className="alert alert-success">
                            You have a successfully created an account
                        </div>
                    }

                    {formState === "unsuccessful" &&
                        <div className="alert alert-danger">
                            An error occured. Please try again.
                        </div>
                    }

                    {formState === "loading" &&
                        <p>Loading...</p>
                    }
                </form>
            </section>
        </div>
    )
}

export default RegistrationScreen;