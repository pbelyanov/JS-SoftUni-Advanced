function lockedProfile() {
    let button = Array.from(document.getElementsByTagName('button'))

    for (let line of button) {
        line.addEventListener('click', showHidden)
    }

    function showHidden(event) {
        let checked = event.currentTarget.parentNode.querySelectorAll('input[value="unlock"]')[0].checked;
        let div = event.currentTarget.parentNode.getElementsByTagName('div')[0];


        if (event.currentTarget.textContent === 'Hide it!' && checked === true) {
            div.style = 'display: none'
            event.currentTarget.textContent = 'Show more'
            return;
        }


        if (checked) {
            div.style = 'display: block'
            event.currentTarget.textContent = 'Hide it!'
            return;
        }

    }

}