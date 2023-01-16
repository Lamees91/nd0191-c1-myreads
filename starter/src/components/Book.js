import PropTypes from "prop-types";
import BookShelfChanger from "./BookShelfChanger";
const Book = ({ book, books, updateBookShelf }) => {
  const title = book.title ? book.title : "No title";

  let currentShelf = books.find((b) => b.id === book.id)
    ? books.find((b) => b.id === book.id).shelf
    : "none";

  const coverURL =
    book.imageLinks && book.imageLinks.thumbnail
      ? book.imageLinks.thumbnail
      : "";
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 174,
              backgroundImage: `url(${coverURL})`,
            }}
          ></div>
          <BookShelfChanger
            book={book}
            bookShelf={currentShelf}
            updateBookShelf={updateBookShelf}
          ></BookShelfChanger>
        </div>
        <div className="book-title">{title}</div>
        {book.authors &&
          book.authors.map((author, index) => (
            <div key={index} className="book-authors">
              {author}
            </div>
          ))}
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
};

export default Book;
