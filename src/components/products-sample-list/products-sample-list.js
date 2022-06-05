import React, {useContext} from "react";
import { CategoriesContext } from "../../context/categories-context";
import ProductCard from "../products-card/product-card-component";
import { Fragment } from "react";
import { Link } from "react-router-dom";

import { CategoriesSampleContainer, ProductTitle, ProductsContainer } from "./products-sample-list-styles";

const ProductsSampleList = () => {

    const {categoriesMap} = useContext(CategoriesContext);

    const products = Object.keys(categoriesMap).map((title) => {
        return(

        <CategoriesSampleContainer key={title}>
            <Link to={title}><ProductTitle>{title}</ProductTitle></Link>
            <ProductsContainer>
                {categoriesMap[title].map((item, index) =>{
                    if(index >= 4){
                        return null;
                    }
                    return(
                        <ProductCard 
                        products={item}
                        key={item.id}
                        id={item.id}
                        category={title}
                        />
                        )
                    })}
            </ProductsContainer>
        </CategoriesSampleContainer>
        )
    })

    return(
        <Fragment>
            {products}
        </Fragment>
    )
}

export default ProductsSampleList;

