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
  closeBookWindow();
})