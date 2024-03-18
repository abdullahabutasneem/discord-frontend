import React, { useState } from 'react';
import AuthBox from '../../shared/components/AuthBox';
import LoginPageHeader from './LoginPageHeader';
import LoginPageInputs from './LoginPageInputs';
import LoginPageFooter from './LoginPageFooter';

const LoginPage = () => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const handleLogin = () => {
        console.log('log in');
    }

    return (
        <AuthBox>
            <LoginPageHeader></LoginPageHeader>
            <LoginPageInputs
                mail={mail}
                setMail={setMail}
                password={password}
                setPassword={setPassword}>
            </LoginPageInputs>
            <LoginPageFooter 
                isFormValid={isFormValid}
                handleLogin={handleLogin}>
            </LoginPageFooter>
        </AuthBox>
    );
};

export default LoginPage;