import { useContext } from 'react';
import { CartDropdownContext } from '../../context/cart-dropdown-context';
import { CartItem, ItemDetails, CartItemsContainer, Name, Price, EmptyMessage } from './cart-dropdown-styles';




const CartItems = () => {

    const {cartItems} = useContext(CartDropdownContext);

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