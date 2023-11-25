import { createSlice } from '@reduxjs/toolkit'
import { CartState } from './redux-model/CartProps'

const initialState: CartState = {
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart() {},
        removeFromCart() {},
    },
})
