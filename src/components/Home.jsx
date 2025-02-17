import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Gallery from "./Gallery";
import Unitedkingdom from "./Unitedkingdom";
import London from "./Londoncompo";
import Accomos from "./Accomos";
import Cheapplace from "./Cheapplace";
import Fourstar from "./Fourstar";
import Header from "./Header";
import Luxuryhotel from "./Luxuryhotel";
import Upcomingevent from "./Upcomingevents";
import Popularhotel from "./Popularhotel";
import Reviews from "./Reviews";
import Londonbreakfast from "./Londonbreakfast";
import Accordioncompo from "./Accordioncompo";
import Travels from "./Travels";
import Newkingdom from "./Newkingdom";
import Textbootstrap from "./Textbootstrap";
import Bootstrapfooter from "./Bootstrapfooter1";
import Bootstrapfooter2 from "./Bootstrapfooter2";
import Bootstrapfooter3 from "./Bootstrapfooter3";

const Home = () => {
  return (
    <>
      <Header />

      <div
        className="vh-100 d-flex flex-column justify-content-center text-center "
        style={{
          backgroundImage: "url('/Images/back.jpg')", // Replace with your uploaded image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <h1 className="fw-bold text-white">London hotels & places to stay</h1>
          <p className="text-white">
            Search to compare prices and discover great deals with free
            cancellation
          </p>

          {/* Search Box */}
          <div className="bg-light  p-2 d-flex flex-wrap align-items-center justify-content-between gap-2">
            {/* Location Input */}
            <div className="input-group " style={{ flex: "1 1 250px" }}>
              <input
                type="text"
                className="form-control border p-2 fs-4"
                placeholder="London"
                style={{ fontSize: "14px" }}
              />
            </div>

            <div
              className="btn  btn-lg btn-white d-flex align-items-center "
              style={{
                flex: 1,
              }}
            >
              <input type="date" className="form-control m-2 border-0" />

              <input type="date" className="form-control m-2 border-0" />
            </div>

            <select
              className=" p-3 btn  d-flex bg-white  m-2 border"
              style={{
                flex: "1 1 180px",
                border: "1px solid #ddd",
              }}
            >
              <option>2 adults, 1 room</option>
              <option>1 adult, 1 room</option>
              <option>3 adults, 2 rooms</option>
            </select>

            {/* Search Button */}
            <button
              className="btn btn-primary"
              style={{ borderRadius: "8px", padding: "10px 20px" }}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <Gallery />
      <Unitedkingdom />
      <London />
      <Accomos />
      <Cheapplace />
      <Fourstar />
      <Luxuryhotel />
      <Upcomingevent />
      <Popularhotel />
      <Reviews />
      <Londonbreakfast />
      <Accordioncompo />
      <Travels />
      <Newkingdom />
      <Textbootstrap />
      <Bootstrapfooter />
      <Bootstrapfooter2 />
      <Bootstrapfooter3 />
    </>
  );
};

export default Home;
