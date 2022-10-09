import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authUser: null,
    isAuth: false,
    token: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuth = true;
            const { user, access_token } = action.payload;
            state.authUser = user
            state.token = access_token;
            localStorage.setItem("access_token", access_token);
        },
        logout: (state) => {
            state.isAuth = false
            state.authUser = null
            state.token = null
            localStorage.removeItem("access_token")
        },
    },
    extraReducers: {
    }
});

export const { login, logout, } = authSlice.actions;
export default authSlice.reducer;