import React from "react";
import './button-styles.jsx';
import { BaseButton, GoogleSignInButton, InvertedButton } from "./button-styles.jsx";

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



const Button = ({title, theme, onClickHandler}) => {

    const CustomButton = getButton(theme);

    return (
        <CustomButton onClick={onClickHandler}>{title}</CustomButton>
    )
}

export default Button;