import { NavLink } from "react-router-dom";
export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light mb-4 text-dark">
        <div className="container">
          <NavLink to="/" className="navbar-brand" end>
            Book Palace
          </NavLink>

          <div id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" end className="nav-link">
                  All Books
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/addBook" className="nav-link">
                  Add Book
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
