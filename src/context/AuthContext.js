import React, { useContext, useState, useEffect } from 'react'
import { auth, googleProvider } from '../Config/firebase'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

function signInWithEmail(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
}

function loginWithEmail(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
}

function logout() {
    return auth.signOut()
}

function resetPassword (email) {
    return auth.sendPasswordResetEmail(email) 
}

function signInWithGoogle() {
    auth.signInWithPopup(googleProvider)
}

export function AuthProvider ({ children }) {

    const [ currentUser, setCurrentUser ] = useState()
    const [ loading, setLoading ] = useState(true)

    const value = {
        currentUser,
        signInWithEmail,
        signInWithGoogle,
        logout,
        loginWithEmail,
        resetPassword
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe

    }, [])

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
