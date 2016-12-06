import * as requester from './requester';


function createTeam(name, description, startDate, endDate, callback) {
    let teamData = {
        name: name,
        description: description,
        beginning: startDate,
        deadline: endDate,
        meetings:[]
    };
    requester.fetch('POST', 'appdata', 'teams', 'kinvey', teamData)
        .then(() => callback(true))
        .catch(() => callback(false))
}

function loadTeams(callback) {
    let teamsQuery = `teams/?query={"_acl.creator":"${sessionStorage.getItem('userId')}"}`;
    requester.fetch('GET', 'appdata', teamsQuery, 'kinvey')
        .then(callback);
}

function loadMemberTeams(callback) {
    requester.fetch("GET", 'user',sessionStorage.getItem('userId') , 'kinvey')
        .then(function (user) {
            let promiseArray = [];
            for(let team of user['member-of']){
                promiseArray.push(requester.fetch("GET", 'appdata','teams/' + team,'kinvey'));
            }
            Promise.all(promiseArray).then(callback)
        });
}

function loadTeamDetails(teamId, callback) {
    requester.fetch("GET", 'appdata', 'teams/' + teamId, 'kinvey')
        .then(callback);
}

function editTeam(teamId, name, description, beginning, deadline,meetings, callback) {
    let teamData = {
        name: name,
        description: description,
        beginning: beginning,
        deadline: deadline,
        meetings:meetings
    };

    requester.fetch('PUT', 'appdata', 'teams/' + teamId, 'kinvey', teamData)
        .then(() => callback(true))
        .catch(() => callback(false))
}

function deleteTeam(teamId, callback) {
    requester.fetch('DELETE', 'appdata', 'teams/' + teamId, 'kinvey')
        .then(() => callback(true))
        .catch(() => callback(false))
}



export {
    loadTeams,
    loadTeamDetails,
    loadMemberTeams,
    createTeam,
    editTeam,
    deleteTeam
}