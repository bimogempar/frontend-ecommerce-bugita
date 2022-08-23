import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    authUser: null,
    isAuth: false,
    token: null,
};

export const fetchAuthMe = createAsyncThunk('/auth/me', async () => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}auth/me`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return
    }
});

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
        [fetchAuthMe.pending]: (state, action) => {
            state.isAuth = false
            state.authUser = null
            state.token = null
        },
        [fetchAuthMe.fulfilled]: (state, action) => {
            state.isAuth = true
            state.authUser = action.payload
            state.token = localStorage.getItem('access_token')
            if (action.payload.status === 401) {
                state.isAuth = false
                state.authUser = null
                state.token = null
            }
        },
        [fetchAuthMe.rejected]: (state, action) => {
            state.isAuth = false
            state.authUser = null
            state.token = null
        }
    }
});

export const { login, logout, } = authSlice.actions;
export default authSlice.reducer;