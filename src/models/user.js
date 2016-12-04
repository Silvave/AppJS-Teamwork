import * as requester from './requester';


//Save session
function saveUserAuth(userObj) {
    sessionStorage.setItem('authToken', `${userObj._kmd.authtoken}`);
    sessionStorage.setItem('username', `${userObj.username}`);
    sessionStorage.setItem('userId', `${userObj._id}`);
}

function login(username, password, callback) {
    let userData = {
        username: username,
        password: password
    };
    requester.fetch('POST', 'user', 'login', 'basic', userData)
        .then((response) => {
            saveUserAuth(response);
            callback(true);
        })
        .catch((err) => callback(false))
}

function register(username, password, callback) {
    let userData = {
        username: username,
        password: password
    };
    requester.fetch('POST', 'user', '', 'basic', userData)
        .then((response) => {
            saveUserAuth(response);
            callback(true);
        })
}

function logout(callback) {
    requester.fetch('POST', 'user', '_logout', 'kinvey', null)
        .then((response) => {
            sessionStorage.clear();
            callback(true);
        })
        .catch((err) => callback(false));

}

function loadUsers(callback) {
    requester.fetch('GET', 'user', '', 'kinvey')
        .then(callback);
}

export {
    login,
    register,
    logout,
    loadUsers
}
