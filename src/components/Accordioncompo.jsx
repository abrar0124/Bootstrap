import Text from "./Text";

function Accordioncompo() {
  return (
    <>
      <div className=" d-flex justify-content-center gap-5 ">
        <div className=" accordion w-75" style={{ marginLeft: "10%" }}>
          <Text type="p" content="Frequently asked Questions" />
          <div className="accordion-item">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
            >
              What's the typical price of a hotel in London tonight?
            </button>

            <div id="collapseOne" className="accordion-collapse collapse">
              <div className="accordion-body">
                The average price for a 3-star hotel in London
                <br /> this evening is USD 113. The typical price for a 4-star
                resort in London
                <br /> this evening is USD 184. The typical price for a 5-star
                hotel
                <br /> in London this evening is USD 483.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
            >
              What are the most suitable properties around London intended for
              solo travelers?
            </button>

            <div id="collapseTwo" className="accordion-collapse collapse">
              <div className="accordion-body">
                The average price for a 3-star hotel in London
                <br /> this evening is USD 113. The typical price for a 4-star
                resort in London
                <br /> this evening is USD 184. The typical price for a 5-star
                hotel
                <br /> in London this evening is USD 483.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
            >
              What hotels found in London are exceptionally rated for value for
              money?
            </button>
            <div id="collapseThree" className="accordion-collapse collapse">
              <div className="accordion-body">
                The average price for a 3-star hotel in London
                <br /> this evening is USD 113. The typical price for a 4-star
                resort in London
                <br /> this evening is USD 184. The typical price for a 5-star
                hotel
                <br /> in London this evening is USD 483.
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            className="img-fluid"
            src="/Images/londonbuild.jpg"
            style={{ height: "70%" }}
          />
        </div>
      </div>
    </>
  );
}

export default Accordioncompo;
