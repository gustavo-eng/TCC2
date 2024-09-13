import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { removeCookie, setCookie } from "typescript-cookie";
import { api, removeSession, setSession } from "../../lib/axios";
import client from "../../service/client";
import { RootState } from "../store";
import { AuthRequest, AuthResponse, AuthState, RegisterRequest, RegisterResponse, userSchema } from "./authTypes";

const initialState: AuthState  = {
  user: null,
  loading: false,
  error: null,
  userPermission: null,
  permissionError: null,
};

export const login = createAsyncThunk<AuthResponse, AuthRequest >("auth/auth", async (data) => {
  return client.auth.post(data);
});

export const register = createAsyncThunk<RegisterRequest, RegisterResponse>("auht/register", async (data: RegisterRequest) => {
  return client.auth.register(data)
})

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
       console.log('tooookenn1111s ', token)
       console.log('user ', user)

       const parsed = userSchema.safeParse(user);
       state.loading = false;
       state.user  = parsed.success ? user : null;
       state.error = null;
       console.log('parsed', parsed)
       if(!parsed.success) {
            removeCookie('authorization');
            removeSession('user');
            state.error = parsed.error.message;
            return
       }
       console.log('tooookenn ', token)
       setCookie('authorization', token);
       setSession('user', user) //todo colocar essa funcao no storageHelpers
       window.location.href = "/";
       setInterceptorRequest(token as string);
    });
    builder.addCase(login.rejected, (state) => {
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
export default authSlice.reducer;  //exportando o reducer para ser usado no store