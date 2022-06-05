import styled from "styled-components";

export const ProductCardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;

    a{
        width: 100%;
        height: 90%;
        object-fit: cover;
        margin-bottom: 10px;

    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        margin-bottom: 5px;

    }

    button {
        width: 80%;
        opacity: 0.7;
        position: absolute;
        top: 255px;
        display: none;
    }

    &:hover {
        img {
            opacity: 0.8;
        }

        button {
            opacity: 0.85;
            display: flex;
        }
    }

}
`



// .product-card-container {
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     height: 350px;
//     align-items: center;
//     position: relative;

//     a{
//         width: 100%;
//         height: 90%;
//         object-fit: cover;
//         margin-bottom: 10px;

//     }

//     img {
//         width: 100%;
//         height: 100%;
//         object-fit: cover;
//         margin-bottom: 5px;

//     }

//     button {
//         width: 80%;
//         opacity: 0.7;
//         position: absolute;
//         top: 255px;
//         display: none;
//     }

//     &:hover {
//         img {
//             opacity: 0.8;
//         }

//         button {
//             opacity: 0.85;
//             display: flex;
//         }
//     }

export const Footer = styled.div`
        width: 100%;
        height: 5%;
        display: flex;
        justify-content: space-between;
        font-size: 18px;

`

export const Name = styled.h2` 
        width: 90%;
        margin-bottom: 15px;
`

export const Price = styled.p`
    width: 10%;
`

//     .footer {
//         width: 100%;
//         height: 5%;
//         display: flex;
//         justify-content: space-between;
//         font-size: 18px;

//         .name {
//             width: 90%;
//             margin-bottom: 15px;
//         }

//         .price {
//             width: 10%;
//         }
//     }
// }




//     .product-title {
//         font-size: x-large;
//         font-weight: bolder;
//         color: red;
//         text-transform: uppercase;
//         font-family: 'Times New Roman', Times, serif;
//     }
// }

