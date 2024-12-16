import { createSlice } from "@reduxjs/toolkit";
import { createProduct, fetchProducts, updateNewProduct, removeOneProduct, fetchProductById } from "./productAction";

const initialState = { products: [], product: {}, loading: false, error: null };

const setLoading = (state) => {
  state.loading = true;
  state.error = null;
};

const setError = (state, action) => {
  state.loading = false;
  state.error = action.error.message;
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, setLoading)
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, setError)

      .addCase(createProduct.pending, setLoading)
      .addCase(createProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products.push(action.payload);
      })
      .addCase(createProduct.rejected, setError)

      .addCase(updateNewProduct.pending, setLoading)
      .addCase(updateNewProduct.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.products.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      })
      .addCase(updateNewProduct.rejected, setError)

      .addCase(removeOneProduct.pending, setLoading)
      .addCase(removeOneProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = state.products.filter((item) => item.id !== action.payload);
      })
      .addCase(removeOneProduct.rejected, setError)

      .addCase(fetchProductById.pending, setLoading)
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchProductById.rejected, setError);
  },
});

export default productSlice.reducer;
