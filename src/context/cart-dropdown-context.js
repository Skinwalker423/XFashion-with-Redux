// import { createContext, useReducer } from "react";
// import createAction from "../utils/reducer/createAction";


// const addCartItem = (cartItems, productToAdd) => {

//     const foundItem = cartItems.find(item => item.id === productToAdd.id);

//     if(foundItem){
//         return cartItems.map(item =>
//             item.id === productToAdd.id ?
//              {...item, qty: item.qty + 1} : item
//         )
//     }

//     return [...cartItems, {...productToAdd, qty: 1}]
// }
// const removeCartItem = (cartItems, productToRemove) => {

//     const foundItem = cartItems.find(item => item.id === productToRemove.id);

//     if(foundItem.qty === 1){
//         const newCartItems = cartItems.filter(item =>
//             item.id !== productToRemove.id 
//         )
//         return [...newCartItems]
//     }

//     if(foundItem){
//         return cartItems.map(item =>
//             item.id === productToRemove.id ?
//              {...item, qty: item.qty - 1} : item
//         )
//     }

//     return [...cartItems]
// }
// const cancelCartItem = (cartItems, productToCancel) => {

//     const foundItem = cartItems.find(item => item.id === productToCancel.id);

//     if(foundItem){
//         const newCartItems = cartItems.filter(item =>
//             item.id !== productToCancel.id 
//         )
//         return [...newCartItems]
//     }

//     return [...cartItems]
// }

// export const CartDropdownContext = createContext({
//     cartDropdownDisplayed: false,
//     setCartDropdownDisplayed: () => {},
//     cartItems: [],
//     addItemToCart: () => {},
//     totalQuanityInCart: 0,
//     setTotalQuanityInCart: () => {},
//     totalPrice: 0,
//     setTotalPrice: () => {},
// })

// const ACTION_TYPES = {
//     'SET_CARTDROPDOWN_DISPLAY': 'SET_CARTDROPDOWN_DISPLAY',
//     'SET_CART_ITEMS' : 'SET_CART_ITEMS'
// }

// const INITIAL_STATE = {
//     cartDropdownDisplayed: false,
//     cartItems: [],
//     totalQuanityInCart: 0,
//     totalPrice: 0,
// }

// const cartDropdownReducer = (state, action) => {
//     const { type, payload } = action;

//     switch(type) {
//         case ACTION_TYPES.SET_CARTDROPDOWN_DISPLAY:
//             return {...state, cartDropdownDisplayed: payload}
//         case ACTION_TYPES.SET_CART_ITEMS :
//             return {...state, ...payload}
//         default:
//             return new Error('woops')
//     }   
// }


// export const CartDropdownProvider = ({children}) => {
//     const [state, dispatch] = useReducer(cartDropdownReducer, INITIAL_STATE);
//     const {cartDropdownDisplayed, cartItems, totalQuanityInCart, totalPrice } = state;

//     const setCartDropdownDisplayed = (isDisplayed) => {
//         dispatch(createAction(ACTION_TYPES.SET_CARTDROPDOWN_DISPLAY, isDisplayed));
        
//     }

//     const updateCartItemsReducer = (newCartItems) => {

//         const totalQuantity = newCartItems.reduce((previous, current) => {
//             return previous + current.qty;
//         }, 0)

//         const totals = newCartItems.reduce((TotalPrice, currentItem ) => {
//             return TotalPrice + (currentItem.price * currentItem.qty)
//         }, 0)

//         dispatch(createAction(ACTION_TYPES.SET_CART_ITEMS, { cartItems: newCartItems, totalQuanityInCart: totalQuantity, totalPrice: totals }));

//     }

//     const addItemToCart = (productToAdd) => {
//         const newCartItems = addCartItem(cartItems, productToAdd);
//         updateCartItemsReducer(newCartItems);
//     }
//     const removeItemToCart = (productToRemove) => {
//         const newCartItems = removeCartItem(cartItems, productToRemove);
//         updateCartItemsReducer(newCartItems);
//     }
//     const cancelItemFromCart = (productToCancel) => {
//         const newCartItems = cancelCartItem(cartItems, productToCancel);updateCartItemsReducer(newCartItems);
//     }


//     const value = {cartDropdownDisplayed, setCartDropdownDisplayed, cartItems, addItemToCart, totalQuanityInCart, removeItemToCart, totalPrice, cancelItemFromCart};
//     return(
//         <CartDropdownContext.Provider value={value} >{children}</CartDropdownContext.Provider>
//     )
// }

