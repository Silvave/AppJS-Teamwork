import * as requester from './requester';

function addNewMessage(username, email, subject, message) {
    console.log('tuk');
    let messageData = {
        userName: username,
        userEmail: email,
        subject: subject,
        message: message
    };

    requester.fetch('POST', 'appdata', 'contactUsEmails', 'basic', messageData)
        .then(function (data) {
            console.log(data);
        })
        .catch(function (error) {
            console.log(error);
        })
}