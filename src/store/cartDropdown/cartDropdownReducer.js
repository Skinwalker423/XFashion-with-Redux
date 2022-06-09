import { ACTION_TYPES } from "./cartDropdown.types";

const INITIAL_STATE = {
    cartDropdownDisplayed: false,
    cartItems: [],
    totalQuantityInCart: 0,
    totalPrice: 0,

}

export const cartDropdownReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch(type) {
        case ACTION_TYPES.SET_CARTDROPDOWN_DISPLAY:
            return {...state, cartDropdownDisplayed: payload}
        case ACTION_TYPES.SET_CART_ITEMS :
            return {...state, cartItems: payload}
        case ACTION_TYPES.SET_TOTAL_QTY :
            return {...state, totalQuantityInCart: payload}
        case ACTION_TYPES.SET_TOTAL_PRICE :
            return {...state, totalPrice: payload}
        default:
            return state;
    }   
}

// export const updateCartItemsReducer = (newCartItems) => {

//         const totalQuantity = newCartItems.reduce((previous, current) => {
//             return previous + current.qty;
//         }, 0)

//         const totals = newCartItems.reduce((TotalPrice, currentItem ) => {
//             return TotalPrice + (currentItem.price * currentItem.qty)
//         }, 0)

//         createAction(ACTION_TYPES.SET_CART_ITEMS, { cartItems: newCartItems, totalQuanityInCart: totalQuantity, totalPrice: totals });

//     }