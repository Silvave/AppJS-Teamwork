import * as requester from './requester';


function createTeam(name, description, startDate, endDate, callback) {
    let teamData = {
        name: name,
        description: description,
        beginning: startDate,
        deadline: endDate
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
function editTeam(teamId, name, description, callback) {
    let teamData = {
        name: name,
        description: description
    };
    requester.fetch('PUT', 'appdata', 'teams/' + teamId, 'kinvey', teamData)
        .then(() => callback(true))
        .catch(() => callback(false))
}
function deleteTeam(teamId, callback) {
    alert('delete - model');
    requester.fetch('DELETE', 'appdata', 'teams/' + teamId, 'kinvey')
        .then(() => callback(true))
        .catch(() => callback(false))
}

export {
    createTeam,
    loadTeams,
    loadDetails,
    editTeam,
    deleteTeam
}