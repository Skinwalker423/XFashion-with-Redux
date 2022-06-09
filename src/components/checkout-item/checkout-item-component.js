import { CheckoutItemContainer, Quantity, ImageContainer, Value, Arrow, Name, RemoveButton, Total, Price } from "./checkout-item-styles";
import { incrementItem, decrementItem, cancelItemAndRemoveFromCart } from "../../store/cartDropdown/cartDropdown.action";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems, selectTotalPrice } from "../../store/cartDropdown/cartDropdown.selector";


const CheckoutItems = () => {

    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const totalPrice = useSelector(selectTotalPrice);

    const cartList = cartItems.map((item) => {

        const {qty, name, price, imageUrl, id} = item;

        const addItemHandler = () => {
            dispatch(incrementItem(cartItems, item));
        }
        const removeItemHandler = () => {
           dispatch(decrementItem(cartItems, item));                              
        }
        const cancelItemHandler = () => {
            dispatch(cancelItemAndRemoveFromCart(cartItems, item));
        }

        return (
            <CheckoutItemContainer key={id}>
                <ImageContainer>
                    <img src={imageUrl} alt={name} />
                </ImageContainer>
                <Name>{name}</Name>
                <Quantity>
                    <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
                    <Value>{qty}</Value>
                    <Arrow onClick={addItemHandler}>&#10095;</Arrow>
                </Quantity>
                <Price>{price * qty}</Price>
                <RemoveButton onClick={cancelItemHandler}>&#10005;</RemoveButton>
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