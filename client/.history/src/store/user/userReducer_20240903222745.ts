
import { createSlice } from "@reduxjs/toolkit"

const initialState:any = {
    user: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setRole: state => {
            state.user = state
        }
    }
})


