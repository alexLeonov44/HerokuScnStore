import {  GET_PURCHASES_AMOUNT, GET_TOTAL_PRICE, SET_ACTIVE_CATEGORY, SET_ACTIVE_CURRENCY, SET_THUMBNAIL_CART_OPEN } from "../types/header";


export const setActiveCategory=(category)=>({
    type:SET_ACTIVE_CATEGORY,
    category
})
export const setActiveCurrency=(currency)=>({
    type:SET_ACTIVE_CURRENCY,
    currency
})
export const setThumbnailCartOpen=(isOpen)=>({
    type:SET_THUMBNAIL_CART_OPEN,
    isOpen
})
export const getPurchasesAmount=(purchases)=>({
    type:GET_PURCHASES_AMOUNT,
    purchases
})
export const getTotalPrice=(purchases)=>({
    type:GET_TOTAL_PRICE,
    purchases
})
