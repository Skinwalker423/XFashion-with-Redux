import { useContext } from 'react';
import { CartDropdownContext } from '../../context/cart-dropdown-context';
import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon-styles.jsx';

const CartIcon = () => {

    const {cartDropdownDisplayed, setCartDropdownDisplayed, totalQuanityInCart} = useContext(CartDropdownContext);


    const  toggleCart = () => {
        setCartDropdownDisplayed(!cartDropdownDisplayed);
    }

    return (
        <CartIconContainer onClick={toggleCart}>
            <ShoppingIcon />
            <ItemCount>{totalQuanityInCart}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;