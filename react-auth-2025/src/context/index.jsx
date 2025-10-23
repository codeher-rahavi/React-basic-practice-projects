import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from "../firebaseConfig";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext(null);


export default function AuthState({ children }) {

    const [registerFormData, setRegisterFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [loginFormData,setLoginFormData] = useState({
        email : '',
        password : ''
    })


    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    

    const navigate = useNavigate();

    function registerWithFirebase(event) {
        //method used by firebase for register
        setLoading(true);
        const { email, password } = registerFormData;
        return createUserWithEmailAndPassword(auth,email,password);
        
    };

    function loginWithFirebase(){
        //method used by firebase for signin
        const {email,password} = loginFormData;

        return signInWithEmailAndPassword(auth,email,password);
    }

    function handleLogOut(){
        return signOut(auth);

    }

    useEffect(() =>{
        const checkAuthState = onAuthStateChanged
        (auth,
        (currentUser =>{
            setUser(currentUser);
            setLoading(false);
        }))

        return ()=>{ 
             checkAuthState();
            }

    },[]);

   // console.log(user);
    useEffect(() =>{
        if(user) navigate('/profile-page');
    },[user])

    if(loading) return <h1>Loading ! Please Wait</h1>

    return <AuthContext.Provider value={{
        registerFormData,
        setRegisterFormData,
        registerWithFirebase,
        loading,
        user,
        loginFormData,
        setLoginFormData,
        loginWithFirebase,
        handleLogOut,
        setUser,
        setLoading
    }}>
        {children}
    </AuthContext.Provider>
}


