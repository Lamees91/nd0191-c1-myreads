import "../css/App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import * as BooksAPI from "../utils/BooksAPI";
import BookShelves from "../components/BookShelves";
import SearchBooks from "../components/SearchBooks";

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getAllBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };

    getAllBooks();
  }, []);

  const updateBookShelf = (book, shelf) => {
    const update = async () => {
      await BooksAPI.update(book, shelf);
      book.shelf = shelf;
      setBooks(books.filter((b) => b.id !== book.id).concat(book));
    };

    update();
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <BookShelves books={books} updateBookShelf={updateBookShelf} />
        }
      />
      <Route
        exact
        path="/search"
        element={
          <SearchBooks books={books} updateBookShelf={updateBookShelf} />
        }
      />
    </Routes>
  );
};

export default App;
