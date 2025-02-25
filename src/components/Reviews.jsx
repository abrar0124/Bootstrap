import React from "react";
import "./customscss.scss";
import Text from "./Text";
import { useSelector } from "react-redux";

const hotelsData = [
  {
    name: "Belgrave Hotel Oval",
    price: 56000,
    Star: "⭐⭐⭐",
    rating: 4,
    review: "6.9 Good",
    reviewsCount: 434,
    description: "Beautiful residential area, near the embassy row.",
    reviewer: "Zaiton, Singapore",
  },
  {
    name: "B’Shan Apartments",
    price: 59000,
    Star: "⭐⭐",
    rating: 4,
    review: "5.9 Review Score",
    reviewsCount: 3,
    description: "Stone’s throw away from Kensington Palace.",
    reviewer: "Zaiton, Singapore",
  },
  {
    name: "Park Avenue Hyde Park",
    price: 45000,
    Star: "⭐",
    rating: 4,
    review: "6.7 Good",
    reviewsCount: 2064,
    description:
      "I was a bit worried before I got here because of some low rating reviews.",
    reviewer: "Joonha, South Korea",
  },
];

const Reviews = () => {
  const { searchQuery, selectedStars, selectedPrice, sortBy, isAscending } =
    useSelector((state) => state.hotels);
  const filteredHotels = hotelsData.filter((hotel) => {
    const lowerCaseName = hotel.name.toLowerCase();
    const lowerCaseQuery = searchQuery.toLowerCase();
    const matchesSearch =
      lowerCaseName.includes(lowerCaseQuery) ||
      lowerCaseName.startsWith(lowerCaseQuery);
    const matchesStars =
      selectedStars.length === 0 || selectedStars.includes(hotel.Star.length);
    const matchesPrice = hotel.price >= selectedPrice;
    return matchesSearch && matchesStars && matchesPrice;
  });

  // Sorting Logic (this was causing the error)
  if (sortBy === "price_lowest") {
    filteredHotels.sort((a, b) =>
      isAscending ? a.price - b.price : b.price - a.price
    );
    console.log(isAscending);
  }
  return (
    <>
      <div className="container border-top">
        <Text type="h2" content="Real Reviews  for hotels" />

        <div className="custom-text">
          <div className="container mt-5 text-center ">
            <div className="d-flex justify-content-center align-items-center">
              <div className="row w-75">
                {filteredHotels.map((hotel, index) => (
                  <div className="col-md-4 " key={index}>
                    <div className="card h-100 border  hover-shadow">
                      <div className=" hover-shadow  card-body">
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
                        <p className="text-danger fw-bold fs-4">
                          {hotel.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
