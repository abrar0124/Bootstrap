import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./customscss.scss";
import Text from "./Text";

const hotels = [
  [
    "Belgrave Hotel Oval",
    "Thistle Marble Arch",
    "The Cumberland London",
    "Regency London The Churchill",
    "Park Plaza Westminster Bridge Hotel",
    "London House Hotel",
    "Park International Hotel",
    "Flemings Mayfair - Small Luxury Hotels of the World",
    "Kings Cross Inn Hotel",
    "Pullman London St Pancras Hotel",
  ],
  [
    "B'Shan Apartments",
    "K+K Hotel George Kensington",
    "Heeton Concept Hotel - Luma Hammersmith",
    "Marlin Aparthotel Waterloo",
    "The Z Hotel Piccadilly",
    "Park Plaza London Riverbank",
    "Landmark London Hotel",
    "The Westbourne Hyde Park",
    "Queens Park Hotel",
    "DoubleTree by Hilton Hotel London - Victoria",
  ],
  [
    "Park Avenue Bayswater Inn Hyde Park",
    "Shangri-La The Shard, London",
    "Myhotel Bloomsbury",
    "Grand Plaza Serviced Apartments",
    "Point A Hotel London Kings Cross - St. Pancras",
    "The Z Hotel Victoria",
    "The Pilgrim",
    "The Stafford Hotel London",
    "Corus Hotel Hyde Park",
    "Citadines Trafalgar Square London",
  ],
  [
    "Thistle London Trafalgar Square",
    "La Suite West Hyde Park",
    "Karma Sanctum Soho Hotel",
    "Hilton London Metropole Hotel",
    "Leonardo Royal Hotel London St Paul",
    "The Westminster London, Curio Collection by Hilton",
    "The Edwin Hotel",
    "DoubleTree by Hilton Hotel London - Tower of London",
    "The Tower Hotel London",
    "Z Hotel at Gloucester Place",
  ],
];

const Bootstrapfooter2 = () => {
  return (
    <div className="container mt-4">
      <Text type={"h2"} content={"Popular London Hotels"} />
      <div className="row">
        {hotels.map((column, index) => (
          <div className="col-md-3" key={index}>
            <ul className="list-unstyled">
              {column.map((hotel) => (
                <p className="custom-color">{hotel}</p>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bootstrapfooter2;
