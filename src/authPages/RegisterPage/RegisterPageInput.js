import {  } from '@mui/material';
import React from 'react';
import InputWithLabel from '../../shared/components/InputWithLabel';

const RegisterPageInput = (props) => {
    const { mail, setMail, username, setUsername, password, setPassword } = props;
    return (
        <>
            <InputWithLabel
                value={mail}
                setValue={setMail}
                label='E-mail address'
                type='text'
                placeholder='Enter e-mail address'>
            </InputWithLabel>
            <InputWithLabel
                value={username}
                setValue={setUsername}
                label='Username'
                type='text'
                placeholder='Enter username'>
            </InputWithLabel>
            <InputWithLabel
                value={password}
                setValue={setPassword}
                label='Password'
                type='password'
                placeholder='Enter password'>
            </InputWithLabel>
        </>
    );
};

export default RegisterPageInput;