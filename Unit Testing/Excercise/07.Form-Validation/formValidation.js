function validate() {

    let submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', usernameValidator);
    submitButton.addEventListener('click', emailValidator);
    submitButton.addEventListener('click', passwordValidator);
    submitButton.addEventListener('click', confirmPasswordValidator);
    submitButton.addEventListener('click', confirmCompanyNumber);
    submitButton.addEventListener('click', generalValidator);
    document.getElementById('company').addEventListener('change', showHiddenField)
    let counterRed = 0;

    function usernameValidator(event) {
        event.preventDefault();
        let input = document.getElementById('username').value;
        let allowedInput = /^[a-z0A-Z1-9]+$/
        if (allowedInput.test(input) && 3 <= input.length && input.length <= 20) {
            document.getElementById('username').style = 'border-color: none'
            return true;
        } else {
            document.getElementById('username').style = 'border-color: red'
            counterRed++
            return false;
        }
    };

    function emailValidator(event) {
        let emailInput = document.getElementById('email').value;
        let validEmailInput = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+).*$/;
        if (validEmailInput.test(emailInput)) {
            document.getElementById('email').style = 'border-color: none'
            return true;
        } else {
            document.getElementById('email').style = 'border-color: red'
            counterRed++
            return false;
        }
    };

    function passwordValidator(event) {
        event.preventDefault();
        let passcode = document.getElementById('password').value;
        let passcodeConfirm = document.getElementById('confirm-password').value;
        let allowedInput = /^[a-z0A-Z1-9_]+$/
        if (allowedInput.test(passcode) && 3 <= passcode.length && passcode.length <= 15 && passcode === passcodeConfirm) {
            document.getElementById('password').style = 'border-color: none'
            return true;
        } else {
            document.getElementById('password').style = 'border-color: red'
            counterRed++
            return false;
        }
    };

    function confirmPasswordValidator() {
        let passcode = document.getElementById('password').value;
        let passcodeConfirm = document.getElementById('confirm-password').value;
        let allowedInput = /^[a-z0A-Z1-9_]+$/
        if (allowedInput.test(passcodeConfirm) && 3 <= passcodeConfirm.length && passcodeConfirm.length <= 15 && passcode === passcodeConfirm) {
            document.getElementById('confirm-password').style = 'border-color: none'
            return true;
        } else {
            document.getElementById('confirm-password').style = 'border-color: red'
            counterRed++
            return false;
        }
    };

    function confirmCompanyNumber(event) {
        let input = document.getElementById('companyNumber').value;
        if (input.length === 4) {
            document.getElementById('companyNumber').style = 'border-color: none'

            return true;
        } else {
            document.getElementById('companyNumber').style = 'border-color: red'
            return false
        }
    }

    function showHiddenField(event) {
        let checkbox = document.getElementById('company');
        if (checkbox.checked) {
            document.getElementById('companyInfo').style = 'display: block';
        } else {
            document.getElementById('companyInfo').style = 'display: none';
        }
    }


    function generalValidator() {
        if (!document.getElementById('company').checked) {
            if (counterRed === 0) {
                document.getElementById('valid').style = 'display: block'
            } else {
                counterRed = 0
                document.getElementById('valid').style = 'display: none'
            }
        } else {
            if (counterRed === 0 && confirmCompanyNumber()) {
                document.getElementById('valid').style = 'display: block'
            } else {
                document.getElementById('valid').style = 'display: none'
                counterRed = 0
            }
        }
    }
}