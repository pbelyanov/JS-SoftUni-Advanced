window.addEventListener("load", solve);

function solve() {
  let buttonPublish = document.getElementById('form-btn');
  buttonPublish.addEventListener('click', publish);

  function publish(event) {
    event.preventDefault();
    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let age = document.getElementById('age').value;
    let storyTitle = document.getElementById('story-title').value;
    let genre = document.getElementById('genre').value;
    let storyText = document.getElementById('story').value;

    if (firstName === '' || lastName === '' || age === '' || storyTitle === '' || storyText === '') return;
    // Append the li
    let ul = document.getElementById('preview-list');
    let li = document.createElement('li');
    li.classList.add('story-info');
    ul.appendChild(li);
    // append the article and buttons inside the li
    let article = document.createElement('article');
    let buttonSave = document.createElement('button');
    buttonSave.classList.add('save-btn');
    buttonSave.textContent = 'Save Story'
    let buttonEdit = document.createElement('button');
    buttonEdit.classList.add('edit-btn');
    buttonEdit.textContent = `Edit Story`;
    let buttonDelete = document.createElement('button');
    buttonDelete.classList.add('delete-btn');
    buttonDelete.textContent = `Delete Story`;

    li.appendChild(article);
    li.appendChild(buttonSave);
    li.appendChild(buttonEdit);
    li.appendChild(buttonDelete);

    //append the info inside the article

    let h4 = document.createElement('h4');
    let pAge = document.createElement('p');
    let pTitle = document.createElement('p');
    let pGenre = document.createElement('p');
    let pText = document.createElement('p');

    h4.textContent = `Name: ${firstName} ${lastName}`;
    pAge.textContent = `Age: ${age}`;
    pTitle.textContent = `Title: ${storyTitle}`;
    pGenre.textContent = `Genre: ${genre}`;
    pText.textContent = `${storyText}`;

    article.appendChild(h4);
    article.appendChild(pAge);
    article.appendChild(pTitle);
    article.appendChild(pGenre);
    article.appendChild(pText);

    // clear the input;

    document.getElementById('first-name').value = '';
    document.getElementById('last-name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('story-title').value = '';
    document.getElementById('genre').value = '';
    document.getElementById('story').value = '';

    document.getElementById('form-btn').disabled = true;

    // set up the buttons
    buttonEdit.addEventListener('click', edit);
    buttonSave.addEventListener('click', save);
    buttonDelete.addEventListener('click', deleteFunction);

    function edit(event) {
      let firstName = h4.textContent.replace('Name: ', '')
      let arrayString = firstName.split(' ')
      document.getElementById('first-name').value = arrayString[0];
      document.getElementById('last-name').value = arrayString[1];
      document.getElementById('age').value = age
      document.getElementById('story-title').value = storyTitle;
      document.getElementById('genre').value = genre;
      document.getElementById('story').value = storyText;

      document.getElementById('form-btn').disabled = false;

      event.currentTarget.parentNode.remove()

    }

    function save(event) {
      let h1 = document.createElement('h1');
      let main = document.getElementById('main');
      main.innerHTML = ''
      h1.textContent = (`Your scary story is saved!`)
      main.appendChild(h1);
    }

    function deleteFunction(event) {
      event.currentTarget.parentNode.remove();
      document.getElementById('form-btn').disabled = false;

    }
  }
}