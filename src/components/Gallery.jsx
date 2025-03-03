import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Text from "./Text";
import Filters from "./Galleryparts/Filters";
import SortingButtons from "./Galleryparts/SortingButtons";
import HotelCard from "./Galleryparts/HotelCard";

const Gallery = () => {
  const hotelsData = [
    {
      id: 1,
      name: "Britannia International Hotel ",
      Country: "italy",
      // place: "Canary Wharf",
      Star: "⭐⭐⭐⭐⭐",
      location: "Canary Wharf,",
      rating: 6.9,
      reviews: 2109,
      price: 11000, // ✅ Numeric Price
      availableDates: "2025-02-28", // ✅ Correct Format
      discription:
        "Great place to stay - we booked it on a chance as we needed cheap accommodation on a Monday night near to Brixton Academy - it's a short walk from a tube",
      mainImage: "/Images/hotel1.webp",
      gallery: [
        "/Images/hotel1.webp",
        "/Images/hotel2.webp",
        "/Images/hotel4.webp",
        "/Images/hotel5.webp",
        "/Images/hotel7.webp",
        "/Images/hotel8.jpg",
        "/Images/dover4.jpg",
        "/Images/dover7.jpg",
      ],
    },
    {
      id: 2,
      name: "Mowbray Court Hotel",
      Country: "france",
      Star: "⭐⭐⭐⭐",
      location: "St Katharine's",
      rating: 8.2,
      reviews: 3405,
      price: 9000, // ✅ Numeric Price
      availableDates: "2025-03-01",

      discription:
        "Can't beat this for the price in a London hotel. Booking through Agoda considerably cheaper than other sites",
      mainImage: "/Images/Courthotel.webp",
      gallery: [
        "/Images/hotel10.webp",
        "/Images/hotel11.webp",
        "/Images/hotel12.webp",
        "/Images/hotel13.webp",
        "/Images/hotel14.jpg",
        "/Images/hotel15.webp",
        "/Images/hos6.jpg",
        "/Images/hos7.jpg",
      ],
    },
    {
      id: 3,
      name: "Modern & Minimalistic 2B Flat",
      Country: "germany",

      Star: "⭐⭐⭐",
      location: "St Katharine's, London",
      rating: 8.2,
      reviews: 3405,
      price: 10000, // ✅ Numeric Price
      availableDates: "2025-03-02",

      discription:
        "The customer service was really amazing! Specially a lady Aurélie made the difference, she was always smiling and interacting with every guest and she was",
      mainImage: "/Images/bed1.webp",
      gallery: [
        "/Images/bed2.webp",
        "/Images/bed3.webp",
        "/Images/bed4.webp",
        "/Images/bed5.webp",
        "/Images/bed6.webp",
        "/Images/bed9.webp",
        "/Images/hotel48.jpg",
        "/Images/hotel40.jpg",
      ],
    },
    {
      id: 4,
      name: "Modern One Bedroom Apartment",
      Country: "italy",

      // place: "in Holloway Road",
      Star: "⭐⭐",
      location: "St Katharine's, London",
      rating: 8.2,
      reviews: 3405,
      price: 7000, // ✅ Numeric Price
      availableDates: "2025-03-03",

      discription: "Great value for money",
      mainImage: "/Images/bedroom.jpg",
      gallery: [
        "/Images/bed2.webp",
        "/Images/hotel19.jpg",
        "/Images/hotel20.jpg",
        "/Images/hotel21.jpg",
        "/Images/hotel17.jpg",
        "/Images/hotel16.jpg",
        "/Images/hotel39.jpg",
        "/Images/hotel40.jpg",
      ],
    },
    {
      id: 5,
      name: "Holiday Inn Express London",
      Country: "france",

      // place: "- Dartford",
      Star: "⭐",
      location: "St Katharine's, London",
      rating: 8.2,
      reviews: 3405,
      price: 8000, // ✅ Numeric Price
      availableDates: "2025-03-04",

      discription:
        "This time, I wanted to find out nice hostel in London. I did use first time this hostel. As I did operation after, I was really worried about . But this hostel was great",
      mainImage: "/Images/holidays.webp",
      gallery: [
        "/Images/hotel10.webp",
        "/Images/hotel22.webp",
        "/Images/hotel23.webp",
        "/Images/hotel24.jpg",
        "/Images/hotel25.webp",
        "/Images/hotel26.jpg",
        "/Images/hotel31.webp",
        "/Images/hotel34.jpg",
      ],
    },
    {
      id: 6,
      name: "PubLove @ The White Ferry",
      Country: "germany",

      // place: "Victoria",
      Star: "⭐⭐⭐⭐⭐",
      location: "St Katharine's",
      rating: 8.2,
      reviews: 3405,
      price: 4000, // ✅ Numeric Price
      availableDates: "2025-03-05",

      discription: "The hotel room is big, great location and lovely staff",
      mainImage: "/Images/whiteferry.webp",
      gallery: [
        "/Images/hotel10.webp",
        "/Images/hotel28.webp",
        "/Images/hotel29.webp",
        "/Images/hotel30.jpg",
        "/Images/hotel31.webp",
        "/Images/hotel34.jpg",
        "/Images/hotel23.webp",
        "/Images/hotel24.jpg",
      ],
    },
    {
      id: 7,
      name: "Queens Park Hotel",
      Country: "italy",
      Star: "⭐⭐⭐⭐",
      location: "St Katharine's,",
      rating: 8.2,
      reviews: 3405,
      price: 5000, // ✅ Numeric Price
      availableDates: "2025-03-06",

      discription:
        "Location was superb, staff was friendly and helpful, food in the pub was very good. Rooms are clean, with door locks and lockers for your gear while out for the",
      mainImage: "/Images/Queens.webp",
      gallery: [
        "/Images/hotel10.webp",
        "/Images/hotel35.jpg",
        "/Images/hotel37.jpg",
        "/Images/hotel38.jpg",
        "/Images/hotel39.jpg",
        "/Images/hotel40.jpg",
        "/Images/hotel17.jpg",
        "/Images/hotel16.jpg",
      ],
    },
    {
      id: 8,
      name: "Safestay London Elephant",
      Country: "france",

      // place: "and Castle",
      Star: "⭐⭐⭐",
      location: "St Katharine's, London",
      rating: 8.2,
      reviews: 3405,
      price: 1000, // ✅ Numeric Price
      availableDates: "2025-03-07",

      mainImage: "/Images/hotel41.webp",
      gallery: [
        "/Images/hotel46.jpg",
        "/Images/hotel42.webp",
        "/Images/hotel37.jpg",
        "/Images/hotel43.webp",
        "/Images/hotel48.jpg",
        "/Images/hotel40.jpg",
        "/Images/bed2.webp",
        "/Images/bed3.webp",
      ],
    },
    {
      id: 9,
      name: "ibis budget London Heathrow ",
      Country: "germany",

      // place: "Central",
      Star: "⭐⭐",
      location: "St Katharine's  London",
      rating: 8.2,
      reviews: 3405,
      price: 2000, // ✅ Numeric Price
      availableDates: "2025-03-08",

      discription:
        "This is not a paid but honest sincere review on my stay here. This was my 2nd stay since Feb 2016. My recent stay from 19-28 dec was a blessed one! Im",
      mainImage: "/Images/ibis.webp",
      gallery: [
        "/Images/hos1.jpg",
        "/Images/hos2.webp",
        "/Images/hos3.webp",
        "/Images/hos4.jpg",
        "/Images/hos6.jpg",
        "/Images/hos7.jpg",
        "/Images/hotel10.webp",
        "/Images/hotel11.webp",
      ],
    },
    {
      id: 10,
      name: "PubLove @ The Brown Ferry",
      Country: "italy",
      // place: " Victoria",
      Star: "⭐",
      location: "St Katharine's , London",
      rating: 8.2,
      reviews: 3405,
      price: 3000, // ✅ Numeric Price
      availableDates: "2025-03-09",

      discription:
        "The staff at the front desk is very friendly and helpful during the check-in. A thumbs up for her. The room is beyond my expectation. I thought the room is poor",
      mainImage: "/Images/dover1.jpg",
      gallery: [
        "/Images/dover2.jpg",
        "/Images/dover3.jpg",
        "/Images/dover5.webp",
        "/Images/dover6.jpg",
        "/Images/dover4.jpg",
        "/Images/dover7.jpg",
        "/Images/hotel1.webp",
        "/Images/hotel2.webp",
      ],
    },
  ];

  const {
    searchQuery,
    selectedStars,
    selectedPrice,
    selectedDate,
    selectedCountry,
    isAscending,
    sortBy,
  } = useSelector((state) => state.hotels);
  const [filteredHotels, setFilteredHotels] = useState([]);

  useEffect(() => {
    const assignValue = hotelsData.filter(
      (hotel) => selectedCountry === null || hotel.Country === selectedCountry
    );

    setFilteredHotels(assignValue);
    console.log("filter countries", assignValue);
    console.log("selected country", selectedCountry);
  }, []);

  // FilteredHotels
  const filterHotels = () => {
    let assignValue = hotelsData.filter(
      (hotel) =>
        (searchQuery === "" ||
          hotel.name.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (selectedStars.length === 0 ||
          selectedStars.includes(hotel.Star.length)) &&
        hotel.price >= selectedPrice &&
        (selectedDate == null || hotel.availableDates === selectedDate)
    );
    if (sortBy === "price_lowest") {
      assignValue.sort((a, b) =>
        isAscending ? a.price - b.price : b.price - a.price
      );
    }

    setFilteredHotels(assignValue);
    console.log("Filtered Hotels:", assignValue);
  };

  useEffect(() => {
    if (filteredHotels.length > 0) {
      filterHotels();
    }
  }, [
    searchQuery,
    selectedStars,
    selectedPrice,
    selectedDate,
    isAscending,
    sortBy,
  ]);
  return (
    <>
      <div className="container mt-4">
        <Text type="h2" content={"Hotels in London"} />
        <div className="row">
          <div className="col-md-3">
            <Filters />
          </div>
          <div className="col-md-9">
            <SortingButtons />
            {filteredHotels.length > 0 ? (
              filteredHotels.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))
            ) : (
              <Text type="p" content={"No hotels found."} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
