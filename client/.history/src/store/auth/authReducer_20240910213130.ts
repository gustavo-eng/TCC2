import { AuthState } from "./authTypes";


const initialState: AuthState = {
    user: null,
    loading: false,
    error: null,
    userPermission: null,
    permissionError: null
}

/*

const authSlice = createSlice({
    name: 'auth',

})

*/