import * as requester from './requester';


function create(name, description, callback) {
    let teamData = {
        name: name,
        description: description
    };
    requester.fetch('POST', 'appdata', 'teams', 'kinvey', teamData)
        .then(() => callback(true))
        .catch(() => callback(false))
}

function loadTeams(callback) {
    requester.fetch('GET', 'appdata', 'teams', 'kinvey')
        .then(callback);
}

function loadDetails(teamId, callback) {
    requester.fetch('GET', 'appdata', 'teams/' + teamId, 'kinvey')
        .then(callback);
}
function edit(teamId, name, description, callback) {
    let teamData = {
        name: name,
        description: description
    };
    requester.fetch('PUT', 'appdata', 'teams/' + teamId, 'kinvey', teamData)
        .then(() => callback(true))
        .catch(() => callback(false))
}
function del(teamId,callback) {
    alert('delete - model');
    requester.fetch('DELETE', 'appdata', 'teams/' + teamId, 'kinvey')
        .then(() => callback(true))
        .catch(() => callback(false))
}
export {
    create,
    loadTeams,
    loadDetails,
    edit,
    del
}