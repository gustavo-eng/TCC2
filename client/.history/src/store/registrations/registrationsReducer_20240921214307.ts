import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';


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


export const {setRegistration} = registrationSlice.actions;
export const registrationSelector = (state: RootState) => state.registration;
export default registrationSlice.reducer;