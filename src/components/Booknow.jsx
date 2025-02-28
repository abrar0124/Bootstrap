import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./customscss.scss";
import Header from "./Header";
import ProgressBar from "./Paymentdata/ProgressBar";
import BookingForm from "./Paymentdata/BookingForm";
import BookingSummary from "./Paymentdata/BookingSummary";

const HotelBookingPage = () => {
  return (
    <>
      <Header />
      <div className="p-class">
        <ProgressBar />
        <div className="bg-color text-center fs-6 text-muted p-3 mt-2">
          We are holding your price...
          <span className=" text-danger fw-bold">00:19:24</span>
        </div>
        <div className="container w-75">
          <div className="row mt-4">
            <div className="col-md-7">
              <BookingForm />
            </div>
            <div className="col-md-4">
              <BookingSummary />
            </div>
          </div>
        </div>
        <div className="max-class border rounded text-center">
          <button className="cc mt-2 btn btn-primary btn-lg">
            NEXT: FINAL STEP
          </button>
          <p className="textt text-muted mt-2">You won’t be charged yet.</p>
        </div>
      </div>
    </>
  );
};

export default HotelBookingPage;
