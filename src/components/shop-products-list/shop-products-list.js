import { ShopCategoryListContainer, CategoryTitle, CatProdCont } from "./shop-products-list-styles";
import React, { useState, useEffect} from "react";
import ProductCard from '../products-card/product-card-component';
import { selectCategoriesMap } from "../../store/categories/categories.selector";
import { useSelector } from "react-redux";


const ShopCategoryList = ({category}) => {

    const categoriesMap = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        console.log('effect fired for setProducts');
        setProducts(categoriesMap[category]);
    }, [products, categoriesMap, category])

        return(
            <ShopCategoryListContainer>
                <CategoryTitle>{category}</CategoryTitle>
                <CatProdCont>
                    {products && products.map((item) =>{
                        return(
                            <ProductCard 
                            products={item}
                            key={item.id}
                            />
                            )
                        })}
                </CatProdCont>
            </ShopCategoryListContainer>
        )

}

export default ShopCategoryList;

