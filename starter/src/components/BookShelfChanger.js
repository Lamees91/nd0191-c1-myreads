import PropTypes from "prop-types";
const BookShelfChanger = ({ book, bookShelf, updateBookShelf }) => {
  const updateShelf = (e) => {
    updateBookShelf(book, e.target.value);
  };

  return (
    <div className="book-shelf-changer">
      <select onChange={updateShelf} defaultValue={bookShelf}>
        <option disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

BookShelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  bookShelf: PropTypes.string.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
};

export default BookShelfChanger;
