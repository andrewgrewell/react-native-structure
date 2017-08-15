import { handleActions } from 'redux-actions';

import {
    AUTH_SUCCESS,
    AUTH_FAILURE
} from './actionTypes';

// This would be an immutable object
const initialState = {
    authenticated: false
};


export default handleActions({
    [AUTH_SUCCESS]: (state) => {
        return { ...state, authenticated: true };
    },
    [AUTH_FAILURE]: (state, { payload }) => {
        return { ...state, authenticated: false, errorMessage: payload.errorMessage };
    }
}, initialState);
