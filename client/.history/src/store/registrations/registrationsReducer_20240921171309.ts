import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState: any = {
    registration: null
};




const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        setRegistration: (state, action: PayloadAction<any>) => {
            state.registration = action.payload;
        }
    }
})


