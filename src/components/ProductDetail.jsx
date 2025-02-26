import { useSelector } from "react-redux";

function ProductDetail() {
  const selectedProductName = useSelector(
    (state) => state.hotels.selectedProduct
  );
  const products = useSelector((state) => state.hotels.products);
  const filteredProducts = products.filter(
    (p) => p.name === selectedProductName
  );
  if (!selectedProductName) {
    return <h2 className="text-center mt-5">No product selected</h2>;
  }
  return (
    <div className="container mt-4">
      <h2>{selectedProductName} Details</h2>
      <div className="row justify-content-center">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="col-md-4 mb-3">
              <div className="card">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products found for {selectedProductName}</p>
        )}
      </div>
    </div>
  );
}

export default ProductDetail;
