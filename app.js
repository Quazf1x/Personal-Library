const bookGrid = document.querySelector('#grid-wrapper');
const addBookBtn = document.querySelector('#add-book-button');
const addBookWindow = document.querySelector('.add-book-popup');
const overlay = document.querySelector('.overlay');
const closeBookWindowBtn = document.querySelector('#add-book-popup-close');
const addBookToLibraryBtn = document.querySelector('#popup-add-btn');
const windowForm = document.querySelector('.add-book-popup');

let userLibrary = [];

class Book { // The book constructor
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

const addBookToLibrary = (book) => { //add book to the library object array
  userLibrary.push(book);
}

const openBookWindow = () => { // opens the modal window
  overlay.classList.add('popup-active');
  addBookWindow.classList.add('popup-active');
  windowForm.reset();
}

const closeBookWindow = () => { // closes the modal window
  overlay.classList.remove('popup-active');
  addBookWindow.classList.remove('popup-active');
}

const getBookFromInput = () => { // collect values from user input
  let name = document.querySelector('#name-input').value;
  let author = document.querySelector('#author-input').value;
  let pagesCount = document.querySelector('#pages-input').value;
  let status = document.querySelector('#read-status').checked;

  return new Book(name, author, pagesCount, status);
}

const submitBook = () => {  // function that fires after the submit button is pressed
  const newBook = getBookFromInput();
  addBookToLibrary(newBook);
  createBookCard(newBook, (userLibrary.length - 1));
  closeBookWindow();
}

const findBook = (name, array) => { //find the book by it's name
  for (book of array) {
    if (book.name === name)
      return array.indexOf(book);
  }
}

const deleteBook = (currentBook) => { //deletes the found book from library array
  userLibrary.splice(currentBook, 1);
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
  bookCardDeleteBtn.setAttribute('src', 'img/close.svg');

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

  bookCardDeleteBtn.addEventListener('click', (e) => { //removes the book from DOM and Library
    deleteBook(findBook(book.name, userLibrary));
    e.target.parentNode.remove();
  });

  bookStatus.addEventListener('click', (e) => { // toggle the read-status for the selected book
    book.readStatus = !book.readStatus;

    const currentBook = e.target.parentNode.parentNode;
    bookStatus.classList.toggle('status-read');
    currentBook.classList.toggle('book-read');
    if (currentBook.classList.contains('book-read'))
      bookStatus.innerHTML = 'Read';

    else
      bookStatus.innerHTML = 'Not Read';
  });
}

addBookBtn.addEventListener('click', () => {
  openBookWindow();
})

closeBookWindowBtn.addEventListener('click', () => {
  closeBookWindow();
})


