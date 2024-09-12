import { configureStore } from '@reduxjs/toolkit';
import auth from '../../src/store/auth/authReducer';
import user from '../../src/store/user/userReducer';

const store = configureStore({
    reducer: {
        user,
        auth,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;



