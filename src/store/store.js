import { createStore, compose, applyMiddleware } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import logger from "redux-logger";
// import thunk from "redux-thunk";
import { rootReducer } from "./root-reducer";
import storage from "redux-persist/lib/storage";

import createSagaMiddleware from 'redux-saga';
import { rootSaga } from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cartItems']
}


const middlewares = [process.env.NODE_ENV === 'development' && logger, sagaMiddleware ].filter(Boolean);

const composeEnhancers = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhancers = composeEnhancers(applyMiddleware(...middlewares));


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, undefined, composedEnhancers);
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

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
