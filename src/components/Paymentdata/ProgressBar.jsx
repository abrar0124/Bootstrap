import React from "react";

const ProgressBar = () => {
  return (
    <div className="d-flex justify-content-center gap-5 pb-2">
      <img className="ago" style={{ width: "5%" }} src="/Images/ago.png" />
      <span className="text-primary">Customer Information</span>
      <span>Payment Information</span>
      <span>Booking is Confirmed!</span>
      <span>
        <button
          type="button"
          className="bg-white border border-primary text-primary"
        >
          Sign in
        </button>
      </span>
    </div>
  );
};

export default ProgressBar;
