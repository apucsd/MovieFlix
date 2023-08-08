import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar mt-3 navbar-expand-lg py-3 bg-blur">
      <div className="container-fluid">
        <Link className=" glow-text" to="/">
          MovieFliix
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li className="nav-item f">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item f">
              <Link className="nav-link" to="/">
                Genres
              </Link>
            </li>
            <li className="nav-item f">
              <Link className="nav-link" to="/">
                About
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn bg-blur" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
