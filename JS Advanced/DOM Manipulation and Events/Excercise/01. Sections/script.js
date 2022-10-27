function create(words) {
   console.log(words);

   for (let line of words) {
      let text = line;
      let p = document.createElement('p')
      p.textContent = line;
      p.style = 'display:none'
      let div = document.createElement('div');
      div.appendChild(p);
      let target = document.getElementById('content');
      target.appendChild(div)

      div.addEventListener('click', showHidden)
   }

   function showHidden(e) {
      let element = e.currentTarget.querySelectorAll('div p')[0];
      element.style = 'display: block'
   }
}