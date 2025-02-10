import Header from "./Header";

function Accordion() {
  return (
    <>
      <Header />
      {/* accordion */}
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseone"
          >
            button1
          </button>
          <div
            className="accordion-collapse collapse"
            id="collapseone"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">saba</div>
          </div>
        </div>
        <div class="accordion-item">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsetwo"
          >
            button2
          </button>
          <div
            className="accordion-collapse collapse"
            id="collapsetwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">saba</div>
          </div>
        </div>
        <div class="accordion-item">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsethree"
          >
            button3
          </button>
          <div
            className="accordion-collapse collapse"
            id="collapsethree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">saba</div>
          </div>
        </div>
        <div class="accordion-item">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsefour"
          >
            button4
          </button>
          <div
            className="accordion-collapse collapse"
            id="collapsefour"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">saba</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Accordion;
