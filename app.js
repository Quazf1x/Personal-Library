const bookGrid = document.querySelector('#grid-wrapper');
const addBookBtn = document.querySelector('#add-book-button');
const addBookWindow = document.querySelector('.add-book-popup');
const overlay = document.querySelector('.overlay');
const closeBookWindowBtn = document.querySelector('#add-book-popup-close');
const addBookToLibraryBtn = document.querySelector('#popup-add-btn');

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

  const bookNameCategory = document.createElement('h2');
  const bookName = document.createElement('p');

  const bookAuthorCategory = document.createElement('h2');
  const bookAuthor = document.createElement('p');

  const bookPagesCategory = document.createElement('h2');
  const bookPages = document.createElement('p');

  const bookStatus = document.createElement('button');

 //Adding classes

  bookCard.classList.add('book-card');
  bookCardDeleteBtn.classList.add('delete-button');
  bookCardDeleteBtn.setAttribute('src','img/close.svg');

  bookNameCategory.classList.add('book-property-name');
  bookName.classList.add('book-property');

  bookAuthorCategory.classList.add('book-property-name');
  bookAuthor.classList.add('book-property');

  bookPagesCategory.classList.add('book-property-name');
  bookPages.classList.add('book-property');

  bookStatus.classList.add('book-status');

  //Filling the elements

  bookNameCategory.textContent = 'Name';
  bookName.textContent = book.name;
  bookAuthorCategory.textContent = 'Author';
  bookAuthor.textContent = book.author;
  bookPagesCategory.textContent = 'Pages';
  bookPages.textContent = book.pagesCount;


  if (book.readStatus) {
    bookStatus.textContent = 'Read';
    bookCard.classList.add('book-read');
  } else {
    bookStatus.textContent = 'Not read';
  }

  //Adding elements to DOM
  bookCard.append(
    bookCardDeleteBtn,
    bookNameCategory,
    bookName,
    bookAuthorCategory,
    bookAuthor,
    bookPagesCategory,
    bookPages,
    bookStatus);
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
  console.log(userLibrary);
  createBookCard(newBook);
  closeBookWindow();
})