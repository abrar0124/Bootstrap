import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./customscss.scss";
import Header from "./Header";
const HotelBookingPage = () => {
  return (
    <>
      <Header />
      <div className="p-class">
        {/* Progress Bar */}
        <div className="d-flex justify-content-center gap-5  pb-2">
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
        <div className="bg-color text-center fs-6 text-muted p-3 mt-2">
          We are holding your price...
          <span className=" text-danger fw-bold">00:19:24</span>
        </div>
        {/* Main Content */}
        <div className="container w-75">
          <div className=" row mt-4">
            {/* Left Side - Form */}
            <div className="col-md-7">
              <div className="card p-4 shadow-sm border rounded-3">
                <h5 className="fw-bold">Who's the lead guest?</h5>
                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      className=" fs-6 pl-class form-control form-control-lg"
                      placeholder="First name *"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className=" fs-6 form-control form-control-lg"
                      placeholder="Last name *"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className=" fs-6 form-control form-control-lg"
                      placeholder="Email *"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className=" fs-6 form-control form-control-lg"
                      placeholder="Phone number (optional)"
                    />
                  </div>
                  <p>
                    If you want to enter your email address and do not complete
                    your reservation, we may send you reminders to help you
                    resume your booking
                  </p>
                  <div className="mb-3">
                    <select className=" text-muted form-select form-control-lg">
                      <option>Pakistan</option>
                    </select>
                  </div>
                </form>

                <h5 className="fw-bold mt-4">Special requests</h5>
                <p>Select your preference(s). Subject to availability.</p>
                <form className="bg-color p-3">
                  <p className="fw-bold">Which type of room would you prefer</p>
                  <div className="d-flex gap-4">
                    <div className="form-check">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="roomType"
                        id="nonSmoking"
                      />
                      <label className="form-check-label" htmlFor="nonSmoking">
                        Non-smoking
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="roomType"
                        id="smoking"
                      />
                      <label className="form-check-label" htmlFor="smoking">
                        Smoking
                      </label>
                    </div>
                  </div>
                  <p className="fw-bold">Which bed setup would you prefer</p>
                  <div className="d-flex gap-4 mt-2">
                    <div className="form-check">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="bedType"
                        id="largeBed"
                      />
                      <label className="form-check-label" htmlFor="largeBed">
                        I'd like a large bed
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="bedType"
                        id="twinBeds"
                      />
                      <label className="form-check-label" htmlFor="twinBeds">
                        I'd like twin beds
                      </label>
                    </div>
                  </div>
                </form>
                <p className="fw-bold mt-3 text-primary">
                  Show additional preference
                </p>
              </div>
            </div>
            {/* Right Side - Booking Summary */}
            <div className="col-md-4">
              <div className="card p-3 shadow-sm border rounded-3">
                <h6 className="fw-bold">
                  Britannia International Hotel <br /> Canary Wharf
                </h6>
                <p>⭐⭐⭐⭐</p>
                <p className="text-primary fw-bold ">
                  6.9 Good{" "}
                  <span className="text-muted fw-normal">(2133 reviews)</span>
                </p>
                <p className="fs">163 Marsh Wall, Canary Wharf, London,...</p>
                <p className=" fs text-primary fw-bold ">What,s Nearby</p>
                <div className="bg-color p-3 rounded">
                  <p className=" fs fw-bold">1 x Standard Double Room</p>
                  <p className="fs">20m² | Max: 2 adults</p>
                  <p className=" fs text-success fw-bold">
                    Luggage storage available
                  </p>
                  <p className=" fs text-success fw-bold">24 hours check-in</p>
                  <p>1 double bed | 24-hour check-in</p>
                  <p className=" fs text-danger fw-bold">
                    Hurry! Last room for your dates at this place
                  </p>
                </div>
              </div>
              <div className="shadow p-2 text-center  danger">
                <p className=" fs text-danger fw-bold">
                  Hurry! last room for your dates at this place
                </p>
              </div>
              <div className="shadow p-2 text-center  danger">
                <p className=" fs text-danger ">
                  It,s only <span className="text-danger fw-bold">10</span> days
                  untilss your check{" "}
                  <span className="fw-bold">
                    Rates may rise if you don,t book now
                  </span>
                </p>
              </div>
              <div className="shadow rounded mt-2">
                <div className="bgs rounded">
                  <p>
                    {" "}
                    <img className="g" src="/Images/img38.png" alt="" />
                  </p>
                  <p className="ff p-2">
                    Original Price:{" "}
                    <del className="ms fw-medium">PKR 1,194,374.12</del>
                  </p>

                  <p className=" ff fs p-2 mb-5">
                    Room Price:{" "}
                    <span className="mss fw-medium ">PKR 738,660.49 </span>
                  </p>
                </div>
                <div className="d-flex gap-5 mt-2 justify-content-between">
                  <h5 className="fs md ms-2">Price</h5>
                  <h4 className=" fs md ">PKR 886,392.58</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-class shadow rounded">
          <button className=" text btn btn-primary btn-lg  mt-3">
            NEXT: FINAL STEP
          </button>
          <p className="textt text-muted mt-2">You won’t be charged yet.</p>
        </div>
      </div>
    </>
  );
};
export default HotelBookingPage;
