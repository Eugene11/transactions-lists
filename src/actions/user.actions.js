import { userConstants } from 'constants/index';
import { userService } from 'services/index';
import { alertActions, banksActions } from 'actions/index';
import { history } from 'helpers/index';

export const userActions = {
    login,
    checkLogin,
    logout,
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                    dispatch(alertActions.success(null));
                    dispatch(banksActions.fillBanks())
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}


function checkLogin(username) {
    return dispatch => {
        userService.checkLogin(username)
            .then(
                user => {
                    dispatch(success(user));
                },
                error => {
                    alert("user Error " + error);
                }
            );
    };

    function success(user) { return { type: userConstants.LOGIN_CHECK, user } }



}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}
