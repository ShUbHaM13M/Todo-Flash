import React, { useState } from 'react'
import LoginTab from '../Components/loginTab'
import SignupTab from '../Components/signupTab'
import '../css/auth-form.css'

function UserAuth() {

    const [currentTab, setCurrentTab] = useState('login')

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
