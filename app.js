const addBookBtn = document.querySelector('#add-book-button');
const addBookWindow = document.querySelector('.add-book-popup');
const overlay = document.querySelector('.overlay');
const closeBookWindow = document.querySelector('#add-book-popup-close');

let userLibrary = [];

function Book(name,author,pagesCount,isRead){
  this.name = name;
  this.author = author;
  this.pagesCount = pagesCount;
  if(isRead) this.readStatus = true;
  else this.readStatus = false;
}

function addBookToLibrary(){
} 

addBookBtn.addEventListener('click',()=>{
  overlay.classList.add('popup-active');
  addBookWindow.classList.add('popup-active');
})

closeBookWindow.addEventListener('click',()=>{
  overlay.classList.remove('popup-active');
  addBookWindow.classList.remove('popup-active');
})
