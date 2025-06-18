import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const BookContext = createContext();

const sampleBooks = [
  { id: uuidv4(), title: "The Guide", author: "R. K. Narayan", status: "Read" },
  {
    id: uuidv4(),
    title: "Train to Pakistan",
    author: "Khushwant Singh",
    status: "Unread",
  },
  {
    id: uuidv4(),
    title: "Interpreter of Maladies",
    author: "Jhumpa Lahiri",
    status: "Read",
  },
  {
    id: uuidv4(),
    title: "Midnight's Children",
    author: "Salman Rushdie",
    status: "Unread",
  },
  {
    id: uuidv4(),
    title: "God of Small Things",
    author: "Arundhati Roy",
    status: "Read",
  },
  {
    id: uuidv4(),
    title: "A Suitable Boy",
    author: "Vikram Seth",
    status: "Unread",
  },
  {
    id: uuidv4(),
    title: "The White Tiger",
    author: "Aravind Adiga",
    status: "Read",
  },
  {
    id: uuidv4(),
    title: "In Custody",
    author: "Anita Desai",
    status: "Unread",
  },
  {
    id: uuidv4(),
    title: "Sea of Poppies",
    author: "Amitav Ghosh",
    status: "Read",
  },
  {
    id: uuidv4(),
    title: "Palace of Illusions",
    author: "Chitra Banerjee Divakaruni",
    status: "Unread",
  },
];

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  // Load books from localStorage on mount
  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
    setBooks(storedBooks && storedBooks.length > 0 ? storedBooks : sampleBooks);
  }, []);

  // Persist books to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const addBook = (book) => setBooks((prev) => [...prev, book]);
  const toggleStatus = (id) =>
    setBooks((prev) =>
      prev.map((book) =>
        book.id === id
          ? { ...book, status: book.status === "Read" ? "Unread" : "Read" }
          : book
      )
    );
  const deleteBook = (id) =>
    setBooks((prev) => prev.filter((book) => book.id !== id));

  return (
    <BookContext.Provider value={{ books, addBook, toggleStatus, deleteBook }}>
      {children}
    </BookContext.Provider>
  );
};

export default function useBookContext() {
  return useContext(BookContext);
}
