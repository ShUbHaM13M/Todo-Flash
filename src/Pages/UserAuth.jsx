import React, { useState, useEffect } from 'react'
import LoginTab from '../Components/auth/loginTab'
import SignupTab from '../Components/auth/signupTab'
import '../css/auth-form.css'
import { useAuth } from '../context/AuthContext'
import { useHistory } from 'react-router-dom'

function UserAuth() {

    const [currentTab, setCurrentTab] = useState('login')

    const history = useHistory()
    const { currentUser } = useAuth()

    useEffect(() => {
        if (currentUser) {
            history.push('/projects')
        }
    }, [currentUser, history])

    return (
        <div className="auth-form">
            <div className="tabs">
                <div className={
                    currentTab === 'login' ? 
                    "tab login active" :
                    "tab login"
                    }
                    onClick={() => setCurrentTab('login')}
                    >Login</div>
                <div className={
                    currentTab === 'signup' ? 
                    "tab signup active" :
                    "tab signup"
                    }
                    onClick={() => setCurrentTab('signup')} 
                    >Sign-Up</div>
            </div>
            <div className="contents">
                <LoginTab currentTab={currentTab} />
                <SignupTab currentTab={currentTab} />
            </div>
        </div>
    )
}

export default UserAuth
