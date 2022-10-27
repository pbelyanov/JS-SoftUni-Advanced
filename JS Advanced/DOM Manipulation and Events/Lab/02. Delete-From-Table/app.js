function deleteByEmail() {
    let input = document.querySelectorAll('input')[0].value
    let emails = document.querySelectorAll('tbody tr td')

    let test = document.querySelectorAll('input')[0];
    test.addEventListener('focus', focusFunc);

    function focusFunc(event) {

        console.log(event);
        event.stopPropagation();

    }

    for (let i = 1; i < emails.length; i += 2) {
        if (input === emails[i].textContent) {
            // let toDelete = emails[i].parentElement;
            emails[i].parentElement.remove()
            document.getElementById('result').textContent = 'Deleted';
        }
    }

    if (!document.getElementById('result').textContent) {
        document.getElementById('result').textContent = 'Not found.'
    }
    console.log(emails);
}