import React from "react";
import { FormInputLabel, FormInputStyle, Group } from "./form-input-styles.jsx";

const FormInput = ({label, ...otherProps }) => {

    const hasInput = otherProps.value.length;
    
    return(
        <Group>
            <FormInputStyle {...otherProps} autoComplete='true' />
            <FormInputLabel shrink={label && hasInput}  htmlFor={otherProps.name}>{label}</FormInputLabel>
        </Group>
    )
}

export default FormInput;