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
function loadMeetingDetails(meetingId,callback) {
    let meetingsQuery = `meetings/` + meetingId;
    requester.fetch('GET', 'appdata', meetingsQuery, 'kinvey')
        .then(callback);
}
function createMeeting(teamId,topic,time,date,callback) {
    let meetingsData = {
        topic: topic,
        time: time,
        date:date
    };
    requester.fetch('GET', 'appdata', 'teams/' + teamId, 'kinvey')
        .then(function (team) {

            let meetings = team['meetings']
            requester.fetch('POST', 'appdata', 'meetings', 'kinvey', meetingsData)
                .then(function (meeting) {
                    meetings.push(meeting._id)
                })
                .then(function () {
                    let teamData = {
                        name: team.name,
                        description: team.description,
                        beginning: team.beginning,
                        deadline: team.deadline,
                        meetings:meetings
                    }
                    console.log(teamData)
                    requester.fetch('PUT', 'appdata', 'teams/' + teamId, 'kinvey', teamData)
                })
        })
        .then(() => callback(true))
        .catch(() => callback(false))
}
function editMeeting(meetingId, topic, time, date, callback) {
    let meetingData = {
        topic: topic,
        time: time,
        date: date,
    };
    requester.fetch('PUT', 'appdata', 'meetings/' + meetingId, 'kinvey', meetingData)
        .then(callback)
        .catch(callback)
}
function deleteMeeting(meetingId,teamId, callback) {
    requester.fetch('GET', 'appdata', 'teams/' + teamId, 'kinvey')
        .then(function (team) {
            let meetings = team['meetings']
            for(let meeting of meetings){
                if(meeting === meetingId){
                    meetings.splice(meeting.indexOf(meeting),1)
                }
            }
            let teamData = {
                name: team.name,
                description: team.description,
                beginning: team.startDate,
                deadline: team.endDate,
                meetings:meetings
            }
            requester.fetch('PUT', 'appdata', 'teams/' + teamId, 'kinvey', teamData)
                .then(function (response) {
                    console.log(response)
                    requester.fetch('DELETE', 'appdata', 'meetings/' + meetingId, 'kinvey')
                })
                .catch((response)=>console.log(response))
        })
}

export {
    createMeeting,
    loadMeetings,
    loadMeetingDetails,
    editMeeting,
    deleteMeeting
}