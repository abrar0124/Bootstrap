import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Text from "./Text";
import {
  toggleStarFilter,
  setPriceFilter,
  setSortBy,
  toggleSortOrder, // Import new action
} from "../Redux/Hotelslice";
import "./customscss.scss";

const Gallery = () => {
  const dispatch = useDispatch();
  const {
    hotels,
    searchQuery,
    selectedDate,
    sortBy,
    selectedStars,
    selectedPrice,
    isAscending,
  } = useSelector((state) => state.hotels);

  // Filtering Logic
  let filteredHotels = hotels.filter((hotel) => {
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

  // Sorting Logic
  if (sortBy === "price_lowest") {
    filteredHotels.sort((a, b) =>
      isAscending ? a.price - b.price : b.price - a.price
    );
    console.log(isAscending);
  }

  return (
    <div className="container mt-4">
      <Text type="h2" content={"Hotels in London"} />
      <div className="row">
        <div className="col-md-3">
          <div className="card p-3" style={{ width: "70%", marginLeft: "34%" }}>
            <Text type={"h5"} content={"Rating"} />
            {[5, 4, 3, 2, 1].map((star) => (
              <div className="form-check lh-lg" key={star}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={selectedStars.includes(star)}
                  onChange={() => dispatch(toggleStarFilter(star))}
                />
                <label className="form-check-label">{star} stars</label>
              </div>
            ))}
            <div className="mt-3">
              <Text type={"h5"} content={"Price PKR"} />
              <input
                type="number"
                className="form-control"
                placeholder="Enter price..."
                value={selectedPrice}
                onChange={(e) => {
                  const price = e.target.value ? Number(e.target.value) : null;
                  dispatch(setPriceFilter(price));
                }}
                onWheel={(e) => e.target.blur()}
              />
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="btn-group mb-3 w-100">
            <button className="p-3 btn btn-primary border btn-lg">
              Our top picks
            </button>

            <button
              className="custom-btn p-3 btn border btn-lg"
              onClick={() => {
                dispatch(setSortBy("price_lowest"));
                dispatch(toggleSortOrder()); // Redux se sorting toggle
              }}
            >
              {isAscending ? "Check highest price" : "Check Lowest price"}
            </button>
            <button className="custom-btn p-3 btn border btn-lg">
              Nearest to ▼
            </button>
            <button className="custom-btn p-3 btn border btn-lg">
              Best reviewed
            </button>
          </div>
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
                        style={{ width: "80%" }}
                      />
                    </Link>
                    <div
                      className="d-flex flex-wrap rounded"
                      style={{ width: "80%" }}
                    >
                      {hotel.gallery.slice(0, 10).map((image, index) => (
                        <Link to={`/details/${hotel.id}`} key={index}>
                          <img
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
                        className="nav-class navbar-brand fs-5 card-title fw-bold"
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
                        <span className="text-dark p-1 border border-muted me-1">
                          Free Wi-Fi
                        </span>
                        <span className="text-dark p-1 border border-muted me-1">
                          Car park
                        </span>
                        <span className="text-dark p-1 border border-muted me-1">
                          Front desk (24-hour)
                        </span>
                        <span className="text-dark p-1 border border-muted">
                          +5
                        </span>
                      </div>
                      <p className="text-muted mt-3">{hotel.discription}</p>
                      <p className="fw-bold ">
                        Available dates:
                        <span className="ms-2 fw-normal">
                          {hotel.availableDates}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 border-start d-flex flex-column justify-content-center align-items-end pe-3">
                    <Text type={"p"} content={"very good"} />
                    <span className="fs-5 mb-5">{hotel.rating} Reviews</span>
                    <p className="text-danger fw-bold fs-4 mb-5">
                      {hotel.price}
                    </p>
                    <Link
                      className="btn btn-primary btn-lg hover-bg-primary mt-5"
                      to={"/Booknow"}
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
    </div>
  );
};

export default Gallery;
