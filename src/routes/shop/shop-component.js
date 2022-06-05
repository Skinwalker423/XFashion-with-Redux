import React from "react";
import ProductsSampleList from "../../components/products-sample-list/products-sample-list";
import { Routes, Route } from "react-router-dom";
import Category from "../categories/categories-component";
import ShowItem from "../show-item/show-item-component";





const Shop = () => {
    return (
        <Routes>
            <Route index element={<ProductsSampleList />} />
            <Route path=":category" element={<Category />} />
            <Route path=":category/:id" element={<ShowItem />} />

        </Routes>
            
    )
}

export default Shop;

