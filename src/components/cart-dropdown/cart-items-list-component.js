import { CartItem, ItemDetails, CartItemsContainer, Name, Price, EmptyMessage } from './cart-dropdown-styles';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cartDropdown/cartDropdown.selector';




const CartItems = () => {

    const cartItems = useSelector(selectCartItems);

    const renderCartItems = cartItems.map(({imageUrl, name, price, id, qty}) => {
            return (
                <CartItem key={id}>
                    <img src={imageUrl} alt={name} />
                    <ItemDetails>
                        <Name>{name}</Name>
                        <Price>{qty}x${price} = {price * qty}</Price>
                    </ItemDetails>
                </CartItem>
            )
        })
    

    return(
            <CartItemsContainer>
                {cartItems.length ? renderCartItems : (<EmptyMessage>Empty Cart</EmptyMessage>)}
            </CartItemsContainer>
    )
}

export default CartItems;