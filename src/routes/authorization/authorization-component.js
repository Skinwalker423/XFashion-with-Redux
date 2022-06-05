import React from "react";
 import SignUpForm from "../../components/sign-up-form/sign-up-form-component";
 import { AuthorizationFormsContainer } from "./authorization-styles";
 import SignInForm from "../../components/sign-in-form/sign-in-form-component";

const Authorization = () => {


    return (
        <AuthorizationFormsContainer>
            <SignInForm />
            <SignUpForm />
        </AuthorizationFormsContainer>
        
    )
}

export default Authorization;

