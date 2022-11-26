import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./reducers/sidebarSlice";
import basketSlice from "./reducers/basketSlice";

export default configureStore({
    reducer: {
        sidebar: sidebarReducer,
        basket: basketSlice,
    }
});