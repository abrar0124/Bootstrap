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
        className="vh-100 d-flex flex-column justify-content-center text-center text-white"
        style={{
          backgroundImage: "url('/Images/back.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        -{/* Content */}
        <div className="container">
          <h1 className="fw-bold">London hotels & places to stay</h1>
          <p className="lead">
            Search to compare prices and discover great deals with free
            cancellation
          </p>

          {/* Search Box */}
          <div className="bg-white p-3 rounded shadow d-flex flex-wrap align-items-center justify-content-between">
            <div className="input-group flex-grow-1 m-2">
              <span className="input-group-text bg-white border-0">
                {/* <i className="bi bi-search"></i> */}
              </span>
              <input
                type="text"
                className="form-control border-0"
                placeholder="Mowbray Court Hotel"
              />
            </div>

            <input type="date" className="form-control m-2 border-0" />
            <input type="date" className="form-control m-2 border-0" />

            <select className="form-select m-2 border-0">
              <option>2 adults, 1 room</option>
              <option>1 adult, 1 room</option>
              <option>3 adults, 2 rooms</option>
            </select>

            <button className="btn btn-primary m-2">Search</button>
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
