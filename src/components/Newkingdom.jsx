import React from "react";
import Text from "./Text";

const hotelsData = [
  { name: "Chelsea", count: 2689 },
  { name: "Hyde Park", count: 2578 },
  { name: "Kings Cross St. Pancras", count: 1814 },
  { name: "Lambeth", count: 1681 },
  { name: "Greater London North", count: 1579 },
  { name: "Greater London East", count: 1559 },
  { name: "Canary Wharf", count: 1545 },
  { name: "Tower Hamlets", count: 1443 },
  { name: "West End Soho", count: 956 },
  { name: "Shoreditch", count: 920 },
  { name: "Greenwich", count: 920 },
  { name: "Greater London South East", count: 911 },
  { name: "Hammersmith", count: 766 },
  { name: "Notting Hill", count: 765 },
  { name: "Croydon", count: 764 },
  { name: "Wandsworth", count: 755 },
  { name: "Mayfair", count: 393 },
  { name: "Slough", count: 363 },
  { name: "Wimbledon", count: 328 },
  { name: "Greater London South West", count: 298 },
  { name: "West Kensington", count: 280 },
  { name: "Gatwick Airport", count: 274 },
  { name: "Edgware", count: 216 },
  { name: "Stansted Airport", count: 212 },
];

const Newkingdom = () => {
  return (
    <>
      <Text
        type={"h1"}
        content={"Other popular destinations in United Kingdom"}
      />
      <div className="container mt-4">
        <div className="row g-3">
          {hotelsData.map((hotel, index) => (
            <div key={index} className="col-md-4 ">
              <p>
                <a href="#" className="text-primary text-decoration-none">
                  {hotel.name}
                </a>{" "}
                - {hotel.count} hotels
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Newkingdom;
