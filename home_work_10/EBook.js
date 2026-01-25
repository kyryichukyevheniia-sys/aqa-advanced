const Book = require('./Book')

class EBook extends Book {
	constructor(title, author, year, fileFormat) {
		super(title, author, year)
		this.fileFormat = fileFormat
	}

	get fileFormat() {
		return this._fileFormat
	}

	set fileFormat(value) {
		const allowedFormats = ['pdf', 'epub', 'mobi', 'fb2']
		if (typeof value !== 'string' || !allowedFormats.includes(value.toLowerCase())) {
			throw new Error(`Недопустимий формат. Можливі: ${allowedFormats.join(', ')}`)
		}
		this._fileFormat = value.toLowerCase()
	}

	printInfo() {
		console.log(
			`E-Book: "${this.title}" by ${this.author}, published in ${this.year}, format: ${this.fileFormat}`
		)
	}
	static fromBook(book, format) {
		if (!(book instanceof Book)) {
			throw new Error('Переданий об’єкт не є екземпляром класу Book')
		}
		return new EBook(book.title, book.author, book.year, format)
	}
}

module.exports = EBook
