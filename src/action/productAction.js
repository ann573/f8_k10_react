export const SET_PRODUCTS = "SET_PRODUCTS" 
export const UPDATE_PRODUCT = "UPDATE_PRODUCT" 
export const REMOVE_PRODUCT = "REMOVE_PRODUCT" 
export const ADD_PRODUCT = "ADD_PRODUCT" 

export const addProduct = (data) => ({type: ADD_PRODUCT, payload: data})
export const updateProduct = (data) => ({type: UPDATE_PRODUCT, payload: data})
export const removeProduct = (id) => ({type: REMOVE_PRODUCT, payload: id})
export const setProduct = (data) => ({type: SET_PRODUCTS, payload: data})