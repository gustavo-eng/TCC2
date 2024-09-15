import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { removeCookie, setCookie } from "typescript-cookie";
import { api, removeSession, setSession } from "../../lib/axios";
import client from "../../service/client";
import { RootState } from "../store";
import { AuthRequest, AuthResponse, AuthState } from "./authTypes";

const initialState: AuthState  | any = {
  user: null,
  loading: false,
  error: null,
  userPermission: null,
  permissionError: null,
};

export const login = createAsyncThunk<AuthResponse, AuthRequest >("auth/auth", async (data) => {
  return client.auth.post(data);
});

/*
export const register = createAsyncThunk<RegisterRequest, RegisterResponse>("auht/register", async (data) => {
  return client.auth.register(data)
})
*/

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
    setUser: (state, action: PayloadAction<string | any>) => {
      state.user = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {

      const {token, user} = action.payload;
      /*
      const parsed = userSchema.safeParse(user);

      if(!parsed.success) {
            removeCookie('authorization');
            removeSession('user');
            state.error = parsed.error.message;
            return
      }
      */

       state.loading = false;
       state.user  = parsed.success ? action.payload.user : 'Nao foi salvo';
       state.error = null;
       setCookie('authorization', token);
       setSession('user', user);
       window.location.href = "/";
       setInterceptorRequest(token as string);

      });
    builder.addCase(login.rejected, (state) => {
        state.loading = false;
        state.error = 'failed';
        state.user = null;
    });
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
export default authSlice.reducer;  //exportando o reducer para ser usado no store
export const authSelector = (state: RootState) => state.auth;