import React, { useRef, useState } from 'react';
import Input from '../Utils/Input';
import mailImg from '../../images/mail.svg'
import passwordImg from '../../images/password.svg'
import { useAuth } from '../../context/AuthContext'

function SignupTab  ({ currentTab }) {

    let isActive = currentTab === 'signup' ? true : false;

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const conPasswordRef = useRef(null);
    const [ error, setError ] = useState('');
    const { signInWithEmail } = useAuth();


    function handleOnSubmit (e) {
        e.preventDefault();

        if (passwordRef.current.value !== conPasswordRef.current.value) return;

        signInWithEmail(emailRef.current.value, passwordRef.current.value)
    }

    return (
        <div className={isActive === true ?
            'signup-tab' :
            'signup-tab closed'}
        >
            <Input 
                img={mailImg} 
                type='email' 
                name='signupEmail' 
                placeholder='pokemon@mail.com'
                isVisible={isActive}
                refer={emailRef} />
            <Input 
                img={passwordImg} 
                type='password'
                name='signupPassword'
                placeholder='password'
                isVisible={isActive}
                refer={passwordRef} />
            <Input 
                img={passwordImg} 
                type='password' 
                name='confirmPassword' 
                isVisible={isActive} 
                placeholder='confirm password'
                refer={conPasswordRef} />

            <button className='btn primary' onClick={e => handleOnSubmit(e)} >Sign Up</button>
        </div>
    );
};

export default SignupTab