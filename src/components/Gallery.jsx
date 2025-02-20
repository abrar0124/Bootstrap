import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Text from "./Text";
import { toggleStarFilter } from "../Redux/Hotelslice";

const Gallery = () => {
  const dispatch = useDispatch();
  const { hotels, searchQuery, selectedStars } = useSelector(
    (state) => state.hotels
  );
  // Filtering Logic
  const filteredHotels = hotels.filter((hotel) => {
    const lowerCaseName = hotel.name.toLowerCase();
    const lowerCaseQuery = searchQuery.toLowerCase();
    const matchesSearch =
      lowerCaseName.includes(lowerCaseQuery) ||
      lowerCaseName.startsWith(lowerCaseQuery);
    const matchesStars =
      selectedStars.length === 0 || selectedStars.includes(hotel.Star.length);
    return matchesSearch && matchesStars;
  });

  return (
    <div className="container mt-4">
      <Text type="h2" content={"Hotels in London"} />
      <div className="row">
        {/* Sidebar for Filters */}
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
          </div>
        </div>

        {/* Hotel List */}
        <div className="col-md-9">
          <div className="btn-group mb-3 w-100">
            <button className="p-3 btn btn-primary border btn-lg">
              Our top picks
            </button>
            <button className="custom-btn p-3 btn border btn-lg">
              Lowest price first
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
                    <Link
                      to={`/details/${hotel.id}`}
                      className="hover-bg-primary"
                    >
                      <img
                        src={hotel.mainImage}
                        className="img-fluid rounded"
                        alt={hotel.name}
                      />
                    </Link>
                  </div>
                  <div className="col-md-5">
                    <div className="card-body">
                      <h5 className="card-title fw-bold text-muted">
                        {hotel.name}
                      </h5>
                      <p>{hotel.Star}</p>
                      <p className="text-muted">{hotel.discription}</p>
                      <p>
                        <span className="text-primary">{hotel.location}</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 border-start d-flex flex-column justify-content-center align-items-end pe-3">
                    <Text type={"p"} content={"very good"} />
                    <span className="fs-5 text-primary fw-bold">
                      {hotel.rating}
                    </span>
                    <p className="text-danger fw-bold fs-4">{hotel.price}</p>
                    <Link
                      className="btn btn-primary btn-lg hover-bg-primary"
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
    </div>
  );
};

export default Gallery;
