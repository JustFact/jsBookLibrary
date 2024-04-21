const myLibrary = [
    {
        title: 'The Hobbit',
        author: 'J. R. R. Tolkien',
        pages: 295,
        isRead: false
    },
    {
        title: 'Jane Eyre',
        author: 'Charlotte Brontë',
        pages: 624,
        isRead: true
    }
];

function Book(title, author, pages, isRead = false){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead

    this.info = function(){
        return (this.name + ' by ' + this.author + ', ' + this.pages + ', ' + this.isRead)
    }
}

function addBookToLibrary(){

}

function displayBooks(){
    const bookContainer = document.querySelector('.book-container');
    let tempBooks = [];
    for(book of myLibrary){
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        
        const bookTitle = document.createElement('div');
        bookTitle.classList.add('title');
        bookTitle.textContent = `Title: ${book.title}`

        const bookAuthor = document.createElement('div');
        bookAuthor.classList.add('author');
        bookAuthor.textContent = `Author: ${book.author}`

        const bookPages = document.createElement('div');
        bookPages.classList.add('pages');
        bookPages.textContent = `Pages: ${book.pages}`

        const deleteButton = document.createElement('div');
        deleteButton.classList.add('delete-button')
        deleteButton.innerHTML = '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>trash-can-outline</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>'

        bookCard.append(bookTitle, bookAuthor, bookPages, deleteButton);
        tempBooks.push(bookCard)
    }
    bookContainer.replaceChildren(...tempBooks);
}


const newBook = document.querySelector('#add-book');
const newBookDialog = document.querySelector('#add-book-dialog');
const submitBook = document.querySelector('.submitBook');

newBook.addEventListener('click', ()=>{
    newBookDialog.showModal();
})

submitBook.addEventListener('click', (e)=>{
    e.preventDefault();
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const pages = document.querySelector('#pages');
    const isBookRead = document.querySelector('input[name=isBookRead]:checked');

    if(title.value === '' || author.value === '' || pages.value === ''){
        newBookDialog.close();
        return;
    }
    const myBook = new Book(title.value, author.value, pages.value, isBookRead.value);
    title.value = '';
    author.value = '';
    pages.value = '';

    myLibrary.unshift(myBook);
    newBookDialog.close();
    displayBooks();
})

displayBooks();