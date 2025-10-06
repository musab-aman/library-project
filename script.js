const { createElement } = require("react");

const myLibrary = [];


function Book(title, author, pages, read) {
	this.title = title;
    this.id = crypto.randomUUID();
	this.author = author;
	this.pages = pages;
	this.read = read;
	
}

const book1 = new Book("The titanic", "tony stark", 222, true);
myLibrary.push(book1);
const book2 = new Book("Math", "devil", 2000, false);
myLibrary.push(book2);



function addBookToLibrary(title, author, pages, read) {
    const book = new book(title, author, pages, read);
	myLibrary.push(book);


}
myLibrary.forEach(element => {
	const div = document.createElement("div");
	document.body.append(div);
	div.className = 'book';
	const p = document.createElement('p');
	p.textContent = `title: ${element.title}`;
	div.appendChild(p);
	const s = document.createElement('p');
	s.textContent = `author: ${element.author}`;
	div.appendChild(s);
	const v = document.createElement('p');
	v.textContent = `pages: ${element.pages}`;
	div.appendChild(v);
	const r = document.createElement('p');
	r.textContent = `read: ${element.read}`;
	div.appendChild(r);

});


