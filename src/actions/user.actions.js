import { userConstants } from 'constants/index';
import { userService } from 'services/index';
import { alertActions, banksActions } from 'actions/index';

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

/**
 *
 * @param username - this function is test example so username value is doesnt matter
 * @returns {function(*)}
 */
function checkLogin(username) {
    return dispatch => {
        userService.checkLogin(username)
            .then(
                user => {
                    dispatch(success(user));
                    return user;
                },
                error => {
                    alert("user Error " + error);
                    return null;
                }
            );
    };

    function success(user) { return { type: userConstants.LOGIN_CHECK, user } }

}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}
