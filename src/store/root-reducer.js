import { combineReducers } from "redux";
import userReducer from '../store/user/user.reducer';
import {cartDropdownReducer} from "./cartDropdown/cartDropdownReducer";
import categoriesReducer from "./categories/categories.reducer";
import { currentPathReducer } from "./currentPath/currentPath.reducer";


export const rootReducer = combineReducers({
    user: userReducer,
    cartDropdown: cartDropdownReducer,
    categories: categoriesReducer,
    currentPath: currentPathReducer
})

