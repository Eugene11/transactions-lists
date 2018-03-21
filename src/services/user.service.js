export const userService = {
    login,
    logout,
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


function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}
