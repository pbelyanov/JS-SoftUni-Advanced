// const {
//     playingCards
// } = require('./playingCards');

function deckOfCards(input) {

    function playingCards(face, suit) {
        let validFace = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let validSuit = ['S', 'H', 'D', 'C']

        if (validFace.includes(face) && validSuit.includes(suit)) {
            switch (suit) {
                case 'S':
                    return `${face}\u2660`;
                case 'H':
                    return `${face}\u2665`;
                case 'D':
                    return `${face}\u2666`;
                case 'C':
                    return `${face}\u2663`;
            }
        } else {
            return `Invalid card`
        }

    }

    let result = []
    for (let row of input) {
        let card = ''
        let newArr = row.split('');
        if (newArr.length === 3) {
            card = playingCards(`${newArr[0]+newArr[1]}`, newArr[2]);
        } else {
            card = playingCards(newArr[0], newArr[1]);
        }

        if (card === 'Invalid card') {
            result = `Invalid Card: ${row}`
            break;
        }

        result.push(card);
    }

    if (!Array.isArray(result)) {
        console.log(result)
    } else {
        console.log(result.join(' '))
    }

}

deckOfCards(['5S', '3D', 'QD', '1C'])