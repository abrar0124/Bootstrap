import { useDispatch, useSelector } from "react-redux";
import { setSortBy, toggleSortOrder } from "../../Redux/Hotelslice";

const SortingButtons = () => {
  const dispatch = useDispatch();
  const { isAscending } = useSelector((state) => state.hotels);

  return (
    <div className="btn-group mb-3 w-100">
      <button className="p-3 btn btn-primary border btn-lg">
        Our top picks
      </button>
      <button
        className="custom-btn p-3 btn border btn-lg"
        onClick={() => {
          dispatch(setSortBy("price_lowest"));
          dispatch(toggleSortOrder());
        }}
      >
        {isAscending ? "Check highest price" : "Check Lowest price"}
      </button>
      <button className="custom-btn p-3 btn border btn-lg">Nearest to ▼</button>
      <button className="custom-btn p-3 btn border btn-lg">
        Best reviewed
      </button>
    </div>
  );
};

export default SortingButtons;
