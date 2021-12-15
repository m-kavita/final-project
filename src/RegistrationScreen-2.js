import { useState } from 'react';

function RegistrationScreen() {

    // formState: (1) initial, (2) loading, (3) validationFailed, (4) successful, (5) unsuccessful
    const [formState, setFormState] = useState("initial");

    let firstNameField;
    let lastNameField;
    let emailField;
    let passwordField;
    let phoneField;
    let checkBox;
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
        if( checkBox.checked === false ) {
            errors.push("Please accept the terms & conditions");
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
        <div className="container" style={{"margin-top": "5em", "max-width": "40em"}}>
            
            <h1>Register your Interest</h1>
            <br/>

            <label>Enter your firstname *</label>
            <input ref={
                function(theInputElement) {
                    firstNameField = theInputElement;
                }
            } className="field form-control" name="firstName" type="text" />

            <label>Enter your lastname *</label>
            <input 
            ref={
                function(thisInputField) {
                    lastNameField = thisInputField;
                }
            } 
            className="field form-control" name="lastName" type="text" />

            <label>Enter your email *</label>
            <input ref={
                function(thisInputField) {
                    emailField = thisInputField
                }
            }
            className="field form-control" name="email" type="text" />

            <label>Enter a password *</label>
            <input ref={
                function(thisInputField) {
                    passwordField = thisInputField
                }
            }
            className="field form-control" name="password" autocomplete="off" type="password" />

            <label>Enter your phone (optional)</label>
            <input ref={
                function(thisInputField) {
                    phoneField = thisInputField
                }
            }
            className="field form-control" name="phone" type="text" />

            <br/><br/>

            <label>Upload your profile picture</label>
            <input ref={(element)=>{ avatarInput = element}} 
            onChange={attachFile}
            className="field form-control" id="photo" name="file" 
            type="file" multiple="multiple"/>

            <br/><br/>

            <label>Do you agree to terms &amp; conditions? *</label>
            <input ref={
                function(thisCheckbox) {
                    checkBox = thisCheckbox;
                }
            }
            className="checkbox" name="termsConditions" type="checkbox" /> Yes

            <br/><br/>


            {
                formState !== "loading" &&
                <div>
                    <button 
                    onClick={registerUser}
                    className="btn btn-primary"
                    style={{"padding": "10px", "font-size": "16px"}}>
                        Submit
                    </button><br/><br/>
                </div>
            }

            {
                formState === "validationFailed" &&
                <div className="alert alert-danger">

                    <ul>
                        {
                            errorsState.map(
                                (error) => {
                                    return <li>{error}</li>
                                }
                            )
                        }
                    </ul>

                </div>
            }

            {
                formState === "successful" &&
                <div className="alert alert-success">You have a successfully created an account</div>
            }

            {
                formState === "unsuccessful" &&
                <div className="alert alert-danger">An error occured. Please try again.</div>
            }

            {
                formState === "loading" &&
                <p>Loading...</p>
            }


        </div>
    )
}

export default RegistrationScreen;