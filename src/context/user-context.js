// import { createContext, useEffect, useReducer } from "react";
// import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase-utils";
// import USER_ACTION_TYPES from '../store/user.action';




// export const UserContext = createContext({
//     currentUser: null,
//     setCurrentUser: () => null
// });



// export const UserProvider = ({children}) => {
    // const [state, dispatch] = useReducer(userReducer, INITIAL_STATE );
    // const { currentUser} = state;

    // const setCurrentUser = (user) => {
    //     dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user ));
    // }

    // const value = {currentUser, setCurrentUser};

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChangedListener((user) => {
    //         if(user) {
    //             createUserDocumentFromAuth(user);
    //         }
    //         setCurrentUser(user);
    //     });
    //     return unsubscribe;
    // }, [])

//     return <UserContext.Provider >{children}</UserContext.Provider>
// }