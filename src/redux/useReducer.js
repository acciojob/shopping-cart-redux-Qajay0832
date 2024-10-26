import { useDispatch, useSelector } from "react-redux";
import { renderShop, updateCart, renderProducts, removeFromProducts, addToWishlist, removeFromCart, removeFromWishlist, addToProducts, addAmount, decreaseAmount,fiftyOff,twentyFiveOff, setCoupon } from "./action.js";



export const useShop = () => {
    const shop = useSelector(state => state.shop);
    console.log('products');
    const dispatch = useDispatch();
    const setCart = (id) => {
        dispatch(updateCart(id))
    }
    const fillShop = (array) => {
        dispatch(renderShop(array))
    }
    const fillProducts = (array) => {
        dispatch(renderProducts(array))
    }
    const removeProducts = (id) => {
        dispatch(removeFromProducts(id))
    }
    const addWishlist = (id) => {
        dispatch(addToWishlist(id))
    }
    const removeCart = (id) => {
        dispatch(removeFromCart(id))
    }
    const removeWishlist = (id) => {
        dispatch(removeFromWishlist(id))
    }
    const addProducts = (id) => {
        dispatch(addToProducts(id))
    }
    const addAmt=(rupee)=>{
        dispatch(addAmount(rupee))
    }
    const decreaseAmt=(rupee)=>{
        dispatch(decreaseAmount(rupee))
    }
    const diwaliCoupon=(rupee)=>{
        dispatch(fiftyOff(rupee))
    }
    const dhanterasCoupon=(rupee)=>{
        dispatch(twentyFiveOff(rupee))
    }
    const updateCoupon=(coupon)=>{
        dispatch(setCoupon(coupon))
    }
    return {
        shop,
        setCart,
        fillShop,
        fillProducts,
        removeProducts,
        addWishlist,
        removeCart,
        removeWishlist,
        addProducts,
        addAmt,
        decreaseAmt,
        diwaliCoupon,
        dhanterasCoupon,
        updateCoupon


    }
}
