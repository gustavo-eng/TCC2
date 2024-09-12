import { createAsyncThunk } from "@reduxjs/toolkit"
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


/*

const authSlice = createSlice({
    name: 'auth',

})

*/