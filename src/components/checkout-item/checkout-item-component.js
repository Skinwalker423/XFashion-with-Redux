import { useContext} from "react";
import { CartDropdownContext } from "../../context/cart-dropdown-context";
import { CheckoutItemContainer, Quantity, ImageContainer, Value, Arrow, Name, RemoveButton, Total, Price } from "./checkout-item-styles";


const CheckoutItems = () => {

    const {cartItems, addItemToCart, removeItemToCart, cancelItemFromCart, totalPrice} = useContext(CartDropdownContext);

    const cartList = cartItems.map((item) => {

        const {qty, name, price, imageUrl, id} = item;

        const incrementItem = () => {
            addItemToCart(item);
        }
        const decrementItem = () => {
           removeItemToCart(item);                                
        }
        const cancelItemAndRemoveFromCart = () => {
            cancelItemFromCart(item)
        }

        return (
            <CheckoutItemContainer key={id}>
                <ImageContainer>
                    <img src={imageUrl} alt={name} />
                </ImageContainer>
                <Name>{name}</Name>
                <Quantity>
                    <Arrow onClick={decrementItem}>&#10094;</Arrow>
                    <Value>{qty}</Value>
                    <Arrow onClick={incrementItem}>&#10095;</Arrow>
                </Quantity>
                <Price>{price * qty}</Price>
                <RemoveButton onClick={cancelItemAndRemoveFromCart}>&#10005;</RemoveButton>
            </CheckoutItemContainer>
        )
    })

    return (
        <>
            {cartList}
            <Total className="total">Total: ${totalPrice}</Total>
        </>
    )
}

export default CheckoutItems;