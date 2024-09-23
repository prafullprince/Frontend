import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    totalItems: localStorage.getItem("totalItems") ? JSON.parse(localStorage.getItem("totalItems")) : 0,
}

// create slice
const cartSlice = createSlice({
    name:'cart',
    initialState:initialState,
    reducers:{
        setTotalItems(state,action){
            state.totalItems = action.payload
        }
        // TODO: 
        // addToCart
        // removeFromCart
        // resetCart
    }
})

export const { setTotalItems } = cartSlice.actions;
export default cartSlice.reducer;
