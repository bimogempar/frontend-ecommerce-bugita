import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: [
        {
            id: 1,
            title: "Product 1",
            description: "Product 1 description",
            category: "Category 1",
            images: [
                "https://picsum.photos/200/300",
            ],
            price: 10,
            count: 1,
        }
    ],
    totalQty: 1,
    totalPrice: 10,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            if (state.carts.some((cart) => cart.id === action.payload.id)) {
                state.carts = state.carts.map((cart) =>
                    cart.id === action.payload.id
                        ? { ...cart, count: cart.count + 1, }
                        : cart
                );
            } else {
                const { id, title, description, category, images, price } = action.payload;
                const count = 1
                state.carts.push(
                    {
                        id,
                        title,
                        description,
                        category,
                        images,
                        price,
                        count,
                    }
                );
            }
            state.totalQty += 1;
            state.totalPrice += action.payload.price;
        },
        addCount: (state, action) => {
            // eslint-disable-next-line array-callback-return
            state.carts.map((item) => {
                if (item.id === action.payload.id) {
                    item.count += 1;
                    state.totalQty += 1;
                    state.totalPrice += item.price;
                }
            });
        },
        minusCount: (state, action) => {
            // eslint-disable-next-line array-callback-return
            state.carts.map((item) => {
                if (item.id === action.payload.id) {
                    item.count -= 1;
                    state.totalQty -= 1;
                    state.totalPrice -= item.price;
                    if (item.count === 0) {
                        state.carts = state.carts.filter((cart) => cart.id !== action.payload.id);
                    }
                }
            });
        }
    }
});

export const { addToCart, addCount, minusCount } = cartSlice.actions;
export default cartSlice.reducer;
