import styled from "styled-components";

export const ShopCategoryListContainer = styled.div` 

`
export const CatProdCont = styled.div` 
        display: grid;
        column-gap: 10px;
        grid-template-columns: repeat(4, 1fr);
        row-gap: 50px;
        @media (max-width: 500px) {
                display: flex;
                flex-direction: column;
    }
`

export const CategoryTitle = styled.h1` 
        text-align: center;
        font-size: 72px;
        font-weight: bolder;
        color: red;
        text-transform: uppercase;
        font-family: 'Times New Roman', Times, serif;
`

// .shop-category-list-container{

//     .product-title{
//         text-align: center;
//         font-size: 72px;
//         font-weight: bolder;
//         color: red;
//         text-transform: uppercase;
//         font-family: 'Times New Roman', Times, serif;
//     }
// }