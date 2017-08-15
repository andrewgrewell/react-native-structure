import { handleActions } from 'redux-actions';

import {
    ATTEMPT_LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from './actionTypes';

// State would be an immutable class
const initialState = {
    authenticated: false
};


export default handleActions({
    [ATTEMPT_LOGIN]: (state) => {
        return { ...state, error: null };
    },
    [LOGIN_SUCCESS]: (state) => {
        return { ...state, authenticated: true };
    },
    [LOGIN_FAILURE]: (state, { payload }) => {
        return { ...state, authenticated: false, error: payload.error };
    }
}, initialState);
