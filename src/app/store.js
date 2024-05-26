import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "../features/homeSlice";
import authSlice from "../features/authSlice/authSlice";

const store = configureStore({
    reducer: {
        homeSlice,
        authSlice
        
    }
})
export default store
