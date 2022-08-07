import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authUser: null,
    isAuth: false,
    token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuth = true;
            const { email } = action.payload;
            state.authUser = {
                email,
                role: "user",
            };
            state.token = "mytoken";
            localStorage.setItem("token", "mytoken");
        },
        logout: (state) => {
            state.isAuth = false
            state.authUser = null
            state.token = null
            localStorage.removeItem("token")
        },
        fetchAuthUser: (state, action) => {
            if (state.token) {
                state.isAuth = true;
                state.authUser = {
                    email: "bimogempar@example.com",
                    role: "user"
                };
            }
        }
    },
});

export const { login, fetchAuthUser, logout } = authSlice.actions;
export default authSlice.reducer;