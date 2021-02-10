import React, { useState } from 'react';
import Input from '../Utils/Input';
import mailImg from '../../images/mail.svg'
import passwordImg from '../../images/password.svg'
import { useAuth } from '../../context/AuthContext'

const LoginTab = ({ currentTab }) => {

    let isActive = currentTab === 'login' ? true : false;

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');
    const { signInWithGoogle } = useAuth(); 

    const handleOnChange = e => {
        const {name, value} = e.currentTarget;

          if(name === 'loginEmail') setEmail(value);
          else if(name === 'loginPassword') setPassword(value);
          
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setEmail('');
        setPassword('');
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
                value={email}
                isVisible={isActive} 
                onChange={e => handleOnChange(e)}
                placeholder='pokemon@email.com'
                />
            <Input 
                img={passwordImg} 
                type='password' 
                value={password}
                name='loginPassword' 
                isVisible={isActive}
                placeholder='password'
                onChange={e => handleOnChange(e)} 
                />

            <button className="btn primary" onClick={e => handleOnSubmit(e)} >
                Login
            </button><hr />
            <button 
                className="btn google" 
                onClick={e => {e.preventDefault(); signInWithGoogle()}}
            >
                Sign in with Google
            </button>
        </form>
    );
};

export default LoginTab