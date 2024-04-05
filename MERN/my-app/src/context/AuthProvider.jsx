import React,{createContext,useEffect,useState} from 'react'
import app from '../firebase/firebase.config'
import {getAuth,GoogleAuthProvider,createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword,signInWithPopup,signOut} from 'firebase/auth'

export const AuthContext=createContext()
const auth=getAuth(app)
const googleprovider=new GoogleAuthProvider()


export default function AuthProvider({children}) {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signUpWithGmail=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleprovider)
    }

    const login=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logout=()=>{
        localStorage.removeItem('user-data')
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            return unsubscribe()
        }
    },[])
    const authInfo={
        user,
        loading,
        createUser,
        signUpWithGmail,
        login,
        logout
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}

    </AuthContext.Provider>
  )
}
