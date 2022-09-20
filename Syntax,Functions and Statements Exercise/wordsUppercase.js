// function wordsUppercase(string) {

//     let newString = string.replace(/[.,;:!?(){}@"'-]/g, ' ');
//     newString = newString.toUpperCase()

//     let newArray = []
//     newArray = newString.split(' ');

//     let finalArray = []

//     for (let i = 0; i < newArray.length; i++) {
//         if (newArray[i].length > 0) {
//             finalArray.push(newArray[i])
//         }
//     }

//     let result = finalArray.join(', ');
//     console.log(result)
// }
// wordsUppercase('Functions in JS can be nested, i.e. hold other functions!');

function wordsUppercase(string) {
    return string.match(/\w+/g).join(', ').toUpperCase();
}
wordsUppercase('Hi, how are you?')


let arr = [1, 2, 3, 4, 5, 6];
let result = 0

for (let i of arr) {
    result += i;
}


console.log(result)