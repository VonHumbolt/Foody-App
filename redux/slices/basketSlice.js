import { createSlice } from "@reduxjs/toolkit";

const initialState={
    items: []
}

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            state = [...state.items, action.payload]
        },
        removeFromBasket: (state, action) => {
            state = {...state, ...action.payload}
        }
    }
})

export const {addToBasket, removeFromBasket} = basketSlice.actions;

export const basketItems = (state) => state.items;

export default basketSlice.reducer;