import Button from '../button/button-component';
import CartItems from './cart-items-list-component';
import { useContext } from 'react';
import { CartDropdownContext } from '../../context/cart-dropdown-context';
import { CartDropDownContainer, ButtonLink } from './cart-dropdown-styles';

const CartDropdown = () => {

    const {setCartDropdownDisplayed} = useContext(CartDropdownContext);

    const closeDropdownCartOnCheckout = () => {
        setCartDropdownDisplayed(false);
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