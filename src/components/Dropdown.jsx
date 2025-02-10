import Header from "./Header";

function Dropdown() {
  return (
    <>
      <Header />
      {/* dropdown */}
      <button
        type="button"
        class="btn btn-primary dropdown-toggle"
        data-bs-toggle="dropdown"
      >
        primary
      </button>
      <ul class="dropdown-menu">
        <li>
          <a href="#" class="dropdown-item">
            maths
          </a>
        </li>
        <li>
          <a href="#" class="dropdown-item">
            phy
          </a>
        </li>
        <li>
          <a href="#" class="dropdown-item">
            chem
          </a>
        </li>
      </ul>
      <button
        type="button"
        class="btn btn-danger dropdown-toggle"
        data-bs-toggle="dropdown"
      >
        danger
      </button>
      <ul class="dropdown-menu">
        <li>
          <a href="#" class="dropdown-item">
            maths
          </a>
        </li>
        <li>
          <a href="#" class="dropdown-item">
            phy
          </a>
        </li>
        <li>
          <a href="#" class="dropdown-item">
            chem
          </a>
        </li>
      </ul>
    </>
  );
}
export default Dropdown;
