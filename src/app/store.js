import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "../features/dashboard/dashboardSlice";
import loginReducer from "../features/login/loginSlice";
import axios from "axios";

axios.interceptors.request.use((request) => {
  return request;
});

axios.interceptors.response.use((response) => {
  //console.log(response);
  return response;
});

const store = configureStore({
  reducer: {
    dashboardData: dashboardReducer,
    loginData: loginReducer,
  },
  devTools: true,
});

export default store;
