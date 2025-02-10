import Header from "./Header";

function Modal() {
  return (
    <>
      <Header />
      {/* Model */}
      <button
        type="button"
        class="btn btn-primary p-3 fs-5 mt-5 ms-5"
        data-bs-toggle="modal"
        data-bs-target="#modalExample"
      >
        Click here for open dialog box
      </button>
      <div class="modal" id="modalExample">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5">Modal</h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div class="modal-body">My name is Saba Mukhtar.</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Close modal
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Modal;
