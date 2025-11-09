const Book = require(`./Book.js`);

class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this.fileFormat = fileFormat;
    }
    get fileFormat() {
        return this._fileFormat;
    }
    set fileFormat(format) {
        if (format !== "mobi") {
            console.log(`Invalid format`);
            return;
        }
        this._fileFormat = format;
    }
    printInfo() {
        super.printInfo();
        console.log(`It has format ${this.fileFormat}`);
    }
}

console.log();
const ebook = new EBook("IT", "Stephen King", 1986, "mobi");
ebook.printInfo();