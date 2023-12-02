// Accessing DOM Elements
const bookTitle = document.getElementById("book-title");
const bookAuthor = document.getElementById("book-author");
const bookPublicationYear = document.getElementById("book-publication-year");
const addBook = document.getElementById("add-book");

const bookList = document.getElementById("book-list");

// Adding click event to add book button 
addBook.addEventListener('click', () => {
    const bTitle = bookTitle.value;
    const bAuthor = bookAuthor.value;
    const bPublicationYear = bookPublicationYear.value;

    // If input fields are empty
    if(bTitle === '' || bAuthor === '' || bPublicationYear === '') {
        alert("Please enter valid book details.");
        return;
    }
    
    // generate li element on add button click 
    const bookItem = document.createElement('li');
    bookItem.className = "list-group-item d-flex justify-content-between align-items-center";
    bookItem.innerHTML = `<span class="fw-bold">${bTitle}</span> by ${bAuthor}, Year: ${bPublicationYear} <button type="button" class="btn btn-danger" onclick="return this.parentNode.remove()">Remove</button>`;
    bookList.appendChild(bookItem);
    clearField();
})

// Helper Function
function clearField() {
    bookTitle.value = '';
    bookAuthor.value = '';
    bookPublicationYear.value = '';
}
