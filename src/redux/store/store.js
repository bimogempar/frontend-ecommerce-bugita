import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../slice/CartSlice";

export default configureStore({
    reducer: {
        cart: CartSlice,
    },
});