import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Gallery = () => {
  const { hotels, searchQuery } = useSelector((state) => state.hotels);

  const filteredHotels =
    searchQuery === ""
      ? hotels
      : hotels?.filter((hotel) => {
          const lowerCaseName = hotel.name.toLowerCase();
          const lowerCaseQuery = searchQuery.toLowerCase();

          return (
            lowerCaseName.includes(lowerCaseQuery) ||
            lowerCaseName.startsWith(lowerCaseQuery)
          );
        });
  return (
    <div className="container mt-4">
      <h2 className="fw-medium" style={{ marginLeft: "8%" }}>
        Hotels in London
      </h2>
      <div className="row">
        {/* Sidebar for Filters */}
        <div className="col-md-3">
          <div className="card p-3" style={{ width: "70%", marginLeft: "34%" }}>
            <h5>Star rating</h5>
            {[5, 4, 3, 2, 1].map((star, index) => (
              <div className="form-check lh-lg" key={index}>
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">{star} stars</label>
              </div>
            ))}
            <h5 className="mt-3">Review score</h5>
            {["Exceptional 9+", "Very good 8+", "Good 7+", "Pleasant 6+"].map(
              (score, index) => (
                <div className="lh-lg form-check" key={index}>
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">{score}</label>
                </div>
              )
            )}
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
                      <p className="text-warning mb-1">★★★★☆</p>
                      <p className="text-muted">{hotel.discription}</p>
                      <p>
                        <span className="text-primary">{hotel.location}</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 border-start d-flex flex-column justify-content-center align-items-end pe-3">
                    <span className="text-muted">Very good</span>
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
            <p>No hotels found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
