import "../css/App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import * as BooksAPI from "../utils/BooksAPI";
import BookShelves from "../components/BookShelves";
import SearchBooks from "../components/SearchBooks";
import PageNotFound from "../components/PageNotFound";

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
        path="/"
        element={
          <BookShelves books={books} updateBookShelf={updateBookShelf} />
        }
      />
      <Route
        path="/search"
        element={
          <SearchBooks books={books} updateBookShelf={updateBookShelf} />
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default App;
