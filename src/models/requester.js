//This function main work is to communicate with the Kinvey DB
import $ from 'jquery';
import toastr from 'toastr'

const kinveyUrl = 'https://baas.kinvey.com/';
const appKey = 'kid_B1a7PGeQg';
const appSecret = '778cc223897349649d77214daa914bd5';

function getHeaders(auth) {
    let headers = { "Content-Type": "application/json" };
    switch (auth) {
        case "master":
            headers["Authorization"] = "Basic " + btoa(appKey + ":" + "55d3ea74a03c40c297a2d9658361ecaf");
            break;
        case "basic":
            headers["Authorization"] = "Basic " + btoa(appKey + ":" + appSecret);
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
    let headers = getHeaders(auth);

    let request = {
        method: method,
        url: hostUrl,
        headers: headers,
        data: JSON.stringify(data),
        error: displayError
    };

    return $.ajax(request);
}

// Global Ajax error method
function displayError(err) {
    let errMsg = JSON.stringify(err);

    if (err.readyState === 0)
        errMsg = "Cannot connect due to network error.";

    if (err.responseJSON && err.responseJSON.description)
        errMsg = err.responseJSON.description;

    // Shows error via toastr pop up
    toastr.error(errMsg);
}