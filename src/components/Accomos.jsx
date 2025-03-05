import React from "react";
import { useSelector } from "react-redux";
import Text from "./Text";
import { useEffect, useState } from "react";
const hotelsData = [
  {
    name: "Belgrave Hotel Oval",
    Country: "Germany",
    price: 18000,
    availableDates: "2025-03-01",
    Star: "⭐⭐⭐",
    image: "/Images/accom.webp",
    rating: 4,
    review: "6.9 Good",
    reviewsCount: 434,
    description: "Beautiful residential area, near the embassy row.",
    reviewer: "Zaiton, Singapore",
  },
  {
    name: "B’Shan Apartments",
    Country: "Italy",
    price: 13000,
    availableDates: "2025-03-02",
    Star: "⭐",
    image: "/Images/accomo1.webp",
    rating: 4,
    review: "5.9 Review Score",
    reviewsCount: 3,
    description: "Stone’s throw away from Kensington Palace.",
    reviewer: "Zaiton, Singapore",
  },
  {
    name: "Park Avenue Hyde Park",
    Country: "France",
    price: 11000,
    availableDates: "2025-03-03",
    Star: "⭐⭐⭐⭐⭐",
    image: "/Images/accomo2.webp",
    rating: 4,
    review: "6.7 Good",
    reviewsCount: 2064,
    description:
      "I was a bit worried before I got here because of some low rating reviews.",
    reviewer: "Joonha, South Korea",
  },
];
const Accomos = () => {
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
  // all filters will be re-render but selectedcountry will be just
  // render means first mount.
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

  return (
    <div className="container border-top">
      <Text type={"h2"} content={"London hotels & accommodations"} />
      <div className="row">
        {/* Hotel List */}
        <div className="d-flex justify-content-center">
          <div className="row w-75">
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
      </div>
      {filteredHotels.length === 0 && (
        <p className="text-center">No hotels found.</p>
      )}
    </div>
  );
};

export default Accomos;
