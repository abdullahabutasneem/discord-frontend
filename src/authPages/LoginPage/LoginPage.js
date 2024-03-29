import React, { useEffect, useState } from 'react';
import AuthBox from '../../shared/components/AuthBox';
import LoginPageHeader from './LoginPageHeader';
import LoginPageInputs from './LoginPageInputs';
import LoginPageFooter from './LoginPageFooter';
import { validateLoginForm } from '../../shared/utils/validators';

const LoginPage = () => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        setIsFormValid(validateLoginForm({ mail, password }));
    }, [mail, password, setIsFormValid]);

    const handleLogin = () => {
        console.log(mail);
        console.log(password);
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