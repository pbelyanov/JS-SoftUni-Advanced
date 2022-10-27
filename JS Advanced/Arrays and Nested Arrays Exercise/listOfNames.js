function listOfNames(list) {
    list.sort((a, b) => a.localeCompare(b));
    let num = 1;

    for (let result of list) {
        console.log(`${num}.${result}`);
        num++;
    }
}
listOfNames(["John", "Bob", "Christina", "Ema", 'john']);