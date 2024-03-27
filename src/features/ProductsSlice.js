import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "products",
    initialState: [],
    reducers: {
        addProduct(state, action) {
            state.push(action.payload);
        },
        removeProduct(state, action) {
            const index = state.findIndex(
                (product) => product.id === action.payload
            );
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
        updateProduct(state, action) {
            const { productId, updatedProduct } = action.payload;
            const index = state.findIndex(
                (product) => product.id === productId
            );
            if (index !== -1) {
                state[index] = { ...state[index], ...updatedProduct };
            }
        },
    },
});

export default productsSlice.reducer;
export const { 
  addProduct, 
  removeProduct, 
  updateProduct 
} = productsSlice.actions;
