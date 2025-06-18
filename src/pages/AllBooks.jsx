import React, { useState } from "react";

import useBookContext from "../contexts/BookContext";

export default function AllBooks() {
  const { books, toggleStatus, deleteBook } = useBookContext();
  const [filter, setFilter] = useState("All");

  const filteredBooks =
    filter === "All"
      ? books
      : books.filter(
          (book) => book.status === (filter === "Read" ? "Read" : "Unread")
        );

  return (
    <div className="container">
      <h2 className="mb-4">My Library</h2>

      <div className="nav nav-pills mb-4 gap-2">
        {["All", "Read", "Unread"].map((filt) => (
          <button
            key={filt}
            onClick={() => setFilter(filt)}
            className={`nav-link rounded-pill ${
              filter === filt ? "active" : ""
            }`}
          >
            {filt} Books (
            {filt === "All"
              ? books.length
              : books.filter((book) => book.status === filt).length}
            )
          </button>
        ))}
      </div>

      {filteredBooks.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <div className="row">
          {filteredBooks.map((book) => (
            <div className="col-md-4 mb-3" key={book.id}>
              <div className="card h-100">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{book.title}</h5>
                  <h6 className="card-text mb-2">{book.author}</h6>
                  <p className="card-text">Status: {book.status}</p>
                  <div>
                    <button
                      onClick={() => toggleStatus(book.id)}
                      className="btn btn-sm btn-secondary me-2"
                    >
                      Mark as {book.status === "Read" ? "Unread" : "Read"}
                    </button>
                    <button
                      onClick={() => deleteBook(book.id)}
                      className="btn btn-sm btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
