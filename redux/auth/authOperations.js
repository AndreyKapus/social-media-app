import {FIREBASE_AUTH} from '../../FirebaseConfig'

export const authSignUpUser = () => async (dispatch, getState) => {
    try{
        const user = await FIREBASE_AUTH.createUserWithEmailAndPassword()
    } catch {
        console.log('error', error)
    }
};

export const authSignInUser = () => async (dispatch, getState) => {};

export const authSignOutUser = () => async (dispatch, getState) => {};