// 1. books array with at least three objects
const books = [
  { title: 'The Hobbit', authorName: 'J.R.R. Tolkien', releaseYear: 1937 },
  { title: '1984', authorName: 'George Orwell', releaseYear: 1949 },
  {
    title: 'To Kill a Mockingbird',
    authorName: 'Harper Lee',
    releaseYear: 1960,
  },
  { title: 'Fahrenheit 451', authorName: 'Ray Bradbury', releaseYear: 1953 },
];

// 2. sortByYear callback function
function sortByYear(bookA, bookB) {
  if (bookA.releaseYear < bookB.releaseYear) {
    return -1;
  } else if (bookA.releaseYear > bookB.releaseYear) {
    return 1;
  } else {
    return 0;
  }
}

// 3. Filter out books written after 1950
const filteredBooks = books.filter((book) => book.releaseYear <= 1950);

// 4. Sort filteredBooks in ascending order by year
filteredBooks.sort(sortByYear);

// For checking:
console.log('Filtered & Sorted Books:', filteredBooks);
