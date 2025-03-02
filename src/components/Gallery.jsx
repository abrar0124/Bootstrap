import { useSelector } from "react-redux";
import Text from "./Text";
import "./customscss.scss";
import Filters from "./Galleryparts/Filters";
import SortingButtons from "./Galleryparts/SortingButtons";
import HotelCard from "./Galleryparts/HotelCard";

const Gallery = () => {
  const {
    searchQuery,
    selectedDate,
    selectedStars,
    selectedPrice,
    sortBy,
    isAscending,
    selectedCountry,
  } = useSelector((state) => state.hotels);

  return (
    <div className="container mt-4">
      <Text type="h2" content={"Hotels in London"} />
      <div className="row">
        <div className="col-md-3">
          <Filters />
        </div>
        <div className="col-md-9">
          <SortingButtons />
          {[] > 0 ? (
            [1, 2, 3].map((hotel) => <HotelCard key={hotel.id} hotel={hotel} />)
          ) : (
            <Text type={"p"} content={"No hotels found."} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
