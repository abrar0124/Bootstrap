import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Text from "./Text";
import Header from "./Header";
import "./customscss.scss";
const LowestPriceHotels = () => {
  const hotels = useSelector((state) => state.hotels.hotels);

  // Sorting hotels by price (lowest to highest)
  const filteredHotels = [...hotels].sort((a, b) => a.price - b.price);

  return (
    <>
      <Header />
      <div className="n-class">
        <h2 className="h-class">Hotels Sorted by Lowest Price</h2>
        <div className="row mx-auto w-75">
          {filteredHotels.length > 0 ? (
            filteredHotels.map((hotel) => (
              <div key={hotel.id} className="card mb-4 p-3 shadow-sm">
                <div className="row g-0">
                  <div className="col-md-4">
                    <Link to={`/details/${hotel.id}`}>
                      <img
                        src={hotel.mainImage}
                        className="img-fluid rounded"
                        alt={hotel.name}
                        style={{ width: "65%" }}
                      />
                    </Link>

                    <div
                      className="d-flex flex-wrap rounded"
                      style={{ width: "80%" }}
                    >
                      {hotel.gallery.slice(0, 10).map((image, index) => (
                        <Link to={`/details/${hotel.id}`}>
                          <img
                            key={index}
                            src={image}
                            className="m-class"
                            width="60"
                            height="50"
                            alt="Gallery"
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-5 col-class">
                    <div className="card-body">
                      <Link
                        to={`/details/${hotel.id}`}
                        href="#"
                        className=" nav-class navbar-brand  fs-5 card-title fw-bold "
                      >
                        {hotel.name}
                        <br />
                        {hotel.place}
                      </Link>
                      <p>
                        {hotel.Star}
                        <span className="text-primary">
                          {hotel.location}
                          <Link
                            to="#"
                            className="ms-2 text-decoration-none text-primary hover-bg-primary"
                          >
                            - View on map
                          </Link>
                        </span>
                      </p>

                      <div className="fs-class fw-bold">
                        <span className=" text-dark p-1 border border-muted me-1">
                          Free Wi-Fi
                        </span>
                        <span className=" text-dark p-1 border border-muted me-1">
                          Car park
                        </span>
                        <span className=" text-dark p-1 border border-muted me-1">
                          Front desk (24-hour)
                        </span>
                        <span className="text-dark p-1 border border-muted">
                          +5
                        </span>
                      </div>
                      <p className="text-muted mt-3">{hotel.discription}</p>
                      <p className="fw-bold ">
                        Available dates:
                        <span className=" ms-2 fw-normal">
                          {hotel.availableDates}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 border-start d-flex flex-column justify-content-center align-items-end pe-3">
                    <Text type={"p"} content={"very good"} />
                    <span className="fs-5 mb-5">{hotel.rating}Reviews</span>
                    <p className="text-danger fw-bold fs-4 mb-5">
                      {hotel.price}
                    </p>
                    <Link
                      className="btn btn-primary btn-lg hover-bg-primary mt-5 "
                      to={`/details/${hotel.id}`}
                    >
                      Check availability
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <Text type={"p"} content={"No hotels found."} />
          )}
        </div>
      </div>
    </>
  );
};

export default LowestPriceHotels;
