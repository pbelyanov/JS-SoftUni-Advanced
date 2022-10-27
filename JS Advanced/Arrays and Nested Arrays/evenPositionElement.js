function evenPositionElement(input) {
    // let newArray = []
    // for (let num of input) {
    //     if (input[num % 2 === 0]) {
    //         newArray.push(input[num])
    //     }
    // }

    // console.log(newArray.join(' '))


    let newArray = [];

    for (let i = 0; i < input.length; i += 2) {
        newArray.push(input[i]);
    }

    console.log(newArray.join(' '))


}
evenPositionElement(['20', '30', '40', '50', '60'])