import { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "../components/Pagination";

function Books() {
  let [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(5);
  console.log(currentPage);

  useEffect(() => {
    axios
      .get("https://fakerapi.it/api/v1/books?_quantity=50")
      .then((response) => {
        setBooks(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Get current books
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (!books.length) {
    return <h1>Searching...</h1>;
  } else {
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Description</th>
              <th>ISBN</th>
              <th>Cover</th>
              <th>Published</th>
              <th>Publisher</th>
            </tr>
          </thead>
          <tbody>
            {currentBooks.map((book, index) => {
              return (
                <tr key={index}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.genre}</td>
                  <td>{book.description}</td>
                  <td>{book.isbn}</td>
                  <td>
                    <img
                      alt="cover"
                      src={book.image}
                      width="640"
                      height="480"
                    />
                  </td>
                  <td>{book.published}</td>
                  <td>{book.publisher}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination
          perPage={booksPerPage}
          total={books.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </>
    );
  }
}

export default Books;
