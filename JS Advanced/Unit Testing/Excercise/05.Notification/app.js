function notify(message) {

  let target = document.getElementById('notification');
  target.textContent = message;
  target.style = 'display:block'

  target.addEventListener('click', () => {
    target.style = 'display:none'
  });

}