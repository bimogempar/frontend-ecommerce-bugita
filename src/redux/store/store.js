import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import AuthSlice from "../slice/AuthSlice";
import CartSlice from "../slice/CartSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["authUser"],
}

const rootReducer = combineReducers({
    authUser: AuthSlice,
    cart: CartSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
})

export default store