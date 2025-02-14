import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import hotels from "./Hotels";

const Gallery = () => {
  return (
    <>
      {hotels.map((hotel) => (
        <div
          key={hotel.id}
          className="container card shadow-sm mt-5 p-4"
          style={{ width: "60%", cursor: "pointer" }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <Link to={`/details/${hotel.id}`}>
                <img
                  src={hotel.mainImage}
                  className="img-fluid rounded-start"
                  alt={hotel.name}
                />
              </Link>
              <div className="d-flex flex-wrap mt-2">
                {hotel.gallery.slice(0, 11).map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    className="img-thumbnail me-1"
                    width="60"
                    height="60"
                    alt="Gallery"
                  />
                ))}

                <Link className="btn btn-lg" to={`/details/${hotel.id}`}>
                  See all
                </Link>
              </div>
            </div>

            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title fs-4 fw-bold">{hotel.name}</h5>

                <p className="text-warning mb-1">
                  ★★★★☆{" "}
                  <span className="text-primary fs-5">{hotel.location}</span>
                  <a href="#" className="ms-2 navbar-brand text-primary">
                    - View on map
                  </a>
                </p>

                <div className="mb-2">
                  <span className="badge bg-light text-dark me-1">
                    Internet Access
                  </span>
                  <span className="badge bg-light text-dark me-1">
                    Car park
                  </span>
                  <span className="badge bg-light text-dark me-1">
                    Front desk (24-hour)
                  </span>
                  <span className="badge bg-primary">+5</span>
                </div>

                <p className="card-text text-muted">
                  "Can't beat this for the price in a London hotel."
                </p>
                <p>average price per night</p>

                <div style={{ marginLeft: "80%" }}>
                  <div>
                    <span className="text-muted">Very good</span>
                    <br />
                    <small className="text-muted ms-1 fs-5">
                      {hotel.reviews} reviews
                    </small>
                    <p className="text-danger fw-bold mb-1">{hotel.price}</p>

                    <Link
                      className="btn  btn-primary btn-lg"
                      to={`/details/${hotel.id}`}
                    >
                      availability
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="d-flex justify-content-center">
        <button className="btn btn-primary mt-4" style={{ width: "60%" }}>
          See all 27642 hotels in London
        </button>
      </div>
    </>
  );
};

export default Gallery;
