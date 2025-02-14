import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Textbootstrap1 from "./Textbootstrap1";
import Textbootstrap2 from "./Textbootstrap2";
import Textbootstrap3 from "./Textbootstrap3";
import Textbootstrap4 from "./Textbootstrap4";

const Textbootstrap = () => {
  return (
    <>
      <div className="container mt-4">
        <p className="fs-3 mt-5">More about London</p>

        <div className="my-4">
          <p className=" fs-4 fw-medium">
            10 Fun Facts About London, United Kingdom
          </p>
          <p>
            London is a city with a rich history and culture, and there are many
            interesting facts about this vibrant metropolis. Did you know that
            London was the first city in the world to <br />
            have an underground railway system? The London Underground, also
            known as the Tube, is one of the most extensive and efficient public
            transport networks in the world.
            <br /> Another fun fact is that London has over 170 museums,
            including the British Museum, the National Gallery, and the Tate
            Modern. London is also home to the world's oldest public <br />
            zoo, the London Zoo, which opened in 1828. If you're a fan of the
            royal family, you'll be pleased to know that London has over 800
            years of royal history, with the Tower of London <br /> being one of
            the most famous landmarks. Other fun facts include the fact that
            London has over 8 million trees, making it one of the greenest
            cities in the world, and that the city <br /> has over 300 languages
            spoken, making it one of the most diverse cities in the world.
          </p>
        </div>
      </div>
      <Textbootstrap1 />
      <Textbootstrap2 />
      <Textbootstrap3 />
      <Textbootstrap4 />
    </>
  );
};

export default Textbootstrap;
