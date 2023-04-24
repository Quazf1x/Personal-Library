const bookGrid = document.querySelector('#grid-wrapper');
const addBookBtn = document.querySelector('#add-book-button');
const addBookWindow = document.querySelector('.add-book-popup');
const overlay = document.querySelector('.overlay');
const closeBookWindowBtn = document.querySelector('#add-book-popup-close');
const addBookToLibraryBtn = document.querySelector('#popup-add-btn');
const windowForm= document.querySelector('.add-book-popup');

let userLibrary = [];

class Book{
  constructor(
    name = 'Unknown',
    author = 'Unknown',
    pagesCount = 0,
    isRead = false
    ) {
    this.name = name;
    this.author = author;
    this.pagesCount = pagesCount;
    this.readStatus = isRead;
  }
}

const addBookToLibrary = (book) => {
  userLibrary.push(book);
} 

const openBookWindow = () => {
  overlay.classList.add('popup-active');
  addBookWindow.classList.add('popup-active');
  windowForm.reset();  
}

const closeBookWindow = () => {
  overlay.classList.remove('popup-active');
  addBookWindow.classList.remove('popup-active');
}

const getBookFromInput = () =>{
  let name = document.querySelector('#name-input').value;
  let author = document.querySelector('#author-input').value;
  let pagesCount = document.querySelector('#pages-input').value;
  let status = document.querySelector('#read-status').checked;

  return new Book(name, author, pagesCount, status);
}

  const createBookCard = (book) => {

  //Creating elements

  const bookCard = document.createElement('div');
  const bookCardDeleteBtn = document.createElement('img');

  const bookName = document.createElement('span');

  const bookAuthor = document.createElement('span');

  const bookPages = document.createElement('span');

  const bookStatusWrapper = document.createElement('div');
  const bookStatus = document.createElement('button');

 //Adding classes

  bookCard.classList.add('book-card');
  bookCardDeleteBtn.classList.add('delete-button');
  bookCardDeleteBtn.setAttribute('src','img/close.svg');

  bookName.classList.add('book-property');
  bookAuthor.classList.add('book-property');
  bookPages.classList.add('book-property');

  bookStatus.classList.add('book-status');

  //Filling the elements

  
  bookName.textContent = `Name: ${book.name}`;
  
  bookAuthor.textContent = `Author: ${book.author}`;
  
  bookPages.textContent = `Pages: ${book.pagesCount}`;


  if (book.readStatus) {
    bookStatus.textContent = 'Read';
    bookCard.classList.add('book-read');
    bookStatus.classList.add('status-read');
  } else {
    bookStatus.textContent = 'Not read';
  }

  //Adding elements to DOM

  bookStatusWrapper.appendChild(bookStatus);

  bookCard.append(
    bookCardDeleteBtn,
    bookName,
    bookAuthor,
    bookPages,
    bookStatusWrapper);
  bookGrid.appendChild(bookCard);
} 

addBookBtn.addEventListener('click',()=>{
  openBookWindow();
})

closeBookWindowBtn.addEventListener('click',()=>{
  closeBookWindow();
})

addBookToLibraryBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  const newBook = getBookFromInput();
  addBookToLibrary(newBook);
  createBookCard(newBook);
  closeBookWindow();
})