const Book = require('./Book')
const EBook = require('./EBook')

const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 1937)
const book2 = new Book('1984', 'George Orwell', 1949)
const book3 = new Book('It', 'Stephen King', 1986)

book1.printInfo()
book2.printInfo()
book3.printInfo()

const ebook1 = new EBook('The Little Prince', 'Antoine de Saint-Exupéry', 1943, 'pdf')
ebook1.printInfo()


const ebookFromBook = EBook.fromBook(book1, 'epub')
ebookFromBook.printInfo()


const books = [book1, book2, book3, ebook1, ebookFromBook]

const oldestBook = Book.findOldestBook(books)
console.log('The oldest book:')
oldestBook.printInfo()
