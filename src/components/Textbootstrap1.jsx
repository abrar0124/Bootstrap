import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Text from "./Text";

const Textbootstrap1 = () => {
  return (
    <>
      <div className="container mt-4">
        <div className="my-4">
          <Text
            type={"h3"}
            content={"Top Reasons to Visit London: A Comprehensive Guide"}
          />
          <Text
            type={"p"}
            content={
              <>
                London is a city with a rich history and culture, and there are
                many interesting facts about this vibrant metropolis. Did you
                know that London was the first city in the world to <br />
                have an underground railway system? The London Underground, also
                known as the Tube, is one of the most extensive and efficient
                public transport networks in the world.
                <br /> Another fun fact is that London has over 170 museums,
                including the British Museum, the National Gallery, and the Tate
                Modern. London is also home to the world's oldest public <br />
                Modern. London is also home to the world's oldest public zoo,
                the London Zoo, which opened in 1828. If you're a fan of the
                royal family, you'll be pleased to know that London has over 800
                years of royal history, with the Tower of London being one of
                the most famous landmarks. Other fun facts include the fact that
              </>
            }
          />
        </div>
      </div>
    </>
  );
};

export default Textbootstrap1;
