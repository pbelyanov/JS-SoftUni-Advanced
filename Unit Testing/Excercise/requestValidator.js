function requestValidator(input) {

    let validInput = ['method', 'uri', 'version', 'message'];

    for (let k in input) {
        if (!validInput.includes(k)) return `Invalid request header: Invalid ${k}`
    }

    let validMethod = ['GET', 'POST', 'DELETE', 'CONNECT'];
    if (!validMethod.includes(input.method)) return `Invalid request header: Invalid Method`;


    let validURI = new RegExp(/^([a-zA-Z0\.1-9*])$/)
    let arrayURI = (input.uri).split('');
    if (input.uri === '') return 'Invalid request header: Invalid URI'
    for (let row of arrayURI) {
        if (!(validURI.test(row))) return 'Invalid request header: Invalid URI'
    }


    let validVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0']
    if (!validVersion.includes(input.version)) return `Invalid request header: Invalid Version`


    let messageInvalidChars = /[<>'\&]/;
    if (input.message.match(messageInvalidChars)) return 'Invalid request header: Invalid Message'

    console.log(input);

}
console.log(requestValidator({
    method: 'GET',
    uri: '*',
    version: 'HTTP/1.1',
    message: 'asddda'
}));