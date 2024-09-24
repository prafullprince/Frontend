import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    // initial i set user null directly due to which when i want my user data from store it get lost after refreshing page when i change it worked 
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    image: localStorage.getItem("image") ? JSON.parse(localStorage.getItem("image")) : null
}

const profileSlice = createSlice({
    name:'profile',
    initialState:initialState,
    reducers:{
        setUser(state,action){
            state.user = action.payload
        },
        setImage(state,action){
            state.image = action.payload
        }
    }
})

export const { setUser,setImage } = profileSlice.actions;
export default profileSlice.reducer;
