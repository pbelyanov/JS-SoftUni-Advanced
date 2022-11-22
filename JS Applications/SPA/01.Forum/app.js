import {
    makePost
} from './sendPost.js'

import {
    getData
} from './homeView.js'

import {
    showPost
} from './showPosts.js'

//make a post

let formElement = document.querySelector('form');
formElement.addEventListener('submit', makePost);
formElement.addEventListener('submit', getData);

document.getElementsByTagName('a')[0].addEventListener('click', getData)

let anchors = Array(document.getElementsByClassName('topic-title')[0].getElementsByTagName('a'));

console.log(anchors)


getData()