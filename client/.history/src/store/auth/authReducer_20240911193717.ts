import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { removeCookie } from "typescript-cookie"
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

        }
    }
});