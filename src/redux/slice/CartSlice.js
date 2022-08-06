import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: [
        {
            id: 1,
            name: "Product 1",
            description: "Product 1 description",
            category: "Category 1",
            images: [
                "https://picsum.photos/200/300",
            ],
            price: 10,
            count: 1,
        }
    ],
    totalPrice: 10,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.carts.push(action.payload);
            state.totalPrice += action.payload.price;
        }
    }
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
