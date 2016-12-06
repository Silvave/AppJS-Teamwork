import * as requester from './requester';

function addNewMessage(username, email, subject, message) {
    alert("tuk");
    let messageData = {
        userName: username,
        userEmail: email,
        subject: subject,
        message: message
    };

    requester.fetch('POST', 'appdata', 'contactUsEmails', 'master', messageData)
        .then(function (data) {
            console.log(data);
        })
        .catch(function (error) {
            console.log(error);
        })
}

export {addNewMessage}