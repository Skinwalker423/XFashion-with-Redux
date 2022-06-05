import { ShopCategoryListContainer, CategoryTitle, CatProdCont } from "./shop-products-list-styles";
import React, {useContext, useState, useEffect} from "react";
import { CategoriesContext } from '../../context/categories-context';
import ProductCard from '../products-card/product-card-component';


const ShopCategoryList = ({category}) => {

    const {categoriesMap} = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
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

