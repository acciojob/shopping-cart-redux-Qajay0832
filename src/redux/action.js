import { createSlice } from "@reduxjs/toolkit";



export const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        products: [],
        productsList: [],
        wishlist: [],
        cart: [],
        amount: 0,
        activeCoupon:'none'
    },
    reducers: {
        updateCart: (state, action) => {
            state.cart = [...state.cart, action.payload];
        },
        renderShop: (state, action) => {
            state.productsList = action.payload
        },
        removeFromProducts: (state, action) => {
            state.products = state.products.filter(e => e != action.payload)
        },
        renderProducts: (state, action) => {
            state.products = action.payload
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(e => e != action.payload)
        },
        addToWishlist: (state, action) => {
            state.wishlist = [...state.wishlist, action.payload];
        },
        removeFromWishlist: (state, action) => {
            state.wishlist = state.wishlist.filter(e => e != action.payload)
        },
        addToProducts: (state, action) => {
            state.products = [...state.products, action.payload];
        },
        addAmount: (state, action) => {
            state.amount += action.payload
        },
        decreaseAmount: (state, action) => {
            state.amount -= action.payload
        },
        fiftyOff:(state,action)=>{
            action.payload?state.amount=state.amount*0.5:state.amount=state.amount/0.5
        },
        twentyFiveOff:(state,action)=>{
            action.payload?state.amount=state.amount-state.amount*0.25:state.amount=state.amount/ 0.75
        },
        setCoupon:(state,action)=>{
            state.activeCoupon=action.payload;
        }

    }
})

export const { updateCart, renderShop, renderProducts, removeFromProducts, removeFromCart, addToWishlist, removeFromWishlist, addToProducts, addAmount, decreaseAmount, fiftyOff,twentyFiveOff,setCoupon } = shopSlice.actions

export default shopSlice.reducer