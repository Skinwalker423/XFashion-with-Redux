import { createStore, compose, applyMiddleware } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { rootReducer } from "./root-reducer";
import storage from "redux-persist/lib/storage";


const persistConfig = {
    key: 'root',
    storage, 
    blacklist: ['user']
}


const middlewares = [process.env.NODE_ENV === 'development' && logger, thunk].filter(Boolean);

const composeEnhancers = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose 

const composedEnhancers = composeEnhancers(applyMiddleware(...middlewares));

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, undefined, composedEnhancers);
export const persistor = persistStore(store);


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
