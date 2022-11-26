import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
   name: "sidebar",
   initialState: {
       display: false,
   },
   reducers: {
       open: state => {
           state.display = true;
       },
       close: state => {
           state.display = false;
       }
   }
});

export const { open, close } = sidebarSlice.actions;

export default sidebarSlice.reducer;