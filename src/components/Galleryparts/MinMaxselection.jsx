import { useDispatch, useSelector } from "react-redux";
import { setMaxprice, setMinprice } from "../../Redux/Hotelslice";

function MinMaxselection() {
  const { minprice, maxprice } = useSelector((state) => state.hotels);
  const dispatch = useDispatch();
  return (
    <>
      <div className="d-flex gap-3" style={{ marginLeft: "20%" }}>
        <div>
          <input
            className="form-control"
            value={minprice}
            type="number"
            placeholder="Min price"
            onChange={(e) => {
              const price = e.target.value ? Number(e.target.value) : null;
              dispatch(setMinprice(price));
            }}
            onWheel={(e) => e.target.blur()}
          />
        </div>
        <div>
          <input
            className="form-control"
            value={maxprice}
            type="number"
            placeholder="Max price"
            onChange={(e) => {
              const price = e.target.value ? Number(e.target.value) : null;
              dispatch(setMaxprice(price));
            }}
            onWheel={(e) => e.target.blur()}
          />
        </div>
      </div>
    </>
  );
}
export default MinMaxselection;
