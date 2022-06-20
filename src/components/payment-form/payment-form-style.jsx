import styled from "styled-components";
import { CardElement } from "@stripe/react-stripe-js";
import Button from "../button/button-component";

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 2px solid black;
    width: 100%;
    height: 500px;
    padding: 50px 0;
`

export const PaymentFormStyle = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // align-items: center;
    border: 2px solid black;
    // width: 500px;
    height: 300px;
    padding: 20px;
`
export const CardElementStyle = styled(CardElement)`
    width: 500px;
    padding: 20px;
    border: 2px solid black;
`

export const totalAmountStyle = styled.h3`
    height: 200px;
    margin: 100px;
`
export const PaymentButton = styled(Button)`
    height: 75px;
`


