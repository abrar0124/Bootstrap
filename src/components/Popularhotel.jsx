import React from "react";
import "./customscss.scss";
import Text from "./Text";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const hotelsData = [
  {
    name: "Belgrave Hotel Oval",
    Country: "America",
    price: 43000,
    availableDates: "2025-03-16",
    Star: "⭐⭐⭐⭐⭐",
    image: "/Images/popular1.webp",
    rating: 4,
    review: "6.9 Good",
    reviewsCount: 434,
    description: "Beautiful residential area, near the embassy row.",
    reviewer: "Zaiton, Singapore",
  },
  {
    price: 38000,
    name: "B’Shan Apartments",
    Country: "Austria",
    availableDates: "2025-03-17",
    Star: "⭐⭐⭐",
    image: "/Images/popular2.webp",
    rating: 4,
    review: "5.9 Review Score",
    reviewsCount: 3,
    description: "Stone’s throw away from Kensington Palace.",
    reviewer: "Zaiton, Singapore",
  },
  {
    price: 45000,
    name: "Park Avenue Hyde Park",
    Country: "Italy",
    availableDates: "2025-03-18",
    Star: "⭐⭐",
    image: "/Images/popular3.webp",
    rating: 4,
    review: "6.7 Good",
    reviewsCount: 2064,
    description:
      "I was a bit worried before I got here because of some low rating reviews.",
    reviewer: "Joonha, South Korea",
  },
];

const Popularhotel = () => {
  const {
    searchQuery,
    selectedStars,
    selectedPrice,
    selectedDate,
    selectedCountry,
    isAscending,
    sortBy,
  } = useSelector((state) => state.hotels);
  const [filteredHotels, setFilteredHotels] = useState([]);

  const filterHotels = () => {
    let assignValue = hotelsData.filter(
      (hotel) =>
        (searchQuery === "" ||
          hotel.name.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (selectedStars.length === 0 ||
          selectedStars.includes(hotel.Star.length)) &&
        hotel.price >= selectedPrice &&
        (selectedDate == null || hotel.availableDates === selectedDate) &&
        (selectedCountry === null || hotel.Country === selectedCountry)
    );
    if (sortBy === "price_lowest") {
      assignValue.sort((a, b) =>
        isAscending ? a.price - b.price : b.price - a.price
      );
    }
    setFilteredHotels(assignValue);
    console.log("Filtered Hotels:", assignValue);
    console.log(selectedCountry);
  };

  useEffect(() => {
    filterHotels();
  }, [
    searchQuery,
    selectedStars,
    selectedPrice,
    selectedDate,
    isAscending,
    sortBy,
  ]);
  useEffect(() => {
    filterHotels();
  }, []);
  return (
    <>
      <div className="container border-top">
        <Text type={"h2"} content={"Popular hotels in London"} />
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
                    <p className="fw-medium">{hotel.Country}</p>
                    <p className="fw-medium">{hotel.Country}</p>
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

export default Popularhotel;
