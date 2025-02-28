import React from "react";

const BookingForm = () => {
  return (
    <>
      <div className="card p-4 border rounded-3">
        <h5 className="fw-bold">Who's the lead guest?</h5>
        <form>
          <div className="mb-3">
            <input
              type="text"
              className="fs-6 form-control form-control-lg"
              placeholder="First name *"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="fs-6 form-control form-control-lg"
              placeholder="Last name *"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="fs-6 form-control form-control-lg"
              placeholder="Email *"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="fs-6 form-control form-control-lg"
              placeholder="Phone number (optional)"
            />
          </div>
          <p>
            If you enter your email and do not complete your reservation, we may
            send you reminders.
          </p>
          <div className="mb-3">
            <select className="text-muted form-select form-control-lg">
              <option>Pakistan</option>
            </select>
          </div>
        </form>

        <h5 className="fw-bold mt-4">Special requests</h5>
        <p>Select your preference(s). Subject to availability.</p>
        <form className="bg-color p-3">
          <p className="fw-bold">Which type of room would you prefer?</p>
          <div className="d-flex flex-wrap gap-4">
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
          <p className="fw-bold">Which bed setup would you prefer?</p>
          <div className="d-flex flex-wrap gap-4 mt-2">
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
        <p className="fw-bold mt-3 text-primary">Show additional preference</p>
      </div>
      <p className="mt-2 text-end text-danger fw-bold">
        Hurry! Our last room for your dates.
      </p>
    </>
  );
};

export default BookingForm;
