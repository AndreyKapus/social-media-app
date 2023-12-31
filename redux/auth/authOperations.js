import {FIREBASE_AUTH} from '../../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { authSlice } from './authSlice';

const auth = FIREBASE_AUTH;

export const authSignUpUser = ({email, password, name}) => async (dispatch, getState) => {
    console.log(email, password, name)
    try{
        const {user} = await createUserWithEmailAndPassword(auth, email, password)
        dispatch(authSlice.actions.updateUserProfile({userId: user.uid}));
        console.log('user', user)
    } catch (error) {
        console.log('error', error)
    }
};

export const authSignInUser = ({email, password}) => async (dispatch, getState) => {
    console.log(email, password)
    try{
        const user = await signInWithEmailAndPassword(auth, email, password)
        console.log('user', user)
    } catch (error) {
        console.log('error', error)
    }
};

export const authSignOutUser = () => async (dispatch, getState) => {};