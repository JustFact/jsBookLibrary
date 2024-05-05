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
    let index = 0
    for(book of myLibrary){
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.setAttribute('data-index',index)
        
        const bookTitle = document.createElement('div');
        bookTitle.classList.add('title');
        bookTitle.textContent = `Title: ${book.title}`

        const bookAuthor = document.createElement('div');
        bookAuthor.classList.add('author');
        bookAuthor.textContent = `Author: ${book.author}`

        const bookPages = document.createElement('div');
        bookPages.classList.add('pages');
        bookPages.textContent = `Pages: ${book.pages}`

        const readButton = document.createElement('div');
        readButton.classList.add('read-button')
        let readicon = '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>eye-closed</title><path d="M12 17.5C8.2 17.5 4.8 15.4 3.2 12H1C2.7 16.4 7 19.5 12 19.5S21.3 16.4 23 12H20.8C19.2 15.4 15.8 17.5 12 17.5Z" /></svg>'
        if(book.isRead){
            readicon = '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>eye-outline</title><path d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z" /></svg>'
        }
        readButton.innerHTML = readicon;

        const deleteButton = document.createElement('div');
        deleteButton.classList.add('delete-button')
        deleteButton.innerHTML = '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>trash-can-outline</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>'
        deleteButton.setAttribute('data-index',index++);

        bookCard.append(bookTitle, bookAuthor, bookPages, readButton, deleteButton);
        tempBooks.push(bookCard)
    }
    bookContainer.replaceChildren(...tempBooks);
    
    const deleteButtons = document.querySelectorAll('.delete-button');
    
    for(delButton of deleteButtons){
        delButton.addEventListener('click',(e)=>{
            myLibrary.splice(e.currentTarget.dataset.index,1);
            displayBooks();
        },
    )
    }

    const readButtons = document.querySelectorAll('.read-button');
    for(readBtn of readButtons){
        readBtn.addEventListener('click', (e)=>{
            myLibrary[e.currentTarget.parentNode.dataset.index].isRead = !myLibrary[e.currentTarget.parentNode.dataset.index].isRead
            displayBooks();
        })
    }

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
    const isBookRead = document.querySelector('input[name=isBookRead]');

    if(title.value === '' || author.value === '' || pages.value === ''){
        newBookDialog.close();
        return;
    }
    const myBook = new Book(title.value, author.value, pages.value, isBookRead.checked);
    title.value = '';
    author.value = '';
    pages.value = '';

    myLibrary.unshift(myBook);
    newBookDialog.close();
    displayBooks();
})

displayBooks();