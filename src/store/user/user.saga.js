import { call, all, takeLatest, put } from "redux-saga/effects";
import { createUserDocumentFromAuth, createAuthUserWithEmailAndPassword, getCurrentUser, signInWithGooglePopup, signInAuthUserWithEmailAndPassword,signOutUser, auth } from "../../utils/firebase/firebase-utils";
import { USER_ACTION_TYPES } from "./user.types";
import { signInSucess, signInFailed, signUpAndSignInSuccess, signUpAndSignInFailed, userLogOutSuccess, userLogOutFailed } from "./user.action";


export function* createSnapshotFromUserAuth(userAuth, additionalDetails){
    try{
        const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails);
        yield put(signInSucess({...userSnapshot.data(), id: userSnapshot.id}));
    }catch(error){
        yield put(signInFailed);
        console.log('problem creating user', error.message);
    }
}

export function* isUserAuthenticated(){
    try{
        const userAuth = yield call(getCurrentUser);
        if(!userAuth){
            return;
        }
        yield call(createSnapshotFromUserAuth, userAuth);
    }catch(error){
        yield put(signInFailed(error))
    }
}

export function* emailSignInUserAsync({payload: {email, password}}){

    try{
        const {user} = yield call(signInAuthUserWithEmailAndPassword, auth, email, password);
        // const credential = GoogleAuthProvider.credentialFromResult(response);
        // console.log(credential);
        console.log('this is for user info: ',user);
        yield call(createSnapshotFromUserAuth, user);
    }catch(error){
        yield put(signInFailed(error))
    }
}


export function* googleSignInUserAsync(){
    try{
        const {user} = yield call(signInWithGooglePopup);
        // const credential = GoogleAuthProvider.credentialFromResult(response);
        // console.log(credential);
        yield call(createSnapshotFromUserAuth, user);
        yield put(signInSucess(user));
    }catch(error){
        yield put(signInFailed(error));
    }
}

export function* logOutUser(){
    try{
        yield call(signOutUser);
        yield put(userLogOutSuccess());
        

    }catch(error){
        yield put(userLogOutFailed(error))
    }
}

export function* signInAfterSignUp({payload: {user, additionalDetails}}){
        const userInfo = yield call(createSnapshotFromUserAuth, user, additionalDetails)
        console.log(userInfo);
        console.log(additionalDetails);
}

export function* createUserWithEmailPassword(action){
        const {email, password, displayName} = action.payload;
        try {
            const {user} = yield call(createAuthUserWithEmailAndPassword, email, password);
            yield put(signUpAndSignInSuccess(user, {displayName}));

        } catch (error) {
           yield put(signUpAndSignInFailed(error));
        }
}

export function* onEmailSignIn(){
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, emailSignInUserAsync)
}
export function* onGoogleSignIn(){
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, googleSignInUserAsync)
}


export function* onCheckUserSession(){
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated )
}

export function* onUserLogOutStart(){
    yield takeLatest(USER_ACTION_TYPES.SET_LOG_OUT_START, logOutUser )
}

export function* onSignUpFormSubmit(){
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, createUserWithEmailPassword)
}

export function* onSignUpSuccess(){
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp)
}


export function* userSaga(){
    yield all([call(onCheckUserSession), call(onGoogleSignIn), call(onEmailSignIn), call(onUserLogOutStart), call(onSignUpFormSubmit), call(onSignUpSuccess)]);
}