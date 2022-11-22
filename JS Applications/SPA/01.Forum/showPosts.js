function templatePost(username, content, id) {
    let userComment = document.createElement('div');
    userComment.setAttribute('id', `${id}`)
    userComment.innerHTML = `        <div class="topic-name-wrapper">
    <div class="topic-name">
        <p><strong>${username}</strong> commented on <time>3/15/2021, 12:39:02 AM</time></p>
        <div class="post-content">
            <p>${content}</p>
        </div>
    </div>
</div>`

    return userComment;
}

export async function showPost(event) {
    event.preventDefault();
    document.getElementsByClassName('new-topic-border')[0].style = 'display:none';
    document.getElementsByClassName('topic-title')[0].style = 'display:none';

    let themeContent = document.createElement('div');
    themeContent.setAttribute('class', 'theme-content')

    let title = document.createElement('div');
    title.setAttribute('class', 'theme-title');
    title.innerHTML = `<div class="theme-name-wrapper">
    <div class="theme-name">
        <h2>${event.target.textContent}</h2>

    </div>

</div>`

    let id = event.target.parentNode.parentNode.parentNode.parentNode.getAttribute('id')


    let response = await fetch(`http://localhost:3030/jsonstore/collections/myboard/posts/${id}`)
    let data = await response.json();

    let comment = document.createElement('div');
    comment.setAttribute('class', 'comment');
    comment.innerHTML = `    <div class="header">
    <img src="./static/profile.png" alt="avatar">
    <p><span>${data.username}</span> posted on <time>2020-10-10 12:08:28</time></p>

    <p class="post-content">${data.content}</p>
</div>`
    themeContent.appendChild(title);
    themeContent.appendChild(comment);

    let commentResponse = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments');
    let dataComment = await commentResponse.json();
    console.log(dataComment)

    if (dataComment !== {}) {
        for (let row in dataComment) {

            console.log(templatePost(dataComment[row].username, dataComment[row].text, dataComment[row]._id))
            comment.appendChild(templatePost(dataComment[row].username, dataComment[row].text, dataComment[row]._id));

        }
    }

    let answerComment = document.createElement('div');
    answerComment.setAttribute('class', 'answer');
    answerComment.innerHTML = `<form>
    <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
    <div>
        <label for="username">Username <span class="red">*</span></label>
        <input type="text" name="username" id="username">
    </div>
    <button>Post</button>
</form>`

    themeContent.appendChild(answerComment);
    document.getElementsByTagName('main')[0].appendChild(themeContent);

    let formElement = document.getElementsByTagName('form')[1];
    console.log(formElement)

    formElement.addEventListener('submit', sendComment)

    // let formElement = document.getElementsByTagName('form')[1];
    // console.log(formElement)

    // formElement.addEventListener('submit', async event => {
    //     event.preventDefault();
    //     const dataForm = new FormData(event.target);

    //     const data = Object.fromEntries(dataForm.entries());
    //     console.log(data)


    //     let newData = await fetch(`http://localhost:3030/jsonstore/collections/myboard/comments`, {
    //         method: 'post',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
    // })


}


async function sendComment(event) {
    event.preventDefault();
    const dataForm = new FormData(event.target);

    const data = Object.fromEntries(dataForm.entries());
    console.log(data)


    let newData = await fetch(`http://localhost:3030/jsonstore/collections/myboard/comments`, {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    document.querySelectorAll('form')[1].reset();
};