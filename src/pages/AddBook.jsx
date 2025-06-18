import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useBookContext from "../contexts/BookContext";
import { v4 as uuidv4 } from "uuid";
export default function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("Unread");
  const { addBook } = useBookContext();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook({ id: uuidv4(), title, author, status });
    setMessage("Book added successfully!");

    // Optionally wait a bit before navigating
    setTimeout(() => navigate("/"), 1000);
  };

  return (
    <div className="container">
      <h2 className="mb-4">Add New Book</h2>
      {message && (
        <div className="alert alert-success" role="alert">
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            className="form-control"
            placeholder="Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Author</label>
          <input
            className="form-control"
            placeholder="Author Name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="form-label">Status</label>
          <select
            className="form-select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Unread">Unread</option>
            <option value="Read">Read</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Book
        </button>
      </form>
    </div>
  );
}
