import {createSlice} from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        userId: null,
        nickname: null
    },
    reducers: {
        updateUserProfile: (state, {payload}) => ({
            ...state,
            nickname: payload.nickname,
        })
    }
});

console.log('authSlice', authSlice)