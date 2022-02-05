import { SET_AUTH_DATA } from "../types/auth";

export const setAuth=(authData)=>({
    type:SET_AUTH_DATA,
    authData
})
