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

function register(username, password, callback, errorCallback) {
    let userData = {
        username: username,
        password: password,
        ['member-of']: []
    };

    requester.fetch('POST', 'user', '', 'basic', userData)
        .then((response) => {
            saveUserAuth(response);
            callback(true);
        })
        .catch(errorCallback)
}

function addUserToTeam(userId, teamId, callback) {
    let user = requester.fetch("GET", 'user', '?query={"_id":"' + userId + '"}');
    //console.log(user);


    // let userData = {
    //     username: username,
    //     password: password,
    //     memberOf:[],
    // };
    // requester.post('user', '', 'basic', userData)
    //     .then((response) => {
    //         saveUserAuth(response);
    //         callback(true);
    //     })
}

//logout
function logout(callback) {
    requester.fetch('POST', 'user', '_logout', 'kinvey')
        .then((response) => {
            sessionStorage.clear();
            callback(true);
        })
        .catch((err) => callback(false));
}
function getUserById(userId, callback) {
    requester.fetch('GET', 'user', userId, 'kinvey')
        .then((response) => {
            callback(response);
        })
        .catch((err) => console.log(err));

}
function loadUsers(callback) {
    requester.fetch('GET', 'user', '', 'kinvey')
        .then(callback);
}
function pushUsersArrayToTheTeam(teamId, userArr, callback) {
    requester.fetch('POST', 'appdata', teamId, 'user', userArr)
        .then(callback)
        .catch((err) => console.log(err));
}

function updateUser(userId, data, callback) {
    requester.fetch('PUT', 'user', userId, 'master', data)
        .then(callback)
        .catch((err) => console.log(err));
}
function removeUserFromTeam(userId, teamId, callback) {
    console.log(userId,teamId)
    // requester.fetch('PUT', 'user', userId, 'master', data)
    //     .then(callback)
    //     .catch((err) => console.log(err));
}
function loadUsersInTeam(teamId,callback) {

    requester.fetch('GET', 'user', '', 'kinvey')
        .then(function (users) {
            let promiseArray=[];
            for(let user of users){
                for(let team of user['member-of']){
                    if(team === teamId){
                        requester.fetch('GET', 'user', user._id, 'kinvey')
                            .then(function (response) {
                                promiseArray.push(response)

                            })
                    }
                }
            }
            (setTimeout(() => callback(promiseArray),1000))
        })

}

export {
    addUserToTeam,
    login,
    logout,
    register,
    loadUsers,
    getUserById,
    pushUsersArrayToTheTeam,
    updateUser,
    removeUserFromTeam,
    loadUsersInTeam
}
