import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon-styles.jsx';
import { setCartDropdownDisplayed } from '../../store/cartDropdown/cartDropdown.action';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartDisplayed, selectTotalQty } from '../../store/cartDropdown/cartDropdown.selector';

const CartIcon = () => {

    const dispatch = useDispatch();
    const cartDropdownDisplayed = useSelector(selectCartDisplayed);
    const totalQuantityInCart = useSelector(selectTotalQty);
    


    const  toggleCart = () => {
        return dispatch(setCartDropdownDisplayed(!cartDropdownDisplayed));
    }

    return (
        <CartIconContainer onClick={toggleCart}>
            <ShoppingIcon />
            <ItemCount>{totalQuantityInCart}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;