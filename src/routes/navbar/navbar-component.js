import React, {Fragment, useContext} from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { signOutUser } from "../../utils/firebase/firebase-utils";
import { CartDropdownContext } from "../../context/cart-dropdown-context";
import { selectCurrentUser } from "../../store/user/user.selector";
import { NavbarContainer, NavLinkContainer, LogoContainer, NavLink } from "./navbar-styles";
import CartIcon from "../../components/cart-icon/cart-icon-component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown-component";
import { selectCartDisplayed } from "../../store/cartDropdown/cartDropdown.selector";




const NavBar = () => {

    const currentUser = useSelector(selectCurrentUser);
    const cartDropdownDisplayed = useSelector(selectCartDisplayed);

    const logOffAuthUser = async() => {

            try{
                await signOutUser();
                console.log('logged off');
            }catch(error){
                alert(error.message)
            }
        }


    const authenticate = () => {
        if(currentUser){
            return(
                <NavLink as='span' onClick={logOffAuthUser}>Log Out</NavLink>
            )
        }
        return(
                <NavLink to={'/auth'}>Sign In</NavLink>
            )
    } 
    

    return(
        <Fragment>
            <NavbarContainer>
                <LogoContainer to={'/'} >
                    {/* <CrownLogo className='logo' /> */}
                    <img src="../logo192.png" width={'25px'} alt='react logo' />
                </LogoContainer>

                <NavLinkContainer>
                    <NavLink to={'/shop'}>Shop</NavLink>
                    {authenticate()}
                    <CartIcon />
                </NavLinkContainer>
            {cartDropdownDisplayed && <CartDropdown />}
            </NavbarContainer>
            <Outlet />
        </Fragment>
    )
}

export default NavBar;
