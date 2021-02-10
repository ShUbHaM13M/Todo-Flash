import React, { useContext, useState, useEffect } from 'react'
import { auth, googleProvider } from '../Config/firebase'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function signInWithEmail(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
}

export function signInWithGoogle() {
    auth.signInWithPopup(googleProvider).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
}

export function AuthProvider ({ children }) {

    const [ currentUser, setCurrentUser ] = useState()

    const value = {
        currentUser,
        signInWithEmail,
        signInWithGoogle
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })

        return unsubscribe

    }, [])

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
