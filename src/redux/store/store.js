import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../slice/AuthSlice";
import CartSlice from "../slice/CartSlice";

export default configureStore({
    reducer: {
        cart: CartSlice,
        authUser: AuthSlice,
    },
});