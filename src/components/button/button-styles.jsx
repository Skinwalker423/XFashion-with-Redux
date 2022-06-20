import styled from "styled-components";
import Spinner from "../spinner/spinner-component";


export const BaseButton = styled.button`
    min-width: 165px;
    width: auto;
    height: 60px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: 1px solid white;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`
export const GoogleSignInButton = styled(BaseButton)`
    background-color: #4285f4;
    color: white;

    &:hover {
        background-color: darkblue;
        border: 1px solid #4285f4;
        color: white;
    }    
`

export const InvertedButton = styled(BaseButton)`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
        border: none;
    }

`

export const ButtonSpinner = styled(Spinner)`
    width: 25px;
    height: 25px;
`