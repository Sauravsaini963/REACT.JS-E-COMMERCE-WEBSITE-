import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// home cardData
export const createData = createAsyncThunk("home/createData", async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log("response", response);
    return response.data;
  } catch (error) {}
});
// add to cartData
export const addCardData = createAsyncThunk(
  "home/addCardData",
  async (data) => {
    return data;
  }
);
// remove cartItem
export const removeCardData = createAsyncThunk(
  "home/removeCardData",
  async (data) => {
    console.log("idffffffffffffffff", data);
    return data;
  }
);
// payment data

export const paymentData = createAsyncThunk("home/paymentData", async (data) => {
return data;
})

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    cardArray: [],
    data: [],
    buy: {},
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      // home cardData
      .addCase(createData.pending, (state) => {
        state.loading = true;
      })
      .addCase(createData.fulfilled, (state, action) => {
        console.log("actionnnnnnnnn", action);
        state.data = action.payload;
      })
      .addCase(createData.rejected, (state, action) => {
        state.loading = false;
      })
      // add To CartData
      .addCase(addCardData.pending, (state) => {
        state.loading = true;
      })
      .addCase(addCardData.fulfilled, (state, action) => {
        const findItem = state.cardArray.find(
          (item) => item.id === action.payload.id
        );
        if (findItem) {
          return 
        } else {
          state.cardArray = [...state.cardArray, action.payload];
          toast.success('👍Item added to cart!');
        }
      })
      .addCase(addCardData.rejected, (state, action) => {
        state.loading = false;
        toast.error('Failed added to cart!');
      })
      // removeCartItem
      .addCase(removeCardData.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeCardData.fulfilled, (state, action) => {
        console.log("action.payload     ", action);
        state.cardArray = state.cardArray.filter(
          (item) => item.id !== action.payload.id
        );
        state.loading = false;
      })
      .addCase(removeCardData.rejected, (state, action) => {
        state.loading = false;
      })
      // payment Data
      .addCase(paymentData.pending, (state)=>{
        state.loading = true;
      })
      .addCase(paymentData.fulfilled, (state,action)=>{
        console.log("payment action",action);
        state.loading = false;
        state.buy = action.payload;
      })
      .addCase(paymentData.rejected, (state)=>{
        state.loading = false;
      })
  },
});
export default homeSlice.reducer;
