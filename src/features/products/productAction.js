import { createAsyncThunk } from "@reduxjs/toolkit";
import { createProducts, getAllProducts, updateProducts, removeProduct, getProductByID } from './../../services/productsServices';

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    return await getAllProducts();
})
export const createProduct = createAsyncThunk("products/createProduct", async (product) => {
    return await createProducts(product);
})
export const updateNewProduct = createAsyncThunk("products/updateNewProduct", async ({data, id}) => {
    return await updateProducts(data, id);
})
export const removeOneProduct = createAsyncThunk("products/removeOneProduct", async (id) => {
    await removeProduct(id);
    return id;
})
export const fetchProductById = createAsyncThunk("products/fetchProductById", async (id) => {
    return await getProductByID(id);
}) 