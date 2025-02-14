import React from "react";
import "./customscss.scss";

const hotelsData = [
  {
    name: "Apartments",
    image: "/Images/travel1.jpg",
    description: "156,786 properties",
  },
  {
    name: "Vacation Rentals",
    image: "/Images/travel2.jpg",
    description: "517,703 properties",
  },
  {
    name: "Private villas",
    image: "/Images/travel3.jpg",

    description: "181,167 properties",
  },
  {
    name: "Bungalows",
    image: "/Images/travel4.jpg",

    description: "8,801 properties",
  },
];

const Travels = () => {
  return (
    <>
      <div className="border-top">
        <div className="container ">
          <p className="  fs-3 text-center  fw-medium mt-4">
            Explore more travel vacation rentals
          </p>
          <div className="custom-text">
            <div className="container mt-5 text-center ">
              <div className="d-flex justify-content-center align-items-center">
                <div className="row w-75">
                  {hotelsData.map((hotel, index) => (
                    <div className="  col-md-3 " key={index}>
                      <div className="card h-100  hover-shadow border">
                        <img
                          src={hotel.image}
                          className="card-img-top"
                          alt={hotel.name}
                        />
                        <div className=" hover-shadow  card-body">
                          <p className=" fs-5 text-dark text-start">
                            {hotel.name}
                          </p>
                          <p className=" text-muted text-start">
                            {hotel.description}
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
      </div>
    </>
  );
};

export default Travels;
