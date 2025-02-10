import Header from "./Header";

function Carousel() {
  return (
    <>
      <Header />
      {/* Carousel */}
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/Images/img1.webp" class="w-100" />
          </div>
          <div class="carousel-item">
            <img src="/Images/img2.webp" class="w-100" />
          </div>
          <div class="carousel-item">
            <img src="/Images/img3.png" class="w-100" />
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            {" "}
            <span class="carousel-control-prev-icon"></span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            {" "}
            <span class="carousel-control-prev-icon"></span>
          </button>
        </div>
      </div>
    </>
  );
}
export default Carousel;
