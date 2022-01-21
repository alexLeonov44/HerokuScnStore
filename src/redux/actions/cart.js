import { ADD_PRODUCT_TO_CART, CART_PRODUCT_ON_MINUS, CART_PRODUCT_ON_PLUS, REMOVE_PRODUCT_IN_CART, SET_ITEM_FROM_LOCAL_STORAGE } from "../types/cart";

export const addProductToCart=(product)=>({
    type:ADD_PRODUCT_TO_CART,
    product,
})
export const cartProductOnPlus=(product)=>({
    type:CART_PRODUCT_ON_PLUS,
    product,
})
export const cartProductOnMinus=(product)=>({
    type:CART_PRODUCT_ON_MINUS,
    product,
})
export const removeProductInCart=(product)=>({
    type:REMOVE_PRODUCT_IN_CART,
    product,
})
export const setItemFromLocalStorage=(purchases)=>({
    type:SET_ITEM_FROM_LOCAL_STORAGE,
    purchases,
})