class Stringer {
    constructor(string, length) {
        this.string = string;
        this.length = Number(length);
        this.innerString = string;
        this.innerLength = length;
    }
    increase(input) {
        this.length += Number(input)
    }
    decrease(input) {
        if (this.length - input < 0) {
            this.length = 0;
        } else {
            this.length -= input
        }
    }
    toString() {
        let array = this.string.split('');
        let diff = this.innerLength - this.length;
        if (this.innerString.length <= this.length) {
            return array.join('')
        } else {
            array.splice(this.length, diff)
            return array.join('') + `...`
        }

    }

}
let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test