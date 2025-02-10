import { Link } from "react-router-dom";
function Header() {
  return (
    <nav class="navbar navbar-expand-lg">
      <div className="container-fluid p-2">
        {/* Logo Section */}
        <a className="nav-link fs-4" href="#">
          Father Robbany
          <span className="text-primary ps-3">Pulang Wijaya</span>
        </a>
        {/* Navbar Toggle Button for Mobile View */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5 ms-5 gap-4">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Accordion
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Buttons">
                Buttons
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Carousel">
                Carousel
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Collapse">
                Collapse
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Dropdown">
                Dropdown
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/List group">
                List group
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/Modal">
                Modal
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/Navbar">
                Navbar
              </Link>
            </li>
          </ul>
          <button className="btn  btn-success">Suucess</button>
        </div>
      </div>
    </nav>
  );
}
export default Header;
