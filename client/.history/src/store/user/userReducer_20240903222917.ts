
import { createSlice } from "@reduxjs/toolkit";

const initialState:any = {
    role: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setRole: state => {
            state.role = state
        }
    }
})


export const {setRole } = userSlice.actions;
export default setUserRole = (state: any) => state.user.role
