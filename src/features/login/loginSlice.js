import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../../api/api";

const initialState = {
  loading: false,
  token: "",
  refreshToken: "",
  error: "",
  loginSuccess: "",
  userDetails: "",
  isAuth: false,
};

const TRIGGER_LOGIN = "http://localhost:5000/api/v1/login";

export const triggerLogin = createAsyncThunk(
  "user/triggerLogin",
  async (data) => {
    try {
      const response = await axios.post(TRIGGER_LOGIN, { ...data });
      await localStorage.setItem("token", response.data.token);
      await localStorage.setItem("refreshToken", response.data.refreshToken);
      await localStorage.setItem("isAuth", true);

      return { ...response.data };
    } catch (e) {
      return e.message;
    }
  }
);

export const getUserDetails = createAsyncThunk(
  "user/getUserDetails",
  async () => {
    try {
      const response = await api.get("/userDetails");
      return { ...response.data };
    } catch (e) {
      return e.message;
    }
  }
);
export const getLocalStorageData = createAsyncThunk(
  "user/getStorageData",
  async () => {
    try {
      const token = await localStorage.getItem("token");
      const refreshToken = await localStorage.getItem("refreshToken");
      const isAuth = await localStorage.getItem("isAuth");
      return { token, refreshToken, isAuth };
    } catch (e) {
      console.log(e.message);
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.token = "";
      state.refreshToken = "";
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
    },
  },
  extraReducers: {
    [triggerLogin.pending]: (state, action) => {
      state.loading = true;
    },
    [triggerLogin.fulfilled]: (state, action) => {
      state.loginSuccess = "Loggedin successfull";
      state.isAuth = true;
    },
    [triggerLogin.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [getLocalStorageData.pending]: (state, action) => {
      console.log("is Loading data");
    },
    [getLocalStorageData.fullfilled]: (state, action) => {
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      state.isAuth = action.payload.isAuth;
    },
    [getLocalStorageData.rejected]: (state, action) => {},
    [getUserDetails.pending]: (state, action) => {
      console.log("pending");
    },
    [getUserDetails.fulfilled]: (state, action) => {
      state.userDetails = action.payload;
    },
    [getUserDetails.rejected]: (state, action) => {},
  },
});

export const { logout } = loginSlice.actions;

export default loginSlice.reducer;
