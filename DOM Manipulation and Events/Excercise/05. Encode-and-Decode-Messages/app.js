function encodeAndDecodeMessages() {
    let buttonEncode = document.querySelectorAll('button')[0];
    let buttonDecode = document.querySelectorAll('button')[1];


    buttonEncode.addEventListener('click', encode);
    buttonDecode.addEventListener('click', decode);

    function encode(event) {
        let sender = document.querySelectorAll('div textarea')[0].value;
        let senderArray = sender.split('');
        let encodedArray = []
        for (let char of senderArray) {
            let resultASCII = char.charCodeAt(0);
            let resultChar = String.fromCharCode(Number(resultASCII) + 1)
            encodedArray.push(resultChar)
        }
        document.querySelectorAll('div textarea')[1].textContent = encodedArray.join('');
        document.querySelectorAll('div textarea')[0].value = "";
    }


    function decode(event) {
        let receiver = document.querySelectorAll('div textarea')[1].textContent;
        let receiverArray = receiver.split('')
        let decodedArray = [];

        for (let char of receiverArray) {
            let resultASCII = char.charCodeAt(0);
            let resultChar = String.fromCharCode(Number(resultASCII) - 1)
            decodedArray.push(resultChar)
        }
        document.querySelectorAll('div textarea')[1].textContent = decodedArray.join('');
    }
}