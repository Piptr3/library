const myLibrary = [];

function Book(name, author, year, pageCount, isRead) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.pageCount = pageCount;
    this.isRead = isRead;
}

function addBookToLibary(book) {
    myLibrary.push(book);
}

const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960, 281, true);
const book2 = new Book("1984", "George Orwell", 1949, 328, false);
const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925, 180, true);

addBookToLibary(book1);
addBookToLibary(book2);
addBookToLibary(book3);

myLibrary.forEach(book =>
    console.log(`${book.name} by ${book.author}`)
);


console.log(myLibrary);