import * as requester from './requester';


function create(name, description,start,deadline, callback) {
    let teamData = {
        name: name,
        description: description,
        start:start,
        deadline:deadline
    };
    requester.post('appdata', 'teams', 'kinvey', teamData)
        .then(() => callback(true))
        .catch(() => callback(false))
}

function loadTeams(callback) {
    requester.get('appdata', 'teams/?query={"_acl.creator":"'+sessionStorage.getItem('userId') +'"}', 'kinvey')
        .then(callback);
}
<<<<<<< HEAD
=======
function loadMemberTeams(callback) {
    let responseArray = []
    requester.get('user',sessionStorage.getItem('userId') , 'kinvey')
        .then(function (user) {
            for(let team of user['member-of']){
                requester.get('appdata','teams/'+team,'kinvey').then((data)=>responseArray.push(data))
            }
        }).then(()=>callback(responseArray));
}
>>>>>>> 23b89b5cc9346cc17d2ac146cee2743d9eb091bd
function loadDetails(teamId, callback) {
    requester.get('appdata', 'teams/' + teamId, 'kinvey')
        .then(callback);
}
function edit(teamId, name, description, callback) {
    let teamData = {
        name: name,
        description: description
    };
    requester.update('appdata', 'teams/' + teamId, 'kinvey', teamData)
        .then(() => callback(true))
        .catch(() => callback(false))
}
export {
    loadMemberTeams,
    create,
    loadTeams,
    loadDetails,
    edit
}