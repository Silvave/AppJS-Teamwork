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
    let teamsQuery = `teams/?query={"_acl.creator":"${sessionStorage.getItem('userId')}"}`;
    requester.fetch('GET', 'appdata', teamsQuery, 'kinvey')
        .then(callback);
}

function loadMemberTeams(callback) {
    let responseArray = [];
    requester.fetch("GET", 'user',sessionStorage.getItem('userId') , 'kinvey')
        .then(function (user) {
            for(let team of user['member-of']){
                console.log(team);
                requester.fetch("GET", 'appdata','teams/' + team,'kinvey')
                    .then((data) => responseArray.push(data));
            }
        }).then(function() {
            // TODO: One time added obj to responseArray but all others didn't... WTF?!?
            console.log(responseArray);
            callback(responseArray)
        });
}

function loadTeamDetails(teamId, callback) {
    requester.fetch("GET", 'appdata', 'teams/' + teamId, 'kinvey')
        .then(callback);
}

function editTeam(teamId, name, description, beginning, deadline, callback) {
    let teamData = {
        name: name,
        description: description,
        beginning: beginning,
        deadline: deadline
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