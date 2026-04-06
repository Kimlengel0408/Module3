const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
];

function addGenre() {
    const book = books.map(bookie => bookie.genre = "classic");
}

function getOldBooks() {
    const book = books.filter(bookie => bookie.year < 1950);
    console.log(book);
}

function getBookTitle(bookId) {
    const book = books.find(bookie => bookie.id === bookId);
    console.log(book);
}

function getTitles(authorInitial) {
    const book = books.filter(bookie => bookie.author[0] === authorInitial ).map(bookie => bookie.title);
    console.log(book);
}

// function latestBook() {
//     const book = books.find(bookie => bookie.year);
// }

addGenre();
getBookTitle(3);
getOldBooks();
getTitles("A");
