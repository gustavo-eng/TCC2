import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { removeCookie, setCookie } from "typescript-cookie";
import { removeSession, setSession } from "../../lib/axios";
import client from "../../service/client";
import { RootState } from "../store";
import { AuthRequest, AuthResponse } from "./authTypes";

const initialState: any = {
  user: null,
  loading: false,
  error: null,
  userPermission: null,
  permissionError: null,
};

export const login = createAsyncThunk<AuthResponse, AuthRequest>(
  "user/user",
  async (data) => {
    return client.auth.post(data);
  }
);

/*
export const register = createAsyncThunk<RegisterRequest, RegisterResponse>("auht/register", async (data) => {
  return client.auth.register(data)
})
*/




const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut: (state) => {
      state.user = null;
      state.error = null;
      state.loading = false;
      removeCookie("authorization");
      removeSession("user");
      //window.location.href = '/';
      //setInterceptorRequest(null);
    },
    setUser: (state, action: PayloadAction<string | any>) => {
      if(state.user) {
        state.user = action.payload;
        setSession('user', state.user);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      const { token, user } = action.payload;
      //const parsed = userSchema.safeParse(user);
      state.loading = false;
      //state.user = parsed.success ? user : null;
      state.user = user ;
      state.error = null;
      /*
      if (!parsed.success) {
        removeCookie("authorization");
        removeSession("user");
        state.error = parsed.error.message;
        return;
      }
        */
      setCookie("authorization", token);
      setSession("user", user);
    });
    builder.addCase(login.rejected, (state) => {
      state.loading = false;
      state.error = "failed";
      state.user = null;
    });
  },
});

export const authClient = {
  login,
};

export const { logOut, setUser } = authSlice.actions;
export const authSelector = (state: RootState) => state.user;
export default authSlice.reducer;
