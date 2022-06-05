import React, {useState} from "react";
import { auth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase-utils";
import { GoogleAuthProvider } from "firebase/auth";

import FormInput from "../form-input/form-input-component";
import Button, {BUTTON_THEME} from "../button/button-component";

import { SignInFormContainer, ButtonsContainer } from "./sign-in-form-styles";


const defaultSignInFormFields = {
    email: '',
    password: '',
}


const SignInForm = () => {

    const [signInFormFields, setSignInFormFields] = useState(defaultSignInFormFields);
    const { email, password } = signInFormFields;


    const resetFormFields = () => {
        setSignInFormFields(defaultSignInFormFields);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSignInFormFields({ ...signInFormFields, [name]: value });
    }


    const logInGoogleUser = async() => {
        const response = await signInWithGooglePopup();
        const credential = GoogleAuthProvider.credentialFromResult(response);
        console.log(credential);
    }

    const onFormSubmit = async(e) => {
        e.preventDefault();
        try{
            await signInAuthUserWithEmailAndPassword(auth, email, password );
            resetFormFields();
            console.log('signed in');
        }catch(error){
            alert(error.message)
        }
    }

    return(
        <SignInFormContainer onSubmit={onFormSubmit}>
                <h2>Already have an account?</h2>
                <span>Sign In</span>
                <FormInput
                    label='Email'
                    type='email'
                    onChange={handleInputChange} 
                    value={email}
                    name={'email'}
                    required
                />
                <FormInput
                    label='Password'
                    type='password'
                    onChange={handleInputChange} 
                    value={password}
                    name={'password'}
                    required
                />
                <ButtonsContainer>
                    <Button type='submit' title={'Sign in with Email'} />
                    <Button type='button' title={'Sign in with Google'} onClickHandler={logInGoogleUser} theme={BUTTON_THEME.google} />
                </ButtonsContainer>  
            </SignInFormContainer>
    )
}

export default SignInForm;

