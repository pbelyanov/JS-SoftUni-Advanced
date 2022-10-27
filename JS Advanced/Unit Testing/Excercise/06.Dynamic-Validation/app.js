function validate() {
    let input = document.getElementById('email');

    input.addEventListener('change', emailInput)

    function emailInput(event) {
        if (!validateEmail(input.value)) {
            event.target.classList.add('error');
        } else {
            event.target.classList.remove('error');
        }
    }

    function validateEmail() {

        var validRegex = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;

        if (input.value.match(validRegex)) {
            return true;

        } else {
            return false;
        }
    }
}