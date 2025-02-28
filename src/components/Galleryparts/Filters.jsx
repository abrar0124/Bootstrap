import { useDispatch, useSelector } from "react-redux";
import { Card, Form, Stack } from "react-bootstrap";
import Text from "../Text";
import { setPriceFilter, toggleStarFilter } from "../../Redux/Hotelslice";
const Filters = () => {
  const dispatch = useDispatch();
  const { selectedStars, selectedPrice } = useSelector((state) => state.hotels);
  return (
    <Card className=" p-3 " style={{ width: "70%", marginLeft: "34%" }}>
      <Text type="h5" content="Rating" />
      <Stack gap={2}>
        {[5, 4, 3, 2, 1].map((star) => (
          <Form.Check
            key={star}
            type="checkbox"
            label={`${star} stars`}
            checked={selectedStars.includes(star)}
            onChange={() => dispatch(toggleStarFilter(star))}
          />
        ))}
      </Stack>

      <div className="mt-3">
        <Text type="h5" content="Price PKR" />
        <Form.Control
          type="number"
          placeholder="Enter price"
          value={selectedPrice}
          onChange={(e) => {
            const price = e.target.value ? Number(e.target.value) : null;
            dispatch(setPriceFilter(price));
          }}
          onWheel={(e) => e.target.blur()} // Prevent accidental scrolling
        />
      </div>
    </Card>
  );
};

export default Filters;
