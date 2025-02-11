import Header from "./Header";

function Buttons() {
  return (
    <>
      <Header />
      {/* btn-group dropdown */}
      <div class="btn-group-vertical" style={{ margin: "10%" }}>
        <div class="btn-group btn-group">
          <button
            type="button"
            class="btn btn-primary dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            dropdown1
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item">child dropdown</a>
            </li>
            <li>
              <a class="dropdown-item">child dropdown</a>
            </li>
          </ul>
        </div>
        <div class="btn-group dropstart">
          <button
            class="btn btn-primary dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            dropdown2
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item">child dropdown1</a>
            </li>
            <li>
              <a class="dropdown-item">child dropdown2</a>
            </li>
          </ul>
        </div>
        <div class="btn-group dropend">
          <button
            class="btn btn-primary dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            dropdown2
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item">child dropdown</a>
            </li>
            <li>
              <a class="dropdown-item">child dropdown</a>
            </li>
          </ul>
        </div>
        <div class="btn-group dropup">
          <button
            class="btn btn-primary dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            dropdown3
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item">child dropdown</a>
            </li>
            <li>
              <a class="dropdown-item">child dropdown</a>
            </li>
          </ul>
        </div>
      </div>
      {/* Close btn */}
      <button type="button" class="btn-close"></button>
    </>
  );
}
export default Buttons;
