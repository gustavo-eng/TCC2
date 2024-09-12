import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { removeCookie, setCookie } from "typescript-cookie";
import { api, removeSession, setSession } from "../../lib/axios";
import client from "../../service/client";
import { RootState } from "../store";
import { AuthResponse, AuthState, userSchema } from "./authTypes";

const initialState: AuthState | any = {
  user: null,
  loading: false,
  error: null,
  userPermission: null,
  permissionError: null,
};

export const login = createAsyncThunk<AuthResponse>("auth/auth", async (data) => {
  return client.auth.post(data);
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: (state) => {
      state.user = null;
      state.error = null;
      state.loading = false;
      removeCookie("authorization");
      removeSession('user')
      setInterceptorRequest(null);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
       const {token, user} = action.payload;

       const parsed = userSchema.safeParse(user);
       state.loading = false;
       state.user  = parsed.success ? user : null;
       state.error = null;
       if(!parsed.success) {
            removeCookie('authorization');
            removeSession('user');
            state.error = parsed.error.message;
            return
       }

       setCookie('authorization', token);
       setSession('user', user) //todo colocar essa funcao no storageHelpers
       setInterceptorRequest(token as string);
    });
    builder.addCase(login.fulfilled, (state) => {
        state.loading = false;
        state.error = 'failed';
        state.user = null;

    })
  },
});

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


export const { logOut } = authSlice.actions;
export const authSelector = (state: RootState) => state.auth;
export default authSlice.reducer;