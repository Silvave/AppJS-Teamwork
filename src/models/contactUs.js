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
        .then(function () {
            requester.fetch('GET', 'appdata', 'contactUsEmails', 'master')
                .then(function (data) {
                    for(let row of data) {
                        let id = row._id;
                        requester.fetch('DELETE', 'appdata', 'contactUsEmails/'+id, 'master')
                    }
                })
        })
        .catch(function (error) {
            console.log(error);
        })
}

export {addNewMessage}

/*var email = modules.email;

 var userName = request.body.userName;
 var userEmail = request.body.userEmail;
 var subject = request.body.subject;
 var message = request.body.message;

 email.send('userEmail@abv',
 'shrekt_js@abv.bg',
 'subject',
 'message', function(err, result) {
 response.complete(200);
 });*/