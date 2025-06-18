import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import AllBooks from "./pages/AllBooks";
import AddBook from "./pages/AddBook";
import "bootstrap/dist/css/bootstrap.min.css";
import { BookProvider } from "./contexts/BookContext";
export default function App() {
  return (
    <BookProvider>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<AllBooks />} />
          <Route path="/addBook" element={<AddBook />} />
        </Routes>
      </Router>
    </BookProvider>
  );
}
