function solve() {
  let sentencesArray = document.getElementById('input').value.split('.');
  let discardedArray = sentencesArray.pop();
  let countSentences = sentencesArray.length;
  let neededParagraphs = Math.ceil(countSentences / 3);
  let finalArray = [];

  for (let i = 0; i < sentencesArray.length; i += 3) {
    finalArray.push(`${sentencesArray[i]}.${sentencesArray[i + 1]}.${sentencesArray[i + 2]}.`)
  }

  for (let i = 0; i < neededParagraphs; i++) {
    const para = document.createElement("p");
    let theDiv = document.getElementById('output')
    let content = document.createTextNode(`${finalArray[i]}`)
    para.appendChild(content);
    theDiv.appendChild(para);
    // document.getElementById('output').textContent += `<p> ${finalArray[i]} </p>`
  }
}