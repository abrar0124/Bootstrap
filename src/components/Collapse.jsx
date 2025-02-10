import Header from "./Header";

function Coullapse() {
  return (
    <>
      <Header />
      <p className="d-inline-flex gap-1">
        <a
          href="#collapseExample"
          className="btn btn-primary"
          data-bs-toggle="collapse"
        >
          Link 1
        </a>
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsExample2"
        >
          Button
        </button>
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">Hye there my name is Saba Mukhtar</div>
      </div>
      <div className="collapse" id="collapseExample2">
        <div className="card card-body">Hye there my name is Saba Mukhtar</div>
      </div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
      >
        Collapse1
      </button>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample2"
      >
        Collapse2
      </button>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="collapse"
        data-bs-target=".multi-collapse"
      >
        multi collapse
      </button>
      <div className="d-flex gap-4">
        <div id="collapseExample" className="collapse multi-collapse">
          <div className="card card-body" style={{ width: "300px" }}>
            Hye there I am Saba.
          </div>
        </div>
        <div id="collapseExample2" className="collapse multi-collapse">
          <div className="card card-body" style={{ width: "300px" }}>
            My brother name is Abrar Hussain
          </div>
        </div>
      </div>
    </>
  );
}

export default Coullapse;
