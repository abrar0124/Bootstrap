import { useDispatch, useSelector } from "react-redux";
import Text from "../Text";
import { setPriceFilter, toggleStarFilter } from "../../Redux/Hotelslice";

const Filters = () => {
  const dispatch = useDispatch();
  const { selectedStars, selectedPrice } = useSelector((state) => state.hotels);

  return (
    <div className="card p-3" style={{ width: "70%", marginLeft: "34%" }}>
      <Text type={"h5"} content={"Rating"} />
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
  );
};

export default Filters;
