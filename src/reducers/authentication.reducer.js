import { userConstants } from 'constants/index';

//let user = JSON.parse(localStorage.getItem('user'));
//const initialState = user ? { loggedIn: true, user } : {};

//const initialState = { loggedIn: false };
export function authentication(state = {}, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                /*loggingIn: true,*/
                user: action.user
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            };
        case userConstants.LOGIN_CHECK:
            return {
                loggedIn: action.user ? true : false,
            };
        case userConstants.LOGIN_FAILURE:
            return {};

        case userConstants.LOGOUT:
            return {};

        default:
            return state
    }
}
