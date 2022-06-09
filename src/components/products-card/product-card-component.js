import React from "react";
import Button, {BUTTON_THEME} from "../button/button-component";
import { useContext } from "react";
import { CartDropdownContext } from "../../context/cart-dropdown-context";
import { Link } from "react-router-dom";
import { ProductCardContainer, Name, Price, Footer } from "./products-card-styles.jsx";
import { selectCartItems } from "../../store/cartDropdown/cartDropdown.selector";
import { useSelector, useDispatch } from "react-redux";
import { setCartItems, incrementItem } from "../../store/cartDropdown/cartDropdown.action";


const ProductCard = ({ products, id, category }) => {

    const dispatch = useDispatch()
    const {name, price, imageUrl} = products;
    const cartItems = useSelector(selectCartItems);
    // const totalPrice = useSelector(selectTotalPrice);
    // const totalQuanityInCart = useSelector(selectTotalQty);
    
    

    // const addCartItem = (cartItems, productToAdd) => {

    //     const foundItem = cartItems.find(item => item.id === productToAdd.id);

    //     if(foundItem){
    //         return cartItems.map(item =>
    //             item.id === productToAdd.id ?
    //             {...item, qty: item.qty + 1} : item
    //         )
    //     }

    //     return [...cartItems, {...productToAdd, qty: 1}]
    // }



    const addProductToCart = (e) => {
        e.preventDefault();
        // addItemToCart(products);
        // const newCartItems = addCartItem(cartItems, products);
        dispatch(incrementItem(cartItems, products));

        console.log(`added ${name} to cart`);

    }

    return (
        <ProductCardContainer >
            <Link to={`/shop/${category}/${id}`}><img src={imageUrl} alt={name} /></Link>
            <Footer>
                <Name>{name}</Name>
                <Price>${price}</Price>
            </Footer>
            <Button title={'buy'} theme={BUTTON_THEME.inverted} onClickHandler={addProductToCart}  />                           
        </ProductCardContainer>
    )
}

export default ProductCard;