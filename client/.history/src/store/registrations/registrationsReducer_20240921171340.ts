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


export const {setRegistration} = registrationSlice.actions;
export default registrationSlice.reducer;  // export reducer for store configuration
export default registrationSlice; // export slice for testing purposes