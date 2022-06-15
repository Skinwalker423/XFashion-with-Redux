import { async } from "@firebase/util";
import {CardElement, PaymentElement, useElements, useStripe} from "@stripe/react-stripe-js";
import Button from "../button/button-component";
import { BUTTON_THEME } from "../button/button-component";
import { PaymentFormStyle, CardElementStyle, FormContainer } from "./payment-form-style";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";

const PaymentForm = () => {

    const currentUser = useSelector(selectCurrentUser);

    const stripe = useStripe();
    const elements = useElements();

    const paymentHandler = async(e) => {
        e.preventDefault();

        if(!stripe || !elements) {
            return;
        }

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({amount: 10000})
            
        }).then(res => res.json())

        
        const {paymentIntent: {client_secret}} = response;
        // console.log(client_secret);

        try{
            const paymentResult = await stripe.confirmCardPayment(client_secret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                    billing_details: {
                        name: currentUser.email || 'John Doe'
                    }
                }
            })
            if(paymentResult.paymentIntent.status === 'succeeded'){
                alert('Payment Successful');
            }
            
        }catch(error){
            alert(error.message);
        }

    }

    return (
        <FormContainer>
            <PaymentFormStyle onSubmit={paymentHandler}>
                <h1>Payment Form</h1>
                <CardElementStyle className="card-element"/>
                <Button theme={BUTTON_THEME.inverted} title='Pay Now' />
            </PaymentFormStyle>
        </FormContainer>
    )
}

export default PaymentForm;