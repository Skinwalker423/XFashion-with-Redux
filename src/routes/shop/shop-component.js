import React, {useEffect} from "react";
import ProductsSampleList from "../../components/products-sample-list/products-sample-list";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Category from "../categories/categories-component";
import ShowItem from "../show-item/show-item-component";
import { setCategories }from '../../store/categories/categories.action';
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase-utils";






const Shop = () => {

    const dispatch = useDispatch();

    useEffect(() =>{
        const getCategoryMap = async() => {
        const categoriesArray = await getCategoriesAndDocuments();
        dispatch(setCategories(categoriesArray));
    }   
        getCategoryMap();
        
    }, [dispatch])  


    return (
        <Routes>
            <Route index element={<ProductsSampleList />} />
            <Route path=":category" element={<Category />} />
            <Route path=":category/:id" element={<ShowItem />} />
        </Routes>
            
    )
}

export default Shop;

