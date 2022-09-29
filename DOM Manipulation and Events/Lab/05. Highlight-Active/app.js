function focused() {
    let focus = document.querySelectorAll('input');
    for (let el of focus) {
        el.addEventListener('focus', focusFunc);
        el.addEventListener('blur', blurFunc);
    }

    function focusFunc(event) {
        event.target.parentNode.classList.add('focused')
    }

    function blurFunc(event) {
        event.target.parentNode.classList.remove('focused')
    }
}