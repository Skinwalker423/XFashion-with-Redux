import CheckoutItems from "../../components/checkout-item/checkout-item-component";
import { CheckoutContainer, CheckoutHeader, HeaderBlock  } from "./checkout-styles";

const Checkout = () => {
    return(
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Prduct</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quanity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            <CheckoutItems />
        </CheckoutContainer>
    )
}

export default Checkout;