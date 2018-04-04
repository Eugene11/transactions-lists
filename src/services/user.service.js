export const userService = {
    login,
    checkLogin,
    logout
};

function login(username, password) {

    if (username === "name" && password==="pass") {
        const user = {"usename": username, "password": password};
        localStorage.setItem('user', JSON.stringify(user));
        return Promise.resolve(user);
    }
    else {
        return Promise.reject("Incorrect login or password");
    }
}

/**
 *
 * @param username - this function is test example so username value is doesnt matter
 * @returns {Promise<Response>}
 */
function checkLogin(username) {
    const requestOptions = {
        method: 'GET'
    };

    return fetch('/ok.json', requestOptions)
        .then(response => {
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }

            return response.json();
        })
        .then(ok => {
            let user = localStorage.getItem('user');
            return user;
        });
}


function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}
