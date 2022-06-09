import { createSelector } from "reselect";

export const selectCartReducer = (state) => state.cartDropdown;

export const selectCartDisplayed = createSelector([selectCartReducer], (cartDropdown) => cartDropdown.cartDropdownDisplayed );


export const selectCartItems = createSelector([selectCartReducer], (cartDropdown) => {
    return cartDropdown.cartItems;
} )

export const selectTotalQty = createSelector([selectCartItems],(cartItems) => {
    return cartItems.reduce((previous, current) => {
            return previous + current.qty;
    }, 0);
})

export const selectTotalPrice = createSelector([selectCartItems],(cartItems) => {
    return cartItems.reduce((totalPrice, currentItem) => {
        return totalPrice + (currentItem.price * currentItem.qty)
    }, 0);
})





// export const updateCartItemsReducer = (newCartItems) => {

//         const totalQuantity = newCartItems.reduce((previous, current) => {
//             return previous + current.qty;
//         }, 0)

//         const totals = newCartItems.reduce((TotalPrice, currentItem ) => {
//             return TotalPrice + (currentItem.price * currentItem.qty)
//         }, 0)

//         createAction(ACTION_TYPES.SET_CART_ITEMS, { cartItems: newCartItems, totalQuanityInCart: totalQuantity, totalPrice: totals });

//     }