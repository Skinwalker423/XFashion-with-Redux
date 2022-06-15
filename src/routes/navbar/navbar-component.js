import React, {Fragment} from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { selectCurrentUser } from "../../store/user/user.selector";
import { NavbarContainer, NavLinkContainer, LogoContainer, NavLink } from "./navbar-styles";
import CartIcon from "../../components/cart-icon/cart-icon-component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown-component";
import { selectCartDisplayed } from "../../store/cartDropdown/cartDropdown.selector";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentPath } from "../../store/currentPath/currentPath.acton";
import { userLogOutStart } from "../../store/user/user.action";





const NavBar = () => {

    const currentUser = useSelector(selectCurrentUser);
    const cartDropdownDisplayed = useSelector(selectCartDisplayed);

    const dispatch = useDispatch();
    const location = useLocation();

    const logOffAuthUser = async() => {
            dispatch(userLogOutStart());
        }

    const saveCurrentPath = () => {
        const currentPath = location.pathname;
        dispatch(setCurrentPath(currentPath));
    }


    const authenticate = () => {
        if(currentUser){
            return(
                <NavLink as='span' onClick={logOffAuthUser}>Log Out</NavLink>
            )
        }
        return(
                <NavLink onClick={saveCurrentPath} to={'/auth'}>Sign In</NavLink>
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
