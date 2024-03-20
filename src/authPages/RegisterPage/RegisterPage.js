import React, { useEffect, useState } from 'react';
import AuthBox from '../../shared/components/AuthBox';
import { Typography } from '@mui/material';
import RegisterPageInput from './RegisterPageInput';
import RegisterPageFooter from './RegisterPageFooter';
import { validateRegisterForm } from '../../shared/utils/validators';

const RegisterPage = () => {
    const [mail, setMail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [isFormValid, setIsFormValid] = useState(false);

    const handleRegister = () => {
        console.log(mail, password, username);
    };

    useEffect(() => {
        setIsFormValid(validateRegisterForm({
            mail, username, password,
        }))
    }, [mail, username, password, setIsFormValid])
    return (
        <AuthBox>
            <Typography
                variant='h5'
                sx={{ color: 'white' }}>
                Create an account
            </Typography>
            <RegisterPageInput
                mail={mail}
                setMail={setMail}
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}>
            </RegisterPageInput>
            <RegisterPageFooter
                handleRegister={handleRegister}
                isFormValid={isFormValid}>
            </RegisterPageFooter>
        </AuthBox>
    );
};

export default RegisterPage;