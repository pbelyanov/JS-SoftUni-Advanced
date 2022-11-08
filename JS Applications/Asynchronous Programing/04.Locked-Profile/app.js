async function lockedProfile() {
    let info = await fetch(`http://localhost:3030/jsonstore/advanced/profiles`);
    let infoArray = await info.json();
    let i = 1;

    for (let user in infoArray) {
        let node = document.getElementsByClassName('profile')[0];
        let clone = node.cloneNode(true);
        document.getElementById('main').appendChild(clone);

        let currenObj = infoArray[user];
        document.querySelectorAll('input')[2].value = currenObj.username;
        document.querySelectorAll('input')[3].value = currenObj.email;
        document.querySelectorAll('input')[4].value = currenObj.age;

        document.querySelectorAll('input')[0].name = `user${i}Locked`;
        document.querySelectorAll('input')[0].checked = true;
        document.querySelectorAll('input')[1].name = `user${i}Locked`;
        document.querySelectorAll('input')[2].name = `user${i}Username`;
        document.querySelectorAll('input')[3].name = `user${i}Email`;
        document.querySelectorAll('input')[4].name = `user${i}Age`;

        document.getElementsByClassName('profile')[0].getElementsByTagName('div')[0].className = `user${i}Username`;
        i++;

        document.getElementsByClassName('profile')[0].getElementsByTagName('div')[0].style = 'display:none'
    }
    document.getElementsByClassName('profile')[1].remove();


    let buttonShowMore = document.getElementsByTagName('button');
    console.log(buttonShowMore)

    for (let row of buttonShowMore) {
        row.addEventListener('click', showMore)


    }


    function showMore(event) {
        let checked = event.currentTarget.parentNode.querySelectorAll('input')[1].checked
        let div = event.currentTarget.parentNode.getElementsByTagName('div')[0]

        if (checked && event.currentTarget.textContent === 'Hide it') {
            div.style = 'display:none';
            event.currentTarget.textContent = 'Show more';
            return;
        }

        if (checked) {
            div.style = 'display:block'
            event.currentTarget.textContent = `Hide it`
            return;
        }

    }
}