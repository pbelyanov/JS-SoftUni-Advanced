window.addEventListener("load", solve);

function solve() {
  let publishButton = document.getElementById('publish-btn');
  publishButton.addEventListener('click', publish);
  let clearButton = document.getElementById('clear-btn');
  clearButton.addEventListener('click', clear)

  function publish(event) {
    event.preventDefault();

    let title = document.getElementById("post-title").value;
    let category = document.getElementById("post-category").value;
    let content = document.getElementById("post-content").value;

    if (title === '' || category === '' || content === '')
      return;
    let ul = document.getElementById('review-list')
    let li = document.createElement('li');
    li.classList.add('rpost');
    ul.appendChild(li)

    let article = document.createElement('article');
    let h4 = document.createElement('h4');
    h4.textContent = title;
    let p1 = document.createElement('p');
    p1.textContent = `Category: ${category}`;
    let p2 = document.createElement('p');
    p2.textContent = `Content: ${content}`;

    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);


    let buttonEdit = document.createElement('button');
    buttonEdit.textContent = 'Edit'
    let buttonApprove = document.createElement('button');
    buttonApprove.textContent = 'Approve'



    li.appendChild(article);
    li.appendChild(buttonEdit);
    li.appendChild(buttonApprove);


    buttonEdit.setAttribute('class', 'action-btn edit')
    buttonApprove.setAttribute('class', 'action-btn approve')

    document.getElementById("post-title").value = '';
    document.getElementById("post-category").value = '';
    document.getElementById("post-content").value = '';


    buttonEdit.addEventListener('click', edit);
    buttonApprove.addEventListener('click', approve)

    function edit(e) {
      document.getElementById('post-title').value = document.getElementsByTagName('h4')[0].textContent;
      document.getElementById('post-category').value = document.getElementsByTagName('p')[0].textContent.replace('Category: ', '');
      document.getElementById('post-content').value = document.getElementsByTagName('p')[1].textContent.replace('Content: ', '');

      e.currentTarget.parentNode.remove();

    }

    function approve(e) {
      e.preventDefault();
      let article = e.currentTarget.parentNode.querySelector('article');
      let clone = article.cloneNode(true);

      let li = document.createElement('li');
      li.classList.add('rpost');
      let ul = document.getElementById('published-list')
      ul.appendChild(li);
      li.appendChild(clone);
      let liToRemove = e.currentTarget.parentNode.remove();
    }
  }

  function clear(event) {
    event.preventDefault();
    let target = document.getElementById('published-list');
    target.innerHTML = '';
  }

}