import React from "react";
import ProductCard from "../products-card/product-card-component";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { selectCategoriesMap, selectIsLoading } from "../../store/categories/categories.selector";
import { useSelector } from "react-redux";
import Spinner from "../spinner/spinner-component";


import { CategoriesSampleContainer, ProductTitle, ProductsContainer } from "./products-sample-list-styles";

const ProductsSampleList = () => {

    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectIsLoading);

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
                        product={item}
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
            { isLoading ? <Spinner /> : products }
        </Fragment>
    )
}

export default ProductsSampleList;

