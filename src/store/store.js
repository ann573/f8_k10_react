import productReducer from '../features/products/productSlice'

import { configureStore } from '@reduxjs/toolkit';

 const store = configureStore({
    reducer: {
        products: productReducer
    }
})

export default store