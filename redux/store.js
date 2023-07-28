import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {authSlice} from './auth/authSlice';

const authReducer = combineReducers({
    [authSlice.name]: authSlice.reducer,
})

export const store = configureStore({
  reducer: authReducer,
});