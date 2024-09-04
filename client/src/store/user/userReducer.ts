
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState:any = {
    role: ""
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setRole: (state, action: PayloadAction<string | any>) => {
            state.role = action.payload;
        }
    }
})


export const {setRole } = userSlice.actions;
export default userSlice.reducer;
export const userSelector = (state: RootState) => state.user.role
/*
How use
import React from 'react';
import { useSelector } from 'react-redux';
import { setUserRole } from '../../src/store/user/userReducer';
import { RootState } from '../../src/store';

const DisplayRole: React.FC = () => {
    // Usando o useSelector para acessar o estado role
    const role = useSelector((state: RootState) => setUserRole(state));

    return (
        <div>
            <h1>User Role: {role ? role : "No role set"}</h1>
        </div>
    );
};

export default DisplayRole;

*/