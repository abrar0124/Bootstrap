import { useDispatch, useSelector } from "react-redux";
import { setSortBy, toggleSortOrder } from "../../Redux/Hotelslice";
import { useState } from "react";
import "./scss.scss";
const SortingButtons = () => {
  const dispatch = useDispatch();
  const { isAscending } = useSelector((state) => state.hotels);
  const [activeDropdown, setActiveDropdown] = useState(null); // Single state for both dropdowns

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="btn-group mb-2 w-100 ">
      <button
        className=" p-2 btn btn-primary border btn-lg rounded"
        style={{ width: "15%" }}
      >
        Our top picks
      </button>
      {/* Top Reviewed Dropdown */}
      <div>
        <button
          className=" custom-btn p-3 btn border btn-lg"
          onClick={() => toggleDropdown("topReviewed")}
        >
          Top Reviewed ▼
        </button>
        {activeDropdown === "topReviewed" && (
          <div
            className="position-absolute mt-2 bg-white border rounded"
            style={{ zIndex: 1050, cursor: "pointer", width: "250px" }}
          >
            <div
              className="fw-bold p-2 ms-1 "
              style={{ backgroundColor: "rgb(237, 244, 247)" }}
            >
              Best Rated by
            </div>
            <div className="fw-medium p-2  border">All guests</div>
            <div className="fw-medium p-2  border">Buisness Travelers</div>
            <div className="fw-medium p-2  border">Couples</div>
            <div className="fw-medium p-2  border">Solo Travelers</div>
            <div className="fw-medium p-2  border">
              Families with young children
            </div>
            <div className="fw-medium p-2  border">
              Families with older children
            </div>
            <div className="fw-medium p-2  border">Groups</div>
          </div>
        )}
      </div>
      <button
        className="custom-btn p-3 btn border btn-lg rounded"
        onClick={() => {
          dispatch(setSortBy("price_lowest"));
          dispatch(toggleSortOrder());
        }}
      >
        {isAscending ? "Check highest price" : "Check Lowest price"}
      </button>

      {/* Distance Dropdown */}
      <div>
        <button
          className="custom-btn p-3 btn border btn-lg"
          onClick={() => toggleDropdown("Distance")}
        >
          Distance ▼
        </button>

        {activeDropdown === "Distance" && (
          <div
            className="position-absolute mt-2 bg-white border rounded"
            style={{
              zIndex: 1050,
              cursor: "pointer",
              width: "270px",
              height: "370px",
              overflow: "auto",
            }}
          >
            <div
              className="fw-bold p-2 ms-1 mt-3"
              style={{ backgroundColor: "rgb(237, 244, 247)" }}
            >
              Airports
            </div>
            <div
              className="fw-medium p-2 text-start ps-4"
              style={{ fontSize: "15px" }}
            >
              Heathrow Airport
            </div>
            <div
              className="fw-medium p-2 text-start ps-4"
              style={{ fontSize: "15px" }}
            >
              Gatvitch Airports
            </div>
            <div
              className="fw-bold p-2 ms-1 "
              style={{ backgroundColor: "rgb(237, 244, 247)" }}
            >
              Transportation
            </div>
            <div
              className="fw-medium p-2 text-start ps-4"
              style={{ fontSize: "15px" }}
            >
              Padding Railway Station
            </div>
            <div
              className="fw-medium p-2 text-start ps-4"
              style={{ fontSize: "15px" }}
            >
              Victoria Railway Station
            </div>
            <div
              className="fw-bold p-2 ms-1 "
              style={{ backgroundColor: "rgb(237, 244, 247)" }}
            >
              Top landmarks
            </div>
            <div
              className="fw-medium p-2 text-start ps-4"
              style={{ fontSize: "15px" }}
            >
              Victoria London
            </div>
            <div
              className="fw-medium p-2 text-start ps-4"
              style={{ fontSize: "15px" }}
            >
              Bays water
            </div>
            <div
              className="fw-medium p-2 text-start ps-4"
              style={{ fontSize: "15px" }}
            >
              Convent Garden
            </div>
          </div>
        )}
      </div>
      <button className="custom-btn p-3 btn border btn-lg rounded">
        Nearest to ▼
      </button>
      <button className="custom-btn p-3 btn border btn-lg rounded">
        Best reviewed
      </button>
    </div>
  );
};

export default SortingButtons;
