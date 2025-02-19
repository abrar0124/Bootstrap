import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setSearchQuery } from "../Redux/Hotelslice";

function Header() {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.hotels.searchQuery);

  return (
    <nav className="header navbar navbar-expand-lg bg-light p-3  position-fixed w-100">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Navbar
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active fs-5" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link active fs-5" aria-current="page">
                Link
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search hotels..."
              value={searchQuery}
              onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            />
            <button className="btn btn-outline-success" type="button">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
