import * as requester from './requester';


function loadMeetings(teamId,callback) {
    let meetingsQuery = `teams/` + teamId;
    requester.fetch('GET', 'appdata', meetingsQuery, 'kinvey')
        .then(function (team) {
            let promiseArray = [];
            for(let meeting of team['meetings']){
                promiseArray.push(requester.fetch("GET", 'appdata','meetings/' + meeting,'kinvey'))
            }
            Promise.all(promiseArray).then(callback)
        });
}

function createMeeting(teamId,topic,time,callback) {
    let meetingsData = {
        topic: topic,
        time: time,
    };
    requester.fetch('GET', 'appdata', 'teams/' + teamId, 'kinvey')
        .then(function (team) {
            console.log(team)
            let meetings = team['meetings']
            console.log(team)
            requester.fetch('POST', 'appdata', 'meetings', 'kinvey', meetingsData)
                .then(function (meeting) {
                    meetings.push(meeting._id)
                })
                .then(function () {
                    let teamData = {
                        name: team.name,
                        description: team.description,
                        beginning: team.startDate,
                        deadline: team.endDate,
                        meetings:meetings

                    }
                    requester.fetch('PUT', 'appdata', 'teams/' + teamId, 'kinvey', teamData)
                        .then(() => callback(true))
                        .catch(() => callback(false))

                })
                .then(() => callback(true))
                .catch(() => callback(false))

        })
        .then(() => callback(true))
        .catch(() => callback(false))
}

export {
    createMeeting,
    loadMeetings,
}