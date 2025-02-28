import React from "react";
import "./customscss.scss";
import Text from "./Text";
import { useSelector } from "react-redux";
import { Card, CardBody, Col, Container, Row } from "react-bootstrap";

const hotelsData = [
  {
    name: "Luxury Hotel Oval",
    availableDates: "2025-03-10",
    price: 28000,
    Star: "⭐⭐⭐⭐",
    image: "/Images/Luxuryhotel1.webp",
    rating: 4,
    review: "6.9 Good",
    reviewsCount: 434,
    description: "Beautiful residential area, near the embassy row.",
    reviewer: "Zaiton, Singapore",
  },
  {
    name: "B,Shan luxury Apartments",
    availableDates: "2025-03-11",
    price: 23000,
    Star: "⭐⭐⭐⭐⭐",
    image: "/Images/Luxuryhotel2.webp",
    rating: 4,
    review: "5.9 Review Score",
    reviewsCount: 3,
    description: "Stone’s throw away from Kensington Palace.",
    reviewer: "Zaiton, Singapore",
  },
  {
    name: "Avanue Luxury Hyde Park",
    availableDates: "2025-03-12",

    price: 24000,
    Star: "⭐⭐⭐",
    image: "/Images/Luxuryhotel3.webp",
    rating: 4,
    review: "6.7 Good",
    reviewsCount: 2064,
    description:
      "I was a bit worried before I got here because of some low rating reviews.",
    reviewer: "Joonha, South Korea",
  },
];

const Luxuryhotel = () => {
  const {
    searchQuery,
    selectedStars,
    selectedPrice,
    selectedDate,
    sortBy,
    isAscending,
  } = useSelector((state) => state.hotels);
  const filteredHotels = hotelsData.filter((hotel) => {
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
  if (sortBy === "price_lowest") {
    filteredHotels.sort((a, b) =>
      isAscending ? a.price - b.price : b.price - a.price
    );
    console.log(isAscending);
  }
  return (
    <>
      <Container className=" border-top">
        <Text type={"h2"} content={"Luxury hotels in London"} />
        <div className="d-flex justify-content-center">
          <Row className=" w-75">
            {filteredHotels.map((hotel, index) => (
              <Col md={4} key={index}>
                <Card className=" h-100 hover-shadow">
                  <Card.Img
                    src={hotel.image}
                    className="card-img-top"
                    alt={hotel.name}
                    style={{ height: "200px" }}
                  />
                  <CardBody>
                    <h5 className="text-primary">{hotel.name}</h5>
                    <p className="mb-1">
                      {hotel.review} <br />
                      <small className="text-muted">
                        Based on {hotel.reviewsCount} reviews
                      </small>
                    </p>
                    <p>{hotel.Star}</p>
                    <p className="mt-2">{hotel.description}</p>
                    <p className="text-muted">
                      <small>{hotel.reviewer}</small>
                    </p>
                    <p className="fw-bold ">
                      Available dates:
                      <span className=" ms-2 fw-normal">
                        {hotel.availableDates}
                      </span>
                    </p>
                    <p className="text-danger fw-bold fs-4">{hotel.price}</p>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {filteredHotels.length === 0 && (
          <p className="text-center">No hotels found.</p>
        )}
      </Container>
    </>
  );
};

export default Luxuryhotel;
