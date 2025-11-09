

class Book {
    constructor(title, author, year) {
        this._title = title;
        this._author = author;
        this._year = year;
    }
    get title() {
        return this._title;
    }
    get author() {
        return this._author;
    }
    get year() {
        return this._year;
    }
    set title(text) {
        if (typeof text !== "string") {
            console.log(`This book isn't ${this._title}`);
            return;
        }
        this._title = text;
    }
    set author(text) {
        if (typeof text !== "string") {
            console.log(`This book isn't ${this._author}`);
            return;
        }
        this._author = text;
    }
    set year(number) {
        if (typeof number !== "number") {
            console.log(`This book isn't ${this._year}`);
            return;
        }
        this._year = number;
    }
    printInfo() {
        console.log(`this book is called ${this._title}`);
        console.log(`it was written by ${this._author}`);
        console.log(`it was published ${this._year}`);
    }
}
const book = new Book("The Hobbit", "J.R.R. Tolkien", 1937);
const bookSecond = new Book("1984", "George Orwell", 1949);
const bookThird = new Book("The Little Prince", "Antoine de Saint-Exupéry", 1943);

book.printInfo();
console.log();
bookSecond.printInfo();
console.log();
bookThird.printInfo();

module.exports = Book;



