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

function Book(title, author, pages, isRead){
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

        bookCard.append(bookTitle, bookAuthor, bookPages);
        bookContainer.append(bookCard);
    }
}


const newBook = document.querySelector('#add-book');
const newBookDialog = document.querySelector('#add-book-dialog');

newBook.addEventListener('click', ()=>{
    newBookDialog.showModal();
})

displayBooks();