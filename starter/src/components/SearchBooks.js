import { useState } from "react";
import * as BooksAPI from "../utils/BooksAPI";
import Book from "./Book";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SearchBooks = ({ books, updateBookShelf }) => {
  const [query, setQuery] = useState("");
  const [searchBooksRes, setSearchBooks] = useState([]);
  const [noResFound, setNoResFound] = useState(false);

  const getBooks = (e) => {
    const searchTxt = e.target.value;
    setQuery(searchTxt);
    if (searchTxt) {
      const search = async () => {
        const res = await BooksAPI.search(searchTxt.trim(), 15);
        setSearchBooks(res);
        res.length > 0 ? setNoResFound(false) : setNoResFound(true);
      };
      search();
    } else {
      setSearchBooks([]);
    }
  };
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            value={query}
            onChange={getBooks}
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>

      {searchBooksRes.length > 0 && (
        <div className="search-books-results">
          <ol className="books-grid">
            {searchBooksRes.map((book) => (
              <Book
                key={book.id}
                book={book}
                books={books}
                updateBookShelf={updateBookShelf}
              ></Book>
            ))}
          </ol>
        </div>
      )}

      {noResFound && (
        <div className="search-books-results">
          <h3>No Results Found , Try again</h3>
        </div>
      )}
    </div>
  );
};

Book.propTypes = {
  books: PropTypes.array.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
};

export default SearchBooks;
