import * as requester from './requester';


function loadFiles(id, callback) {
    let teamFilesQuery = `?query={"teamId":"${id}"}`;
    requester.fetch('GET', 'blob', teamFilesQuery, 'kinvey')
        .then(callback);
}

function uploadFile(data, file, callback) {
    let bonusHeader = { "X-Kinvey-Content-Type": data.mimeType };

    requester.fetch("POST", "blob", "", "kinvey", data, bonusHeader)
        .then(sendFileToGoogleDrive);

    function sendFileToGoogleDrive(response) {
        let innerHeaders = response._requiredHeaders;
        innerHeaders["Content-Type"] = file.type;

        let uploadUrl = response._uploadURL;

        requester.fetchFile("PUT", uploadUrl, innerHeaders, file)
            .then(callback);
    }
}

function deleteFile(fileId, callback) {
    requester.fetch('DELETE', 'blob', fileId, 'kinvey')
        .then(callback)
}

export {
    loadFiles,
    uploadFile,
    deleteFile
}