class List {
    array = [];
    constructor() {
        this.size = this.array.length;
    }
    add(input) {
        this.array.push(input)
        this.array.sort((a, b) => a - b);
        this.size++
    }
    get(input) {
        if (input < 0 || input > this.size) {
            throw new Error
        }
        return this.array[input]

    }
    remove(input) {
        if (input < 0 || input > this.size) {
            throw new Error
        }
        this.size--
        this.array.splice(input, 1)
    }
}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(0));
list.remove(1);
list.add(3)
console.log(list.get(1));
console.log(list)