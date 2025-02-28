import { useDispatch, useSelector } from "react-redux";
import { ButtonGroup, Button } from "react-bootstrap";
import { setSortBy, toggleSortOrder } from "../../Redux/Hotelslice";

const SortingButtons = () => {
  const dispatch = useDispatch();
  const { isAscending } = useSelector((state) => state.hotels);

  return (
    <ButtonGroup className=" d-flex flex-wrap mb-3 w-100">
      <Button variant="primary" className="p-3 btn-lg">
        Our top picks
      </Button>
      <Button
        variant="outline-primary"
        className="p-3 btn-lg"
        onClick={() => {
          dispatch(setSortBy("price_lowest"));
          dispatch(toggleSortOrder());
        }}
      >
        {isAscending ? "Check highest price" : "Check lowest price"}
      </Button>
      <Button variant="outline-primary" className="p-3 btn-lg">
        Nearest to ▼
      </Button>
      <Button variant="outline-primary" className="p-3 btn-lg">
        Best reviewed
      </Button>
    </ButtonGroup>
  );
};

export default SortingButtons;
