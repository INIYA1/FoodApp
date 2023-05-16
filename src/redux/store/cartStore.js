// import {configureStore} from '@reduxjs/toolkit';
// import mycartSliceReducer2 from '../reducer/mycartSlice2';


// const MyStore2 =configureStore({
//     reducer:{
//     myCart2 : mycartSliceReducer2
//     }
// })
// export default MyStore2


import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "../reducer/cartSlice";


const store =configureStore({
    reducer:{
        cart :cartSliceReducer,
    },
});

export default store