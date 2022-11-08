window.onload = solution();

async function solution() {
    function createElement(title, id) {
        let divMain = document.createElement('div');
        divMain.classList.add('accordion');

        let divHead = document.createElement('div');
        divHead.classList.add('head');

        let span = document.createElement('span');
        span.textContent = title;
        let button = document.createElement('button');
        button.textContent = 'More'
        button.classList.add('button')
        button.setAttribute('id', `${id}`)

        divHead.appendChild(span);
        divHead.appendChild(button);

        let divExtra = document.createElement('div');
        divExtra.classList.add('extra');

        let p = document.createElement('p');
        divExtra.appendChild(p)

        divMain.appendChild(divHead);
        divMain.appendChild(divExtra);

        document.getElementById('main').appendChild(divMain);
    }

    let info = await fetch(`http://localhost:3030/jsonstore/advanced/articles/list`);
    let infoArray = await info.json();
    console.log(infoArray)

    for (let row of infoArray) {
        createElement(row.title, row._id);
    }

    let button = document.getElementsByClassName('button');

    for (let row of button) {
        row.addEventListener('click', showMore);
    }

    async function getContent(idToQuery) {
        let info = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${idToQuery}`);
        let infoArray = await info.json();
        let result = infoArray.content;
        return result;
    }



    async function showMore(event) {
        let idToQuery = event.currentTarget.id;
        let button = event.currentTarget;
        let textContent = await getContent(idToQuery);
        console.log(textContent)
        if (button.textContent === 'More') {

            button.textContent = 'Less';
            button.parentNode.parentNode.getElementsByTagName('p')[0].textContent = textContent;
            button.parentNode.parentNode.querySelectorAll('div')[1].style = 'display:block';
        } else {
            button.textContent = 'More';
            button.parentNode.parentNode.querySelectorAll('div')[1].style = 'display:none';

        }

    }

}