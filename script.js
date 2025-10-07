

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

function removeBook(id) {
    const books = document.querySelectorAll('.book');
    books.forEach(book => {
        if (book.dataset.id === id) {
            book.remove();
        }
    });

    const index = myLibrary.findIndex(book => book.id === id);
    if (index !== -1) myLibrary.splice(index, 1);
}

function toggle(id) {
	const book = myLibrary.find(item => item.id === id);
	if (book.read === true) {
		book.read = false;
	}else{
		book.read = true;
	}
}

const library = document.querySelector('.library');

function displayBook(element) {
    const div = document.createElement("div");
    library.append(div);
	div.className = 'book';
	div.dataset.id = element.id;
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
	const read = document.createElement('button');
	read.textContent = 'read';
	read.className = 'read';
	read.dataset.id = element.id;
	div.appendChild(read);
	read.addEventListener('click', () => {
		toggle(element.id);
		r.textContent = `read: ${myLibrary.find(item => item.id === element.id).read}`;
	})
	const del = document.createElement('button');
	del.textContent = 'delete';
	del.className = 'delete';
	del.dataset.id = element.id;
	div.appendChild(del);
	del.addEventListener('click', () => {
		removeBook(element.id);
	})
	

}






function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
	myLibrary.push(book);


}
myLibrary.forEach(displayBook);

const mydial = document.querySelector('.my-dialog');
const add = document.querySelector('.add');
const close = document.querySelector('.close');

add.addEventListener('click', () => {
	mydial.showModal();
})
close.addEventListener('click', () => {
    mydial.close();
});

const form = document.querySelector('form'); 
const submit = document.querySelector('.submit'); 

submit.addEventListener('click', (e) => {
	e.preventDefault(); 
	
	
	const title = form.querySelector('#title').value;
	const author = form.querySelector('#author').value;
	const pages = form.querySelector('#pages').value;
	const read = form.querySelector('#read').checked;
	
	
	addBookToLibrary(title, author, pages, read);
	
	
	displayBook(myLibrary[myLibrary.length - 1]);

	mydial.close();

	
	form.reset();
});



