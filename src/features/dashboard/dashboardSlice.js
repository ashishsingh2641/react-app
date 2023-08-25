import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  showSkeleton: false,
  data: [],
  counter: 0,
  data1: [],
};

const GET_PRODUCTS_URL = "http://localhost:5000/products";
const GET_GALLARY_URL = "http://localhost:5000/gallary";

export const fetchData = createAsyncThunk("dashboard/fetchData", async () => {
  try {
    const response = await axios.get(GET_PRODUCTS_URL);
    return [...response.data];
  } catch (e) {
    console.log(e.message);
  }
});

export const getData = createAsyncThunk("dashboard/getData", async () => {
  try {
    const response = await axios.get(GET_GALLARY_URL);
    return [...response.data];
  } catch (e) {
    console.log(e.message);
  }
});

// inslice reducers

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => (state.counter -= 1),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state, action) => {
        // action is inferred correctly here if using TS
        state.showSkeleton = false;
      })
      // You can chain calls, or have separate `builder.addCase()` lines each time
      .addCase(fetchData.fulfilled, (state, action) => {
        state.data = [...action.payload];
        state.showSkeleton = true;
      })
      // You can match a range of action types
      .addCase(getData.pending, (state, action) => {
        state.showSkeleton = false;
      })
      .addCase(getData.fulfilled, (state, action) => {
        console.log(action.payload, "data");
        state.data1 = [...action.payload];
        //state.showSkeleton = true;
      })
      .addCase(getData.rejected, (state, action) => {
        console.log("rejected");
      })
      .addMatcher(
        fetchData.rejected,
        // `action` will be inferred as a RejectedAction due to isRejectedAction being defined as a type guard
        (state, action) => {}
      );
  },
});

export const { increment, decrement } = dashboardSlice.actions;

export default dashboardSlice.reducer;
