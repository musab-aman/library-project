const myLibrary = [];


function Book(title, author, pages, read) {
	this.title = title;
    this.id = crypto.randomUUID();
	this.author = author;
	this.pages = pages;
	this.read = read;
	
}

const book1 = new Book("The titanic", "tony stark", 222, true);
const book2 = new Book("Math", "devil", 2000, false);



function addBookToLibrary(title, author, pages, read) {
    const book = new book(title, author, pages, read);
	myLibrary.push(book);


}
myLibrary.forEach(element => {
	
});


