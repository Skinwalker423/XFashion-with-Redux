import React, { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase-utils";

import FormInput from "../form-input/form-input-component";
import Button from "../button/button-component";

import './sign-up-form-styles.scss';



const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value });
    }

    const signUpWithEmailAndPassword = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            console.log('password not matching');
            return;
        }
        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth({ ...user, displayName });
            console.log('account created');
            resetFormFields();

        } catch (error) {
           alert(error.message);
        }

    }

    return (

        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={signUpWithEmailAndPassword}>
                <FormInput
                    label='Display name'
                    type='text'
                    onChange={handleInputChange} 
                    value={displayName}
                    name={'displayName'}
                    required
                />
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
                <FormInput
                    label='Confirm Password'
                    type='password'
                    onChange={handleInputChange} 
                    value={confirmPassword}
                    name={'confirmPassword'}
                    required
                />
                <Button title='Submit' />
            </form>
        </div>
    )
}

export default SignUpForm;