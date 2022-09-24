function search() {

   let list = document.querySelectorAll('ul li');
   let searchedWord = document.getElementById('searchText').value;
   let i = 0;
   let counter = 0;


   for (let line of list) {
      document.querySelectorAll('ul li')[i].setAttribute('style', 'font-weight: normal;text-decoration: none;');

      let result = line.textContent.includes(searchedWord)

      if (result === true) {
         counter++;
         document.querySelectorAll('ul li')[i].setAttribute('style', 'font-weight: bold;text-decoration: underline;')
      }
      i++
   }
   document.getElementById('result').textContent = `${counter} matches found`

}