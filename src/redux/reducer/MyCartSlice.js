import { createSlice } from "@reduxjs/toolkit";

const MyCartSlice = createSlice ({
    name : 'cartA',
    initialState:{
        cartList:[]
    },

    reducers :{
        addProductToMyCart(state,actions){
            state.push(actions.payload);
        }
    }
})
export const {addProductToMyCart} =MyCartSlice.actions;
export default MyCartSlice.reducer;