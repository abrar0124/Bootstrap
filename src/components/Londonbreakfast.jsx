import React from "react";
import "./customscss.scss";
import Text from "./Text";
import { useSelector } from "react-redux";

const hotelsData = [
  {
    name: "Belgrave Hotel Oval",
    price: 64000,
    Star: "⭐⭐⭐",
    availableDates: "2025-03-18",
    image: "/Images/break1.webp",
    rating: 4,
    review: "6.9 Good",
    reviewsCount: 434,
    description: "Beautiful residential area, near the embassy row.",
    reviewer: "Zaiton, Singapore",
  },
  {
    price: 33000,
    name: "B’Shan Apartments",
    Star: "⭐⭐⭐⭐",
    availableDates: "2025-03-19",
    image: "/Images/break2.jpg",
    rating: 4,
    review: "5.9 Review Score",
    reviewsCount: 3,
    description: "Stone’s throw away from Kensington Palace.",
    reviewer: "Zaiton, Singapore",
  },
  {
    name: "Park Avenue Hyde Park",
    price: 34000,
    availableDates: "2025-03-20",
    Star: "⭐⭐⭐⭐⭐",
    image: "/Images/break3.webp",
    rating: 4,
    review: "6.7 Good",
    reviewsCount: 2064,
    description:
      "I was a bit worried before I got here because of some low rating reviews.",
    reviewer: "Joonha, South Korea",
  },
];

const Londonbreakfast = () => {
  const { searchQuery, selectedStars, selectedPrice, selectedDate, sortBy } =
    useSelector((state) => state.hotels);
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
    filteredHotels.sort((a, b) => a.price - b.price);
    console.log("SortBy Updated:", sortBy); // Console mai check karne ke liye
  }
  return (
    <>
      <div className="container border-top">
        <Text type={"h2"} content={"Kuala Lumpur hotels with breakfast"} />
        {/* Hotel List */}
        <div className=" d-flex justify-content-center">
          <div className="row w-75">
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
                      <small>{hotel.reviewer}Reviews</small>
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

export default Londonbreakfast;
