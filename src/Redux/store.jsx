// src/Redux/store.jsx
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import authReducer from "./authSlice";

const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer,
        auth: authReducer,
    },
});

export default store; // Export as default