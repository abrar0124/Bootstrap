import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setSelectedCountry } from "../Redux/Hotelslice"; // ✅ Import kiya
import "./customscss.scss";

function Hommepage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.hotels.products);
  return (
    <div className="c">
      <h2 className="cv">Top destinations</h2>
      <p className="j text-danger">
        Discover the beauty of this world: experience the best cities to feed
        your wanderlust
      </p>
      <div className="d-flex flex-wrap gap-5 d">
        {products.map((product) => (
          <div key={product.id} className="col-md-3">
            <Link
              to="/Gallery"
              onClick={() => {
                dispatch(setSelectedCountry(product.Country));
                console.log("Selected Country: ", product.Country); // ✅ Check Redux update
              }}
              className="text-decoration-none"
            >
              <div className="card">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: "250px" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text text-muted">{product.Country}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hommepage;
