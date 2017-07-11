import 'whatwg-fetch';

import { hashHistory } from 'react-router';
//本地测试地址
// const URL = "http://192.168.0.109:5001/";
//现网
const URL = "http://112.74.40.94:9090/";
function transformData(data) {
    let form = document.createElement('form');
    let formData = new FormData(form)

    for (let key in data) {
        formData.append(key,data[key])
    }

    return formData;
}

function _post(api, data) {
    return fetch(URL + api, {
        method: 'POST',
        body: transformData(data)
    }).then(function (response) {
        return response.json();
    })
}

function _get(api, data) {

    return fetch(URL + api, {
        body: JSON.stringify(data)
    }).then(function (response) {
        return response.json();
    })
}


export const post = _post;
export const get = _get;
