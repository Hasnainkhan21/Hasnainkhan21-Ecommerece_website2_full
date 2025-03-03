import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    address: {
        street: '',
        city: '',
        state: '',
        zipCode: '',
        country: ''
    }
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const existingItem = state.products.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.products.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart(state, action) {
            state.products = state.products.filter(item => item.id !== action.payload);
        },
        increaseQuantity(state, action) {
            const item = state.products.find(item => item.id === action.payload);
            if (item) {
                item.quantity += 1;
            }
        },
        decreaseQuantity(state, action) {
            const item = state.products.find(item => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },
        updateAddress(state, action) {
            state.address = action.payload;
        }
    },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, updateAddress } = cartSlice.actions;
export default cartSlice.reducer;