import React from "react";
import "./customscss.scss";

const hotelsData = [
  {
    name: "Belgrave Hotel Oval",
    image: "/Images/fourstar1.webp",
    rating: 4,
    review: "6.9 Good",
    reviewsCount: 434,
    description: "Beautiful residential area, near the embassy row.",
    reviewer: "Zaiton, Singapore",
  },
  {
    name: "B’Shan Apartments",
    image: "/Images/fourstar3.webp",
    rating: 4,
    review: "5.9 Review Score",
    reviewsCount: 3,
    description: "Stone’s throw away from Kensington Palace.",
    reviewer: "Zaiton, Singapore",
  },
  {
    name: "Park Avenue Hyde Park",
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
  return (
    <>
      <div className="container border-top">
        <p className="  fs-3 fw-medium mt-4">4-star hotels in London</p>
        <div className="custom-text">
          <div className="container mt-5 text-center ">
            <div className="d-flex justify-content-center align-items-center">
              <div className="row w-75">
                {hotelsData.map((hotel, index) => (
                  <div className="col-md-4 " key={index}>
                    <div className="card h-100  hover-shadow">
                      <img
                        src={hotel.image}
                        className="card-img-top "
                        style={{ height: "200px" }}
                      />

                      <div className=" hover-shadow  card-body">
                        <h5 className="text-primary">{hotel.name}</h5>
                        <p className="mb-1">
                          {hotel.review} <br />
                          <small className="text-muted">
                            Based on {hotel.reviewsCount} reviews
                          </small>
                        </p>
                        <div className="text-warning border-bottom">
                          "⭐⭐⭐⭐"
                        </div>
                        <p className="mt-2">{hotel.description}</p>
                        <p className="text-muted">
                          <small>{hotel.reviewer}</small>
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

export default Fourstar;
