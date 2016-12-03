//This function main work is to make response with the DB
import $ from 'jquery';

const kinveyUrl = 'https://baas.kinvey.com/';
const appKey = 'kid_B1a7PGeQg';
const appSecret = '778cc223897349649d77214daa914bd5';

function getHeader(auth) {
    let header = {};
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

export function fetch(method, module, url, auth, data) {
    let hostUrl = `${kinveyUrl}${module}/${appKey}/${url}`;
    let header = getHeader(auth);

    let request = {
        method: method,
        url: hostUrl,
        headers: header,
        data: data
    };

    return $.ajax(request);
}