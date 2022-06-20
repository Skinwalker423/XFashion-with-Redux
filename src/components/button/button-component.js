import React from "react";
import './button-styles.jsx';
import { BaseButton, GoogleSignInButton, InvertedButton, ButtonSpinner } from "./button-styles.jsx";

export const BUTTON_THEME = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted'
}

const getButton = (buttonType = BUTTON_THEME.base) => (
    {
        [BUTTON_THEME.base] : BaseButton,
        [BUTTON_THEME.google] : GoogleSignInButton,
        [BUTTON_THEME.inverted] : InvertedButton

    }[buttonType]
)



const Button = ({children, title, theme, onClickHandler, isLoading, ...otherProps}) => {

    const CustomButton = getButton(theme);

    return (
        <CustomButton disabled={isLoading} onClick={onClickHandler}>{isLoading ? <ButtonSpinner /> : title }</CustomButton>
    )
}

export default Button;