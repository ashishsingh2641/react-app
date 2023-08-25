import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logout } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    console.log(getState().auth, "getState");
    const token = getState().auth.token;
    console.log(token, "token");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithRefreshToken = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  debugger;

  if (result?.error?.originalStatus === 403) {
    console.log("sending access token");
    const refreshToken = await baseQuery("/refreshToken", api, extraOptions);
    console.log(refreshToken);
    if (refreshToken?.data) {
      const user = api.getState().auth.user;
      console.log(user);
      api.dispatch(setCredentials({ ...refreshToken.data, user }));
      result = await baseQuery(args, api, extraOptions);
    }
  }
  console.log(result, "result");
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithRefreshToken,
  endpoints: (builders) => ({}),
});
