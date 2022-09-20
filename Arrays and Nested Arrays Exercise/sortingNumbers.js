function sortingNumbers(list) {
    list.sort((a, b) => a - b);
    let smallArray = [];
    let bigArray = [];

    // for (let i = 0; i < list.length; i++) {
    //     smallArray.push(list[0]);
    //     list.shift();
    // }

    smallArray = list.splice(list.length / 2);

    for (let i = 0; i < smallArray.length; i++) {
        bigArray.push(list[i], smallArray[list.length - 1 - i]);
    }

    console.log(bigArray);


}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);