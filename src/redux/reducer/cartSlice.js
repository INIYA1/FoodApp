import { createSlice} from '@reduxjs/toolkit';


const cartSilce = createSlice({
    name:'cart',
    initialState:{
        cartList:[]
    },

    reducers:{
        AddtoCart:(state,{payload})=>{
            // switch  ({type}){
                // case {type}:
                  var newRec = [...state.cartList];
                  const ind = newRec.findIndex(
                    (data) => data.id === payload.id
                  );
                  if (ind < 0) {
                    newRec.push(payload);
                  } else {
                    newRec.splice(ind, 1);
                  }
                  return { ...state, cartList: newRec };
                // default:
                //   return state;
            //   }
            }
        }
      
    });
    export const {AddtoCart} =cartSilce.actions;
    export default cartSilce.reducer;