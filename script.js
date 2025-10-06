

const myLibrary = [];



function Book(title, author, pages, read) {
	this.title = title;
	this.id = Date.now().toString() + Math.random().toString(36).substring(2, 9);
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = function() {
		return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read yet'}`;
	};
}


const book1 = new Book("The titanic", "tony stark", 222, true);
myLibrary.push(book1);
const book2 = new Book("Math", "devil", 2000, false);
myLibrary.push(book2);
const book3 = new Book("fiker eske mekabir", "meheretu", 400, true);
myLibrary.push(book3);




function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
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

const mydial = document.querySelector('.my-dialog');
const add = document.querySelector('.add');
const close = document.querySelector('.close');

add.addEventListener('click', () => {
	mydial.showModal();
})
close.addEventListener('click', () => {
    mydial.close();
});


