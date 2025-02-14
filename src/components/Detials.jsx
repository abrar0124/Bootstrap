// // // import React from "react";
// // // import { Link, useLocation } from "react-router-dom";
// // // import "bootstrap/dist/css/bootstrap.min.css";

// // // const hotel = {
// // //   name: "Britannia International Hotel Canary Wharf",
// // //   location: "Canary Wharf, London",
// // //   images: [
// // //     "/Images/hotel1.webp",
// // //     "/Images/hotel2.webp",
// // //     "/Images/hotel3.jpg",
// // //     "/Images/hotel4.webp",
// // //     "/Images/hotel5.webp",
// // //     "/Images/hotel6.jpg",
// // //     "/Images/hotel7.webp",
// // //     "/Images/hotel8.jpg",
// // //   ],
// // // };

// // // const Details = () => {
// // //   const location = useLocation();
// // //   const mainImage = location.state?.mainImage || hotel.images[0]; // Default to first image if no state

// // //   return (
// // //     <div className="container mt-4">
// // //       {/* Breadcrumb */}
// // //       <nav aria-label="breadcrumb">
// // //         <ol className="breadcrumb">
// // //           <li className="breadcrumb-item">
// // //             <Link to="/">Home</Link>
// // //           </li>
// // //           <li className="breadcrumb-item">
// // //             <Link to="/">United Kingdom Hotels</Link>
// // //           </li>
// // //           <li className="breadcrumb-item">
// // //             <Link to="/">London Hotels</Link>
// // //           </li>
// // //           <li className="breadcrumb-item active" aria-current="page">
// // //             {hotel.name}
// // //           </li>
// // //         </ol>
// // //       </nav>

// // //       {/* Image Gallery */}
// // //       <div className="d-flex  gap-5">
// // //         {/* Main Image */}
// // //         <div className="">
// // //           <img
// // //             src={mainImage}
// // //             alt="Main Hotel"
// // //             className="img-fluid rounded shadow "
// // //           />
// // //         </div>

// // //         {/* Gallery Images with Flexbox */}

// // //         <div className="col-md-4">
// // //           <div className="d-flex flex-wrap gap-5 w-100">
// // //             {hotel.images.slice(1, 11).map((img, index) => (
// // //               <div key={index} className=" img-fluid w-25 ">
// // //                 <img
// // //                   src={img}
// // //                   alt="Gallery"
// // //                   className="img-fluid rounded shadow "
// // //                   style={{ height: "100px", objectFit: "cover" }}
// // //                 />
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Back Button */}
// // //       <Link to="/" className="btn btn-secondary mt-3">
// // //         🔙 Back to Gallery
// // //       </Link>
// // //     </div>
// // //   );
// // // };

// // // export default Details;

// // import React from "react";
// // import { Link, useLocation } from "react-router-dom";
// // import "bootstrap/dist/css/bootstrap.min.css";

// // const Details = () => {
// //   const location = useLocation();
// //   const hotel = location.state?.hotel;

// //   if (!hotel) return <h2 className="text-center">No hotel data available</h2>;

// //   return (
// //     <div className="container mt-4">
// //       <nav aria-label="breadcrumb">
// //         <ol className="breadcrumb">
// //           <li className="breadcrumb-item">
// //             <Link to="/">Home</Link>
// //           </li>
// //           <li className="breadcrumb-item">
// //             <Link to="/">United Kingdom Hotels</Link>
// //           </li>
// //           <li className="breadcrumb-item">
// //             <Link to="/">London Hotels</Link>
// //           </li>
// //           <li className="breadcrumb-item active" aria-current="page">
// //             {hotel.name}
// //           </li>
// //         </ol>
// //       </nav>

// //       <div className="d-flex gap-5">
// //         <div>
// //           <img
// //             src={hotel.mainImage}
// //             alt="Main Hotel"
// //             className="img-fluid rounded shadow"
// //           />
// //         </div>

// //         <div className="col-md-4">
// //           <div className="d-flex flex-wrap gap-5 w-100">
// //             {hotel.gallery.map((img, index) => (
// //               <div key={index} className="img-fluid w-25">
// //                 <img
// //                   src={img}
// //                   alt="Gallery"
// //                   className="img-fluid rounded shadow"
// //                   style={{ height: "100px", objectFit: "cover" }}
// //                 />
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>

// //       <Link to="/" className="btn btn-secondary mt-3">
// //         🔙 Back to Gallery
// //       </Link>
// //     </div>
// //   );
// // };

// // export default Details;

// import React from "react";
// import { useParams } from "react-router-dom";
// import hotels from "./Hotels"; // Import the hotels data

// const Details = () => {
//   const { id } = useParams(); // Get the ID from URL
//   const hotel = hotels.find((h) => h.id === parseInt(id)); // Find hotel by ID

//   if (!hotel) {
//     return <h2 className="text-center mt-5">Hotel not found!</h2>;
//   }

//   return (
//     <div className="container mt-4">
//       <h2>{hotel.name}</h2>
//       <p>Location: {hotel.location}</p>
//       <img src={hotel.mainImage} alt={hotel.name} className="img-fluid" />
//       <img src={hotel.gallery} alt={hotel.name} className="img-fluid" />
//     </div>
//   );
// };

// export default Details;

import React from "react";
import { useParams } from "react-router-dom";
import hotels from "./Hotels"; // Import the hotels data

const Details = () => {
  const { id } = useParams(); // Get the ID from URL
  const hotel = hotels.find((h) => h.id === parseInt(id)); // Find hotel by ID

  if (!hotel) {
    return <h2 className="text-center mt-5">Hotel not found!</h2>;
  }

  return (
    <>
      <div className="container mt-4">
        <div className="d-flex">
          {/* Main Image */}
          <img
            src={hotel.mainImage}
            alt={hotel.name}
            className="img-fluid rounded  mt-2"
            style={{ width: "80%", maxHeight: "380px", objectFit: "cover" }}
          />

          {/* Gallery Images */}

          <div>
            {hotel.gallery.map((image, index) => (
              <img
                key={index}
                src={image}
                className="img-fluid rounded  p-2  shadow-lg"
                style={{ width: "32%", height: "200px", borderRadius: "30px" }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
