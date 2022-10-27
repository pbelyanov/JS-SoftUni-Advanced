function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let list = document.querySelectorAll('tbody tr td');

   function onClick() {
      let counter = 0;
      let i = 0;


      let searchedWord = document.getElementById('searchField').value;

      let parent = document.querySelectorAll('tbody tr');
      for (let i = 0; i < parent.length; i++) {
         parent[i].classList.remove('select')
      }


      for (let line of list) {
         let result = line.textContent.includes(searchedWord)
         if (result === true) {
            let currentRow = document.querySelectorAll('tbody tr')[Math.floor(i / 3)];
            currentRow.classList.add('select')
            console.log(currentRow)
         }
         counter++;
         i++

      }

      document.getElementById('searchField').value = ''
   }
}