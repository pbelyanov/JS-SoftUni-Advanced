function solve() {
    let buttonAdd = document.getElementById('add');
    let buttonReset = document.getElementById('reset');

    buttonAdd.addEventListener('click', addToTheList);
    buttonReset.addEventListener('click', reset);

    function addToTheList(event) {
        event.preventDefault();

        let title = document.getElementById('title').value;
        let recipientName = document.getElementById('recipientName').value;
        let message = document.getElementById('message').value;

        if (title === '' || recipientName === '' || message === '') return;

        let h4Title = document.createElement('h4')
        let h4Recipient = document.createElement('h4')
        let span = document.createElement('span');
        let div = document.createElement('div');
        let buttonSend = document.createElement('button');
        let buttonDelete = document.createElement('button');
        let li = document.createElement('li');


        div.setAttribute('id', 'list-action');

        buttonSend.setAttribute('type', 'submit');
        buttonSend.setAttribute('id', 'send');
        buttonSend.textContent = 'Send';

        buttonDelete.setAttribute('type', 'submit');
        buttonDelete.setAttribute('id', 'delete');
        buttonDelete.textContent = 'Delete';

        h4Title.textContent = `Title: ${title}`;
        h4Recipient.textContent = `Recipient Name: ${recipientName}`;
        span.textContent = `${message}`;

        div.appendChild(buttonSend);
        div.appendChild(buttonDelete);

        li.appendChild(h4Title);
        li.appendChild(h4Recipient);
        li.appendChild(span);
        li.appendChild(div);

        document.getElementById('list').appendChild(li)

        // Getting into part 2, sending mails


        buttonSend.addEventListener('click', send);
        buttonDelete.addEventListener('click', deleteMail);

        function send(e) {
            let spanRecipient = document.createElement('span');
            let spanTitle = document.createElement('span');
            let divSent = document.createElement('div');
            let buttonDelete2 = document.createElement('button');
            let li = document.createElement('li');

            buttonDelete2.setAttribute('type', 'submit');
            buttonDelete2.setAttribute('class', 'delete');
            buttonDelete2.textContent = 'Delete';

            divSent.setAttribute('class', 'btn');

            divSent.appendChild(buttonDelete2);

            li.appendChild(spanRecipient);
            li.appendChild(spanTitle);
            li.appendChild(divSent);

            document.getElementsByClassName('sent-list')[0].appendChild(li);

            spanTitle.textContent = `Title: ${e.currentTarget.parentNode.parentNode.getElementsByTagName('h4')[0].textContent.replace('Title: ', '')}`
            spanRecipient.textContent = `To: ${e.currentTarget.parentNode.parentNode.getElementsByTagName('h4')[1].textContent.replace('Recipient Name: ', '')}`

            buttonDelete2.addEventListener('click', deleteSentMail);

            e.currentTarget.parentNode.parentNode.remove();

            function deleteSentMail(e) {
                let span1 = document.createElement('span');
                let span2 = document.createElement('span');
                let li = document.createElement('li');

                span1.textContent = e.currentTarget.parentNode.parentNode.getElementsByTagName('span')[0].textContent;
                span2.textContent = e.currentTarget.parentNode.parentNode.getElementsByTagName('span')[1].textContent;

                li.appendChild(span1);
                li.appendChild(span2);
                document.getElementsByClassName('delete-list')[0].appendChild(li);
                e.currentTarget.parentNode.parentNode.remove();
            }


        }

        function deleteMail(e) {

            if (e.currentTarget.parentNode.parentNode.parentNode.parentNode.getElementsByTagName('h2')[0].textContent === 'Sent Mails') {
                let span1 = document.createElement('span');
                let span2 = document.createElement('span');
                let li = document.createElement('li');

                span1.textContent = e.currentTarget.parentNode.parentNode.getElementsByTagName('span')[0].textContent;
                span2.textContent = e.currentTarget.parentNode.parentNode.getElementsByTagName('span')[1].textContent;

                li.appendChild(span1);
                li.appendChild(span2);
                document.getElementsByClassName('delete-list')[0].appendChild(li);
                e.currentTarget.parentNode.parentNode.remove();
            } else {
                let span1 = document.createElement('span');
                let span2 = document.createElement('span');
                let li = document.createElement('li');

                span1.textContent = `To: ${e.currentTarget.parentNode.parentNode.getElementsByTagName('h4')[1].textContent.replace('Recipient Name: ', '')}`
                span2.textContent = `Title: ${e.currentTarget.parentNode.parentNode.getElementsByTagName('h4')[0].textContent.replace('Title: ', '')}`

                li.appendChild(span1);
                li.appendChild(span2);
                document.getElementsByClassName('delete-list')[0].appendChild(li);
                e.currentTarget.parentNode.parentNode.remove();
            }

        }

    }

    function reset(event) {
        event.preventDefault();
        document.getElementById('title').value = '';
        document.getElementById('recipientName').value = '';
        document.getElementById('message').value = '';
    }
}
solve()