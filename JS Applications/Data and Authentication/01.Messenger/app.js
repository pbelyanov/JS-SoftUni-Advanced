function attachEvents() {
    let buttonSend = document.getElementById('submit');
    let buttonRefresh = document.getElementById('refresh');
    buttonSend.addEventListener('click', sendMessage);
    buttonRefresh.addEventListener('click', refreshMessages);

    async function sendMessage(event) {
        let data = {};

        data.author = document.getElementsByTagName('input')[0].value;
        data.content = document.getElementsByTagName('input')[1].value;

        fetch('http://localhost:3030/jsonstore/messenger', {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        document.getElementsByTagName('input')[0].value = ''
        document.getElementsByTagName('input')[1].value = ''
    }

    async function refreshMessages(event) {
        let response = await fetch('http://localhost:3030/jsonstore/messenger');
        let data = await response.json();
        let result = []
        console.log(data)
        for (let row in data) {
            result.push(`${data[row].author}: ${data[row].content}`)

        }
        document.getElementById('messages').value = result.join('\n')
    }
}

attachEvents();