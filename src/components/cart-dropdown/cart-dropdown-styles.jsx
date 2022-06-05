import styled from "styled-components";
import { Link } from "react-router-dom";


export const CartDropDownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
`

export const ButtonLink = styled(Link)`
    margin-top: auto;
    button {
        width: 100%;
    }
`



export const EmptyMessage = styled.span` 
    font-size: 18px;
    margin: 50px auto;
`




export const CartItemsContainer = styled.div`
        height: 240px;
        display: flex;
        flex-direction: column;
        overflow: scroll;

`

export const CartItem = styled.div`
    width: 100%;
    display: flex;
    height: 80px;
    margin-bottom: 15px;

    img {
        width: 30%;
    }
`

export const ItemDetails = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;
`

export const Name = styled.span`
    font-size: 16px;
`
export const Price = styled.span`
    font-size: 16px;
`



// .cart-item-container {
    

//     .item-details {
        

//         .name {
//             font-size: 16px;
//         }
//     }
// }