import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./customscss.scss";

const Bootstrapfooter3 = () => {
  return (
    <div className=" custom-footer footer  text-light text-center py-4">
      <div className="container">
        <p>
          All material herein © 2005-2025 Agoda Company Pte. Ltd. All Rights
          Reserved. <br />
          Agoda is part of Booking Holdings Inc, the world leader in online
          travel & related services.
        </p>

        <div className="row justify-content-center">
          <div className="col-6 col-md-2">
            <img
              src="/Images/agoda.jpeg"
              alt="Agoda"
              className="img-fluid"
              style={{ height: "60px" }}
            />
          </div>
          <div className="col-6 col-md-2">
            <p className="custom-p ">Priceline.com</p>
          </div>
          <div className="col-6 col-md-2">
            <img
              src="/Images/kayak.png"
              className="img-fluid mt-3"
              style={{ height: "20px" }}
            />
          </div>
          <div className="col-6 col-md-2">
            <p className="fw-medium mt-2">Booking.com</p>
          </div>
          <div className="col-6 col-md-2">
            <p className="fw-medium mt-2">Opentable</p>
          </div>
        </div>

        <p>sg-pc-6g-geo-web-user-5956d79776-kvrpk</p>
      </div>
    </div>
  );
};

export default Bootstrapfooter3;
