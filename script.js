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