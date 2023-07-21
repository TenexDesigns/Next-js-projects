import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from './cake'



const store = configureStore({

    reducer:{
    cake: cakeReducer
    }
})



export default store;