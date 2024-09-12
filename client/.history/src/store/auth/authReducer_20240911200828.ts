import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { removeCookie } from "typescript-cookie";
import { api } from "../../lib/axios";
import client from "../../service/client";

const initialState = {
  user: null,
  loading: false,
  error: null,
  userPermission: null,
  permissionError: null,
};

export const login = createAsyncThunk<any>("auth/auth", async (data) => {
  return client.auth.post(data);
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      state.user = null;
      state.error = null;
      state.loading = false;
      removeCookie("authorization");
      //removeSession('user')
      setInterceptorRequest(null);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
        //const {token} = action.payload.user;
    })
  },
});

/*response auth client
{
	"status": true,
	"isLogged": true,
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibHV0YWRvcjMiLCJ1c2VyUGVybWlzc2lvbiI6ImF0aGxldCIsInVzZXJJZCI6NywiaWF0IjoxNzI2MDkzNzY5LCJleHAiOjE3MjYxODAxNjl9.TI-a0uE2Zjjm3FC8i4lM4W7VLHoXJFZfHyKIgw2Bw1U",
	"msg": "User successfully authenticated"
}
*/

const setInterceptorRequest = (token: string | null) => {
  api.interceptors.request.clear();
  api.interceptors.request.use((req) => {
    if (!token) {
      delete req.headers.Authorization;
    } else {
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  });
};
