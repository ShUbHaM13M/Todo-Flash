import React from 'react';
import Input from './Input';
import mailImg from '../images/mail.svg'
import passwordImg from '../images/password.svg'

function signupTab  ({ currentTab }) {

    let isActive = currentTab === 'signup' ? true : false;

    return (
        <div className={isActive === true ?
            'signup-tab' :
            'signup-tab closed'}
        >
            <Input img={mailImg} type='email' name='email' isVisible={isActive} />
            <Input img={passwordImg} type='password' name='password' isVisible={isActive} />
            <Input img={passwordImg} type='password' name='confirm-password' isVisible={isActive} />
            <button className='btn primary'>Sign Up</button>
        </div>
    );
};

export default signupTab