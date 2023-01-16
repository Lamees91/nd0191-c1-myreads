import Book from "./Book";
import PropTypes from "prop-types";

const BookShelf = ({ books, updateBookShelf }) => {
  return (
    <ol className="books-grid">
      {books.map((b) => (
        <Book
          key={b.id}
          book={b}
          books={books}
          updateBookShelf={updateBookShelf}
        />
      ))}
    </ol>
  );
};

BookShelf.prototype = {
  books: PropTypes.array.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
};

export default BookShelf;
