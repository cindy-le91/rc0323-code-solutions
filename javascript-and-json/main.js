const books = [
  {
    isbn: 9780333791035,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald'
  },
  {
    isbn: 9780061120084,
    title: 'To Kill A Mockingbird',
    author: 'Harper Lee'
  },
  {
    isbn: 9780141311722,
    title: 'Little Women',
    author: 'Louisa May Alcott'
  }
];
console.log('books: ', books);
console.log('typeof:', typeof books);

console.log('books: ', JSON.stringify(books));
console.log('typeof: ', typeof JSON.stringify(books));

const student = '{ "name": "cindy", "id": "1234" }';
console.log('student:', student);
console.log('typeof: ', typeof student);

const newObject = JSON.parse(student);
console.log('newObject: ', newObject);
console.log('typeof: ', typeof newObject);
