import { useSelector } from "react-redux";
import { Container, Row, Col, Stack } from "react-bootstrap";
import Text from "./Text";
import Filters from "./Galleryparts/Filters";
import SortingButtons from "./Galleryparts/SortingButtons";
import HotelCard from "./Galleryparts/HotelCard";

const Gallery = () => {
  const {
    hotels,
    searchQuery,
    selectedDate,
    selectedStars,
    selectedPrice,
    sortBy,
    isAscending,
  } = useSelector((state) => state.hotels);

  let filteredHotels = hotels.filter((hotel) => {
    const lowerCaseName = hotel.name.toLowerCase();
    const lowerCaseQuery = searchQuery.toLowerCase();
    const matchesSearch =
      lowerCaseName.includes(lowerCaseQuery) ||
      lowerCaseName.startsWith(lowerCaseQuery);
    const matchesStars =
      selectedStars.length === 0 || selectedStars.includes(hotel.Star.length);
    const matchesPrice = hotel.price >= selectedPrice;
    const matchesDate =
      selectedDate == null || hotel.availableDates == selectedDate;
    return matchesSearch && matchesStars && matchesPrice && matchesDate;
  });

  // Sorting Logic
  if (sortBy === "price_lowest") {
    filteredHotels.sort((a, b) =>
      isAscending ? a.price - b.price : b.price - a.price
    );
  }

  return (
    <Container className="mt-4">
      <Text type="h2" content="Hotels in London" />
      <Row>
        {/* Sidebar - Filters */}
        <Col md={3}>
          <Filters />
        </Col>
        {/* Main Content - Sorting & Hotels */}
        <Col md={9}>
          <SortingButtons />
          {filteredHotels.length > 0 ? (
            filteredHotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))
          ) : (
            <Text type="p" content="No hotels found." />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Gallery;
