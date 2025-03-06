import { useDispatch, useSelector } from "react-redux";
import Text from "../Text";
import {
  setPriceFilter,
  toggleStarFilter,
  clearstarfilter,
} from "../../Redux/Hotelslice";
import { Link } from "react-router-dom";
import MinMaxselection from "./MinMaxselection";

const Filters = () => {
  const dispatch = useDispatch();
  const { selectedStars, selectedPrice } = useSelector((state) => state.hotels);

  return (
    <>
      <MinMaxselection />
      <div
        className="card p-3"
        style={{ width: "80%", marginLeft: "20%", marginTop: "10%" }}
      >
        <div className="d-flex flex-wrap justify-content-center gap-5">
          <div>
            <Text type={"h5"} content={"Your Filters"} />
          </div>
          <div>
            <Link
              className="fw-bold text-primary navbar-brand"
              onClick={() => dispatch(clearstarfilter())}
            >
              CLEAR
            </Link>
          </div>
        </div>

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

        <div className="mt-3">
          <Text type={"h5"} content={"Price PKR"} />
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
      </div>
    </>
  );
};

export default Filters;
