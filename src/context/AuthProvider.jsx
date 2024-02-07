import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

// import { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        });
    };
    
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            return unSubscribe();
        };
    }, []);

    const userInfo = {
        user,
        loading,
        updateUserProfile,
        createUser,
        login,
        logOut,
    };

    return (
        <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;

//  export const AuthContext = createContext(null);

// const AuthProvider = ({children}) => {
//     const authInfo = {

//     }
//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;
