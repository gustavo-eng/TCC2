
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

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
export default userSlice.reducer;
export const setUserRole = (state: RootState) => state.user.role
