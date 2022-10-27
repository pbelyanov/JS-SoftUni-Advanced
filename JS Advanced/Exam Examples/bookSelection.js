const bookSelection = {
    isGenreSuitable(genre, age) {
        if (age <= 12 && (genre === "Thriller" || genre === "Horror")) {
            return `Books with ${genre} genre are not suitable for kids at ${age} age`;
        } else {
            return `Those books are suitable`;
        }
    },
    isItAffordable(price, budget) {
        if (typeof price !== "number" || typeof budget !== "number") {
            throw new Error("Invalid input");
        }

        let result = budget - price;

        if (result < 0) {
            return "You don't have enough money";
        } else {
            return `Book bought. You have ${result}$ left`;
        }
    },
    suitableTitles(array, wantedGenre) {
        let resultArr = [];

        if (!Array.isArray(array) || typeof wantedGenre !== "string") {
            throw new Error("Invalid input");
        }
        array.map((obj) => {
            if (obj.genre === wantedGenre) {
                resultArr.push(obj.title);
            }
        });
        return resultArr;
    },
};

const {
    expect
} = require('chai');

describe("bookSelection …", function () {
    describe("isGenreSuitable", function () {
        it("Should return proper result", function () {
            expect(bookSelection.isGenreSuitable('Thriller', 10)).to.be.equal(`Books with Thriller genre are not suitable for kids at 10 age`);
            expect(bookSelection.isGenreSuitable('Thriller', 15)).to.be.equal('Those books are suitable');
        });
    });
    describe("isItAffordable", function () {
        it("Should return proper result", function () {
            expect(bookSelection.isItAffordable(20, 30)).to.be.equal('Book bought. You have 10$ left');
            expect(bookSelection.isItAffordable(20, 10)).to.be.equal("You don't have enough money");
            expect(bookSelection.isItAffordable(20, 20)).to.be.equal('Book bought. You have 0$ left');
        });
        it('Should throw Error on wrong input', () => {
            expect(bookSelection.isItAffordable(20, '30')).to.throw(new Error('Invalid input'))
            expect(bookSelection.isItAffordable([20], 30)).to.throw(new Error('Invalid input'))
        })
    });
    describe("suitableTitles", function () {
        it("Should return proper result", function () {
            expect(bookSelection.suitableTitles([{
                title: "The Da Vinci Code",
                genre: "Thriller"
            }, {
                title: "Cerry",
                genre: "Thriller"
            }], 'Thriller')).to.be.eql(['The Da Vinci Code', 'Cerry'])
        });
        it('Should receive proper input', () => {
            expect(bookSelection.suitableTitles([{
                title: "The Da Vinci Code",
                genre: "Thriller"
            }], ['Thriller'])).to.throw(new Error('Invalid input'));
            expect(bookSelection.suitableTitles({
                title: "Carry",
                genre: "Horror"
            }, 'Thriller')).to.throw(new Error('Invalid input'));
        })
    });
});