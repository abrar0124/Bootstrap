import Text from "./Text";
function Unitedkingdom() {
  return (
    <>
      <div
        className=" text-muted  mt-5"
        style={{ marginLeft: "14%", width: "66%" }}
      >
        <Text type="p" content="Fast facts about Kuala Lumpur, Malaysia" />
        <div className="d-flex gap-5 p-2 bg-light ">
          <div>
            <Text type="p" content="Accommodations" />
          </div>
          <div>
            <Text type="p" content="Products" />
          </div>
        </div>
        <div className="d-flex gap-5 p-1 ">
          <div>
            <Text type={"p"} content={"Popular hotel"} />
          </div>
          <div>
            <Text type={"p"} content={"Zedwell Piccadilly"} />
          </div>
        </div>
        <div className="d-flex gap-5 p-2 bg-light">
          <div>
            <Text type={"p"} content={"Popular area"} />
          </div>
          <div>
            <Text type={"p"} content={"Chelsea"} />
          </div>
        </div>
        <div className="d-flex gap-5 p-1">
          <div>
            <Text type={"p"} content="Nightly rates from" />
          </div>
          <div>
            <Text type={"p"} content={"£9"} />
          </div>
        </div>
        <div className="d-flex gap-5 p-2 bg-light">
          <div>
            <Text type={"p"} content={"Airport"} />
          </div>
          <div>
            <Text type={"p"} content={"Heathrow Airport"} />
          </div>
        </div>
        <div className="d-flex gap-5 p-2 bg-light">
          <div>
            <Text type={"p"} content={"Reasons to visit"} />
          </div>
          <div>
            <Text type={"p"} content={"Sightseeing, Shopping, Museum & arts"} />
          </div>
        </div>
      </div>
    </>
  );
}
export default Unitedkingdom;
