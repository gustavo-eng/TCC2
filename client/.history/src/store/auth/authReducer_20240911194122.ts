import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { removeCookie } from "typescript-cookie"
import { api } from "../../lib/axios"
import client from "../../service/client"


const initialState: any = {
    user: null,
    loading: false,
    error: null,
    userPermission: null,
    permissionError: null
}



export const login = createAsyncThunk<any>(
    'auth/auth',
    async (data) => {
        return client.auth.post(data)
    }
)


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut: (state) => {
            state.user = null;
            state.error = null;
            state.loading = false;
            removeCookie('authorization');
            //removeSession('user')
            setInterceptorRequest(null);

        }
    }
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
