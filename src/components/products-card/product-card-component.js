import React from "react";
import Button, {BUTTON_THEME} from "../button/button-component";
import { Link } from "react-router-dom";
import { ProductCardContainer, Name, Price, Footer } from "./products-card-styles.jsx";
import { selectCartItems } from "../../store/cartDropdown/cartDropdown.selector";
import { useSelector, useDispatch } from "react-redux";
import { incrementItem } from "../../store/cartDropdown/cartDropdown.action";


const ProductCard = ({ product, id, category }) => {

    const dispatch = useDispatch()
    const {name, price, imageUrl} = product;
    const cartItems = useSelector(selectCartItems);
    
    const addProductToCart = (e) => {
        e.preventDefault();
        dispatch(incrementItem(cartItems, product));
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