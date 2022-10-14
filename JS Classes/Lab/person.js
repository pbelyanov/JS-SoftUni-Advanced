class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString() {
        return (`${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`)
    }
}

let p = new Person("Peter", "Marinov", 18, "pesho18@abv.bg");
let str = p.toString();
console.log(str)
const {
    expect
} = require('chai');

describe('test', () => {
    it('should return proper answer', () => {
        let p = new Person("Peter", "Marinov", 18, "pesho18@abv.bg");
        let str = p.toString();

        expect(str).to.be.equal('Peter Marinov (age: 18, email: pesho18@abv.bg)');
    })
})