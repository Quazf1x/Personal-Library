const addBookBtn = document.querySelector('#add-book-button');


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

