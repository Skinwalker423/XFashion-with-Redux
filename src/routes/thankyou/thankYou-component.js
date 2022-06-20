import Button from "../../components/button/button-component";
import { Link } from "react-router-dom";
import { ThankBody, ThankYouContainer } from "./thankYou-style";

const ThankYou = () => {
    return (
        <ThankBody>
            <ThankYouContainer>
                <h1>Thank You for the purchase!</h1>
                <img src="../logo512.PNG" alt='thank you pic' />
                <Link to="/shop">
                    <Button title='Continue Shopping' />
                </Link>
            </ThankYouContainer>
        </ThankBody>
    )
}

export default ThankYou;