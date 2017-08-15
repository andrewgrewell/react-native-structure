
import {
    ATTEMPT_LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from './actionTypes';

export function attemptLogin(username, password) {
    console.log('attempt login: ', username, password);
    return (dispatch) => {
        dispatch({ type: ATTEMPT_LOGIN });

        return Promise.resolve(fakeAuth(username, password))
            .then(() => dispatch({ type: LOGIN_SUCCESS }))
            .catch((error) => dispatch({ type: LOGIN_FAILURE, payload: { error } }));
    };
}

function fakeAuth(username, password) {
    console.log('fake auth...');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (password.toLowerCase() === 'password') {
                console.log('fake auth login');
                resolve();
            }
            else {
                console.log('fake auth fail');
                reject({ userMessage: 'Invalid Credentials' });
            }
        }, 1000);
    });
}