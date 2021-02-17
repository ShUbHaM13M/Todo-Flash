import React, { useState, useRef } from 'react';
import Input from '../Utils/Input';
import mailImg from '../../images/mail.svg'
import passwordImg from '../../images/password.svg'
import { useAuth } from '../../context/AuthContext'
import { useHistory } from 'react-router-dom';

const LoginTab = ({ currentTab }) => {

    let isActive = currentTab === 'login' ? true : false;

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const [ error, setError ] = useState('');
    const [ loading, setLoading ] = useState(false); 

    const { signInWithGoogle, loginWithEmail } = useAuth(); 

    const history = useHistory()

    const handleLogin = async (e) => {
        setLoading(true)
        setError('')
        e.preventDefault();

        if (passwordRef.current.value === '' || emailRef.current.value === '') return;

        try {
            await loginWithEmail(emailRef.current.value, passwordRef.current.value)
            setLoading(false)
            history.push('/projects')
        } catch (err) {
            setLoading(false)
            if (err.code === 'auth/user-not-found') {
                setError('User not Found')
            } else if (err.code === 'auth/wrong-password') {
                setError('Incorrect Password')
            }
        }
    }

    const handleGoogleSignIn = async () => {
        setLoading(true);
        setError('')
        try {
            await signInWithGoogle()
            setLoading(false)
            history.push('/projects')
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <form className={isActive === true ?
            "login-tab" :
            "login-tab closed"}
        >
            <Input 
                img={mailImg} 
                type='email' 
                name='loginEmail'
                isVisible={isActive} 
                placeholder='pokemon@email.com'
                refer={emailRef}
                />
            <Input 
                img={passwordImg} 
                type='password' 
                name='loginPassword' 
                isVisible={isActive}
                refer={passwordRef}
                placeholder='password'
                />

            <button disabled={loading} className="btn primary" onClick={handleLogin} >
                Login
            </button><hr />
            <button 
                disabled={loading}
                className="btn google" 
                onClick={handleGoogleSignIn}
            >
                Sign in with Google
            </button>
        </form>
    );
};

export default LoginTab