class Book {
	constructor(title, author, year) {
		this.title = title
		this.author = author
		this.year = year
	}

	get title() {
		return this._title
	}
	set title(value) {
		if (typeof value !== 'string' || value.trim() === '') {
			throw new Error('Назва книги має бути непорожнім рядком')
		}
		this._title = value.trim()
	}

	get author() {
		return this._author
	}
	set author(value) {
		if (typeof value !== 'string' || value.trim() === '') {
			throw new Error('Автор має бути непорожнім рядком')
		}
		this._author = value.trim()
	}

	get year() {
		return this._year
	}
	set year(value) {
		if (typeof value !== 'number' || value <= 0) {
			throw new Error('Рік має бути додатним числом')
		}
		this._year = value
	}

	printInfo() {
		console.log(`Book: "${this.title}" by ${this.author}, published in ${this.year}`)
	}

	static findOldestBook(books) {
		if (!Array.isArray(books) || books.length === 0) {
			throw new Error('Передайте масив книг')
		}

		return books.reduce((oldest, current) =>
			current.year < oldest.year ? current : oldest
		)
	}
}

module.exports = Book
