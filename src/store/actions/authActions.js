import * as api from '../../api';

export const authActions = {
    SET_USER_DETAILS: 'AUTH.SET_USER_DETAILS'
};

export const getActions = ( ) => {
    return {
        login: (userDetails, history) => 
            dispatch(login(userDetails, history)),
        register: (userDetails, history) => 
            dispatch(register(userDetails, history))
    }
}

const setUserDetails = (userDetails) => {
    return {
        type: authActions.SET_USER_DETAILS,
        userDetails,
    }
}

const login = (userDetails, history) => {
    return async (dispatch) => {
        const response = await api.login(userDetails);
        if(response.error) {

        } else {
            const { userDetails } = response?.data;
            localStorage.setItem('user', JSON.stringify(userDetails));
            dispatch(setUserDetails(userDetails));
            history.push('/dashboard');
        }
    }
}

const register = (userDetails, history) => {
    return async (dispatch) => {
        const response = await api.register(userDetails);
        if(response.error) {

        } else {
            const { userDetails } = response?.data;
            localStorage.setItem('user', JSON.stringify(userDetails));
            dispatch(setUserDetails(userDetails));
            history.push('/dashboard');
        }
    }
}