import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

const BookShelves = ({ books, updateBookShelf }) => {
  const shelfTypesEnum = [
    { type: "currentlyReading", title: "Currently Reading" },
    { type: "wantToRead", title: "Want to Read" },
    { type: "read", title: "Read" },
  ];

  return (
    <div>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {shelfTypesEnum.map((shelf, index) => {
            const shelfBooks = books.filter(
              (book) => book.shelf === shelf.type
            );
            return (
              <div key={index} className="bookshelf">
                <h2 className="bookshelf-title">{shelf.title}</h2>
                <div className="bookshelf-books">
                  <BookShelf
                    books={shelfBooks}
                    updateBookShelf={updateBookShelf}
                  ></BookShelf>
                </div>
              </div>
            );
          })}
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    </div>
  );
};

BookShelves.prototype = {
  books: PropTypes.array.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
};

export default BookShelves;
