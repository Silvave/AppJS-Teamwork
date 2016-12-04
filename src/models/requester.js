//This function main work is to make response with the DB
import $ from 'jquery';

const kinveyUrl = 'https://baas.kinvey.com/';
const appKey = 'kid_HJYL52Tfl';
const appSecret = '21f05a36964841a69ff556438ac4d2df';

function getHeader(auth) {
    let header = {"Authorization": ""};
    switch (auth) {
        case "basic":
            header["Authorization"] = "Basic " + btoa(appKey + ':' + appSecret);
            break;
        case "kinvey":
            header["Authorization"] = "Kinvey " + sessionStorage.getItem('authToken');
            break;
        default:
    }
    return header;
}

function get(module, url, auth) {
    let hostUrl = `${kinveyUrl}${module}/${appKey}/${url}`;
    let header = getHeader(auth);

    return $.ajax({
        method: 'GET',
        url: hostUrl,
        headers: header
    });
}

function post(module, url, auth, data) {
    let hostUrl = `${kinveyUrl}${module}/${appKey}/${url}`;
    let header = getHeader(auth);

    let request = {
        method: 'POST',
        url: hostUrl,
        headers: header
    };
    if (data) {
        request.data = data;
    }

    return $.ajax(request);
}

function update(module, url, auth, data) {
    let hostUrl = `${kinveyUrl}${module}/${appKey}/${url}`;
    let header = getHeader(auth);

    let request = {
        method: 'PUT',
        url: hostUrl,
        headers: header,
        data: data
    };

    return $.ajax(request);
}

export {
    get,
    post,
    update
};