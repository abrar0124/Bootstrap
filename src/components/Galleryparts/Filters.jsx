import { useDispatch, useSelector } from "react-redux";
import Text from "../Text";
import {
  setPriceFilter,
  toggleStarFilter,
  clearstarfilter,
} from "../../Redux/Hotelslice";
import MinMaxselection from "./MinMaxselection";
import { useState, useEffect } from "react";

const Filters = () => {
  const dispatch = useDispatch();
  const { selectedStars, selectedPrice } = useSelector((state) => state.hotels);

  // Track all clicked checkboxes (whether checked or unchecked)
  const [allSelectedStars, setAllSelectedStars] = useState([]);

  // Update the list when I selects a star
  useEffect(() => {
    setAllSelectedStars((prevStars) => {
      return [...new Set([...prevStars, ...selectedStars])];
    });
  }, [selectedStars]);

  return (
    <>
      <MinMaxselection />
      {/* Show "my Filters" only if at least one filter was selected */}
      {allSelectedStars.length > 0 && (
        <div
          className="card p-3 my-3"
          style={{ width: "80%", marginLeft: "20%" }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <Text type="h5" content="Your Filters" />
            <button
              className="btn fw-medium fs-5 mb-2 text-primary"
              onClick={() => dispatch(clearstarfilter())}
            >
              CLEAR
            </button>
          </div>

          {/* Show checkboxes for all clicked filters (checked or unchecked) */}
          <div className="mt-2">
            {allSelectedStars.map((star) => (
              <div className="form-check lh-lg" key={star}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={selectedStars.includes(star)} // Uncheck instead of removing
                  onChange={() => dispatch(toggleStarFilter(star))}
                />
                <label className="form-check-label">{star} stars</label>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Always Visible - Popular Hotels Section */}
      <div
        className="card p-3"
        style={{ width: "80%", marginLeft: "20%", marginTop: "3%" }}
      >
        <h6>Popular Hotels in London</h6>
        {[5, 4, 3, 2, 1].map((star) => (
          <div className="form-check lh-lg" key={star}>
            <input
              className="form-check-input"
              type="checkbox"
              checked={selectedStars.includes(star)}
              onChange={() => dispatch(toggleStarFilter(star))}
            />
            <label className="form-check-label">{star} stars</label>
          </div>
        ))}
      </div>

      {/* Price Selection */}
      <div className="mt-3" style={{ width: "80%", marginLeft: "20%" }}>
        <Text type="h5" content="Price PKR" />
        <input
          type="number"
          className="form-control"
          placeholder="Enter price..."
          value={selectedPrice}
          onChange={(e) => {
            const price = e.target.value ? Number(e.target.value) : null;
            dispatch(setPriceFilter(price));
          }}
          onWheel={(e) => e.target.blur()}
        />
      </div>
    </>
  );
};

export default Filters;
