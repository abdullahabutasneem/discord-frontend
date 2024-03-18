import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';

const BoxWrapper = styled('div')({
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#5865F2'
})

const AuthBox = (props) => {
    return (
        <div>
            <BoxWrapper>
                <Box sx={{
                    width: 700,
                    height: 400,
                    bgcolor: '#36393f',
                    borderRadius: '5px',
                    padding: '25px',
                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%',
                    display: 'flex',
                    flexDirection: 'column',
                    
                }}>
                    {props.children}
                </Box>
            </BoxWrapper>
        </div>
    );
};

export default AuthBox;