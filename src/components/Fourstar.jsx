import React from "react";
import "./customscss.scss";
import Text from "./Text";
import { useSelector } from "react-redux";

const hotelsData = [
  {
    name: "Four-star1 Hotel Oval",
    price: 22000,
    availableDates: "2025-03-07",
    Star: "⭐⭐⭐⭐",
    image: "/Images/fourstar1.webp",
    rating: 4,
    review: "6.9 Good",
    reviewsCount: 434,
    description: "Beautiful residential area, near the embassy row.",
    reviewer: "Zaiton, Singapore",
  },
  {
    name: "Four-star2 Apartments",
    price: 28000,
    availableDates: "2025-03-08",

    Star: "⭐⭐⭐⭐",
    image: "/Images/fourstar3.webp",
    rating: 4,
    review: "5.9 Review Score",
    reviewsCount: 3,
    description: "Stone’s throw away from Kensington Palace.",
    reviewer: "Zaiton, Singapore",
  },
  {
    name: "Civic Hyde Park",
    price: 20000,
    availableDates: "2025-03-09",
    Star: "⭐⭐⭐⭐",
    image: "/Images/fourstar2.jpg",
    rating: 4,
    review: "6.7 Good",
    reviewsCount: 2064,
    description:
      "I was a bit worried before I got here because of some low rating reviews.",
    reviewer: "Joonha, South Korea",
  },
];
const Fourstar = () => {
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
    const matchesDate =
      selectedDate == null || hotel.availableDates == selectedDate;
    const matchesPrice = hotel.price >= selectedPrice;
    return matchesSearch && matchesStars && matchesPrice && matchesDate;
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
        <Text type={"h2"} content={"Four-Star hotels in London"} />
        {/* Hotel List */}
        <div className=" d-flex justify-content-center">
          <div className="row w-75">
            {" "}
            {/* Restrict width for better centering */}
            {filteredHotels.map((hotel, index) => (
              <div className="col-md-4" key={index}>
                <div className="card h-100 hover-shadow">
                  <img
                    src={hotel.image}
                    className="card-img-top"
                    alt={hotel.name}
                    style={{ height: "200px" }}
                  />
                  <div className="card-body">
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {filteredHotels.length === 0 && (
          <p className="text-center">No hotels found.</p>
        )}
      </div>
    </>
  );
};

export default Fourstar;
