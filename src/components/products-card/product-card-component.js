import React from "react";
import Button, {BUTTON_THEME} from "../button/button-component";
import { useContext } from "react";
import { CartDropdownContext } from "../../context/cart-dropdown-context";
import { Link } from "react-router-dom";
import { ProductCardContainer, Name, Price, Footer } from "./products-card-styles.jsx";


const ProductCard = ({ products, id, category }) => {

    const {name, price, imageUrl} = products;
    const { addItemToCart} = useContext(CartDropdownContext);



    const addProductToCart = (e) => {
        e.preventDefault();
        addItemToCart(products);
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