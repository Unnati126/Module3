const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
  ];

  
function getBookTitle(bookId) {      //using getBookTitle() function to get the title of a book
    const book = books.find(book => book.id === bookId);
    return book ? book.title : 'Book not found';
}
console.log(getBookTitle(3));
console.log(getBookTitle(6));

console.log('\n')

function getOldBooks() {      //using getOldBooks() function
    return books.filter(book => book.year < 1950);
}
console.log(getOldBooks());

console.log('\n')

function addGenre() {   //using addGenre() function to add a genre to each book
    return books.map(book => ({ ...book, genre: 'classic' }));
}
console.log(addGenre());

console.log('\n')

function getTitles(authorInitial) {   //using getTitles() function to get the titles of books by an author with a specific initial
    return books
      .filter(book => book.author.startsWith(authorInitial))
      .map(book => book.title);
}
console.log(getTitles('H')); 

console.log('\n')

function latestBook() {
    let latest = books[0]; // Assume the first book is the latest
    books.forEach(book => {
      if (book.year > latest.year) {
        latest = book;
      }
    });
    return latest;
}  
console.log(latestBook()); 