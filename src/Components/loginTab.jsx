import React from 'react';
import Input from './Input';
import mailImg from '../images/mail.svg'
import passwordImg from '../images/password.svg'

function loginTab ({ currentTab }) {

    let isActive = currentTab === 'login' ? true : false;

    return (
        <div className={isActive === true ?
            "login-tab" :
            "login-tab closed"}
        >
            <Input img={mailImg} type='email' name='email' isVisible={isActive} />
            <Input img={passwordImg} type='password' name='password' isVisible={isActive} />
            <button className="btn primary">Login</button><hr />
            <button className="btn google">Sign in with Google</button>
        </div>
    );
};

export default loginTab