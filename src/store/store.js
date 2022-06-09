import { createStore, compose, applyMiddleware } from "redux";
import logger from "redux-logger";
import { ThunkMiddleware } from "redux-thunk";
import { rootReducer } from "./root-reducer";

const middlewares = [logger];

const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, composedEnhancers);

// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./user.reducer";
// import cartDropdownReducer from "./cartDropdownReducer";


// const store = configureStore({
//     reducer: {
//         user: userReducer,
//         cartDropdown: cartDropdownReducer
//     }
// })

// export default store;
