import React from 'react';
import AuthBox from '../../shared/components/AuthBox';
import LoginPageHeader from './LoginPageHeader';

const LoginPage = () => {
    return (
        <AuthBox>
            <LoginPageHeader></LoginPageHeader>
        </AuthBox>
    );
};

export default LoginPage;