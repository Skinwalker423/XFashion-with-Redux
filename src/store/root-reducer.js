import { combineReducers } from "redux";
import userReducer from '../store/user/user.reducer';
import {cartDropdownReducer} from "./cartDropdown/cartDropdownReducer";
import categoriesReducer from "./categories/categories.reducer";

export const rootReducer = combineReducers({
    user: userReducer,
    cartDropdown: cartDropdownReducer,
    categories: categoriesReducer,
})

