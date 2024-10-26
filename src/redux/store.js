import { configureStore } from "@reduxjs/toolkit";
import shopReducer from './action.js'


export default configureStore({
    reducer:{
        shop:shopReducer
    }
})