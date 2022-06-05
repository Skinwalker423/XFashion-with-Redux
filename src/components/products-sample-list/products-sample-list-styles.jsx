import styled from "styled-components";

export const CategoriesSampleContainer = styled.div` 
    margin: 50px 0;
`

export const ProductTitle = styled.div` 
        font-size: x-large;
        font-weight: bolder;
        color: red;
        text-transform: uppercase;
        font-family: 'Times New Roman', Times, serif;

`

export const ProductsContainer = styled.div` 
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 10px;
    row-gap: 50px;
    @media (max-width: 500px) {
            display: flex;
            flex-direction: column;
    }
`