import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
   name: "basket",
   initialState: {
       productsInBasket: [],
   },
   reducers: {
        addNewProduct: (state, action) => {
            state.productsInBasket = [...state.productsInBasket, action.payload];
        },
        addExistingProduct: (state, action) => {
            state.productsInBasket = state.productsInBasket.map((product) => product.name === action.payload.name && product.size === action.payload.size ? { ...product, count: product.count+1 } : product);
        },
        deleteProduct: (state, action) => {
            state.productsInBasket = state.productsInBasket.filter(product => product.index !== action.payload.index);
        }
   }
});

export const { addNewProduct, addExistingProduct,deleteProduct } = basketSlice.actions;

export default basketSlice.reducer;