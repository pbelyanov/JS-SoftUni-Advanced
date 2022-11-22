import {
    showPost
} from './showPosts.js'

function template(title, username, id) {
    let parent = document.getElementsByClassName('topic-title')[0]
    let target = document.createElement('div');
    target.setAttribute('class', 'topic-container');
    target.setAttribute('id', `${id}`)
    target.innerHTML = `<div class="topic-name-wrapper">
        <div class="topic-name">
            <a href="#" class="normal">
                <h2>${title}</h2>
            </a>
            <div class="columns">
                <div>
                    <p>Date: <time>2020-10-10T12:08:28.451Z</time></p>
                    <div class="nick-name">
                        <p>Username: <span>${username}</span></p>
                    </div>
                </div>


            </div>
        </div>
    </div>
`
    target.getElementsByTagName('a')[0].addEventListener('click', showPost)
    parent.appendChild(target);

}

export async function getData() {
    document.getElementsByClassName('topic-title')[0].innerHTML = ''
    document.getElementsByClassName('new-topic-border')[0].style = 'display:block';
    document.getElementsByClassName('topic-title')[0].style = 'display:block';
    if (document.getElementsByClassName('theme-content')[0]) {
        document.getElementsByClassName('theme-content')[0].style = 'display:none';

    }
    let response = await fetch(`http://localhost:3030/jsonstore/collections/myboard/posts`);
    let data = await response.json();

    for (let row in data) {
        template(data[row].topicName, data[row].username, data[row]._id)
    }
}