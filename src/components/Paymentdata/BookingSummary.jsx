import React from "react";
const BookingSummary = () => {
  return (
    <>
      <div className="card p-3">
        <div className="d-flex align-items-center">
          <div>
            <img
              className="rounded"
              src="/Images/italy.jpeg"
              alt="Hotel"
              style={{ width: "85%", height: "250px" }}
            />
          </div>
          <div>
            <h6 className="fw-bold fsize">
              Britannia International Hotel Canary Wharf
            </h6>
            <p className="ds">⭐⭐⭐⭐</p>
            <p className="ds text-primary fw-bold">
              6.9 Good{" "}
              <span className="ds text-muted fw-normal">(2133 reviews)</span>
            </p>
            <p className="ds">163 Marsh Wall, Canary Wharf, London,...</p>
            <p className="ds text-primary fw-bold">What's Nearby</p>
          </div>
        </div>

        <div className="bg-color p-2 mt-2 rounded">
          <div className="row align-items-center mt-3">
            <div className="col-md-6">
              <img
                className="w-75 rounded"
                src="/Images/newbed.jpeg"
                alt="Room"
              />
            </div>
            <div className="p-1 rounded col-md-6">
              <p className="fs fw-bold">1 x Standard Double Room</p>
              <p className="fs">20m² | Max: 2 adults</p>
            </div>
          </div>
          <p className="ds text-success fw-bold">Luggage storage available</p>
          <p className="ds text-success fw-bold">24 hours check-in</p>
          <p>1 double bed | 24-hour check-in</p>
          <p className="ds text-danger fw-bold">
            Hurry! Last room for your dates at this place
          </p>
        </div>

        <div className="p-2 text-center danger">
          <p className="fs text-danger fw-bold">
            Hurry! Last room for your dates at this place
          </p>
        </div>

        <div className="p-2 text-center danger">
          <p className="fs text-danger">
            It's only <span className="text-danger fw-bold">10</span> days until
            your check-in.{" "}
            <span className="fw-bold">
              Rates may rise if you don’t book now.
            </span>
          </p>
        </div>

        <div className="rounded mt-2">
          <div className="bgs rounded">
            <p>
              <img className="g" src="/Images/img38.png" alt="Discount" />
            </p>
            <p className="d-flex justify-content-between  flex-wrap  p-2">
              Real Price: <del className="ms fw-medium">1,194,374.12</del>
            </p>
            <p className="d-flex  justify-content-between  flex-wrap  fs p-2 mb-5">
              Price: <span className="mss fw-medium">738,660.49</span>
            </p>
          </div>

          <div className="d-flex gap-5 mt-2 flex-wrap justify-content-between">
            <h5 className="fs md ms-2">Price</h5>
            <h4 className="fs md">PKR 886,392.58</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingSummary;
