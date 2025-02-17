import Text from "./Text";
function Unitedkingdom() {
  return (
    <>
      <div
        className=" text-muted  mt-5"
        style={{ marginLeft: "14%", width: "66%" }}
      >
        {/* <p>Fast facts about Kuala Lumpur, Malaysia</p> */}
        <Text type="p" content="Fast facts about Kuala Lumpur, Malaysia" />
        <div className="d-flex gap-5 p-2 bg-light ">
          <div>
            {/* <p>Accommodations</p> */}
            <Text type="p" content="Accommodations" />
          </div>
          <div>
            <Text type="p" content="Products" />
          </div>
        </div>
        <div className="d-flex gap-5 p-1 ">
          <div>
            <p>Popular hotel</p>
          </div>
          <div>
            <p>Zedwell Piccadilly</p>
          </div>
        </div>
        <div className="d-flex gap-5 p-2 bg-light">
          <div>
            <p>Popular area</p>
          </div>
          <div>
            <p>Chelsea</p>
          </div>
        </div>
        <div className="d-flex gap-5 p-1">
          <div>
            <p>Nightly rates from</p>
          </div>
          <div>
            <p> £9</p>
          </div>
        </div>
        <div className="d-flex gap-5 p-2 bg-light">
          <div>
            <p>Airport</p>
          </div>
          <div>
            <p>Heathrow Airport</p>
          </div>
        </div>
        <div className="d-flex gap-5 p-2 bg-light">
          <div>
            <p>Reasons to visit</p>
          </div>
          <div>
            <p>Sightseeing, Shopping, Museum & arts</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Unitedkingdom;
