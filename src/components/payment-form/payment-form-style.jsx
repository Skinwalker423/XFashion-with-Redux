import styled from "styled-components";
import {CardElement} from "@stripe/react-stripe-js";

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    width: 50%;
    height: 500px;
`

export const PaymentFormStyle = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // align-items: center;
    border: 2px solid black;
    // width: 50%;
    height: 300px;
    padding: 20px;
`
export const CardElementStyle = styled(CardElement)`
    width: 500px;
    padding: 20px;
    border: 2px solid black;
`

