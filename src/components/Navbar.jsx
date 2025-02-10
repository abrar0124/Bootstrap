import Header from "./Header";

function Navbar() {
  return (
    <>
      <Header />
      <nav class="navbar navbar-expand-lg p-3 bg-light">
        <div class="container-fluid">
          <a href="#" class="navbar-brand">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarExample"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarExample">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                {" "}
                <a href="#" class="nav-link">
                  Home
                </a>
              </li>
              <li class="nav-item">
                {" "}
                <a href="#" class="nav-link">
                  About us
                </a>
              </li>
              <li class="nav-item">
                {" "}
                <a href="#" class="nav-link">
                  Contact us
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                >
                  dropdown
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      item 1
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      item 2
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      item 3
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex">
              <input
                type="Search"
                class="form-control me-3 fs-5"
                placeholder="Search"
              />
              <button class="btn btn-outline-success">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
