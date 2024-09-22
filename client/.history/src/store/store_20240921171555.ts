import { configureStore } from '@reduxjs/toolkit';
import user from '../store/auth/authReducer';
import registration from '../store/registrations/registrationsReducer';

const store = configureStore({
    reducer: {
        user,
        registration
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;


