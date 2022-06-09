import Button from '../button/button-component';
import CartItems from './cart-items-list-component';
import { CartDropDownContainer, ButtonLink } from './cart-dropdown-styles';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartDisplayed } from '../../store/cartDropdown/cartDropdown.selector';
import { setCartDropdownDisplayed } from '../../store/cartDropdown/cartDropdown.action';


const CartDropdown = () => {
    const dispatch = useDispatch();
    const cartDropdownDisplayed = useSelector(selectCartDisplayed);

    const  toggleCart = () => {
        return dispatch(setCartDropdownDisplayed(!cartDropdownDisplayed));
    }

    const closeDropdownCartOnCheckout = () => {
        toggleCart();
    }

    return(
        <CartDropDownContainer>
            <CartItems />
            <ButtonLink to='/checkout'>
                <Button title='checkout' onClickHandler={closeDropdownCartOnCheckout} />
            </ButtonLink>
        </CartDropDownContainer>
    )
}

export default CartDropdown;