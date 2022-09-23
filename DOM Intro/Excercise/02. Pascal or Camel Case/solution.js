function solve() {
  let input = document.getElementById('text').value;
  let currentCase = document.getElementById('naming-convention').value;
  input = input.toLowerCase()
  let result = input.split(' ');
  let finalResult = [];
  let checkedWord = ''
  let checkedWordFinal = ''

  switch (currentCase) {
    case 'Camel Case':
      finalResult.push(result[0])
      for (let i = 1; i < result.length; i++) {
        checkedWord = result[i];
        checkedWordFinal = checkedWord.charAt(0).toUpperCase() + checkedWord.slice(1);
        finalResult.push(checkedWordFinal)
      }
      result.join('')
      break;
    case 'Pascal Case':
      for (let i of result) {
        checkedWord = i;
        checkedWordFinal = checkedWord.charAt(0).toUpperCase() + checkedWord.slice(1);
        finalResult.push(checkedWordFinal)
      }
      result.join('')
      break;
    default:
      finalResult = 'Error!'
      document.getElementById('result').textContent = finalResult;
      break;
  }

  if (currentCase === 'Camel Case' || currentCase === 'Pascal Case') {
    document.getElementById('result').textContent = finalResult.join('')
  }
}