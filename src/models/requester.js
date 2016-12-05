//This function main work is to communicate with the Kinvey DB
import $ from 'jquery';

const kinveyUrl = 'https://baas.kinvey.com/';
const appKey = 'kid_B1a7PGeQg';
const appSecret = '778cc223897349649d77214daa914bd5';

function getHeaders(auth) {
    let headers = { "Content-Type": "application/json"};
    switch (auth) {
        case "master":
            headers["Authorization"] = "Basic " + btoa(appKey + ':' + '55d3ea74a03c40c297a2d9658361ecaf');
            break;
        case "basic":
            headers["Authorization"] = "Basic " + btoa(appKey + ':' + appSecret);
            break;
        case "kinvey":
            headers["Authorization"] = "Kinvey " + sessionStorage.getItem('authToken');
            break;
        default:
    }
    return headers;
}

export function fetch(method, module, url, auth, data) {
    let hostUrl = `${kinveyUrl}${module}/${appKey}/${url}`;
    let header = getHeaders(auth);

    let request = {
        method: method,
        url: hostUrl,
        headers: header,
        data: JSON.stringify(data)
    };

    return $.ajax(request);
}