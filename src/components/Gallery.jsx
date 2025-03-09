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
      name: "Britannia International Hotel",
      Country: "Italy",
      location: "Canary Wharf, Italy",
      rating: 6.9,
      reviews: 2109,
      price: 11000,
      availableDates: "2025-02-28",
      stars: 4, // ⭐ Hotel ki total star rating
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
      name: "France Court Hotel",
      Country: "France",
      location: "St Katharine's France",
      rating: 8.2,
      reviews: 3405,
      price: 5000,
      availableDates: "2025-03-05",
      stars: 3, // ⭐ Hotel ki total star rating

      discription:
        "Can't beat this for the price in a London hotel. Booking through Agoda considerably cheaper than other sites",
      mainImage: "/Images/france.jpeg",
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
      name: " Minimalistic germany Hotel",
      Country: "Germany",
      stars: 2,
      location: "St Katharine's, Germany",
      rating: 8.2,
      reviews: 3405,
      price: 6000, // ✅ Numeric Price
      availableDates: "2025-03-07",
      discription:
        "The customer service was really amazing! Specially a lady Aurélie made the difference, she was always smiling and interacting with every guest and she was",
      mainImage: "/Images/germany.jpeg",
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
      name: "America special Apartment",
      Country: "America",
      // place: "in Holloway Road",
      stars: 2,
      location: "St Katharine's, America",
      rating: 8.2,
      reviews: 3405,
      price: 50000, // ✅ Numeric Price
      availableDates: "2025-03-20",
      discription: "Great value for money",
      mainImage: "/Images/America.jpeg",
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
      name: "Holiday Inn Express Japan",
      Country: "Japan",
      // place: "- Dartford",
      stars: 1,
      location: "St Katharine's, Japan",
      rating: 8.2,
      reviews: 3405,
      price: 23000,
      availableDates: "2025-03-04",

      discription:
        "This time, I wanted to find out nice hostel in London. I did use first time this hostel. As I did operation after, I was really worried about . But this hostel was great",
      mainImage: "/Images/Japan.jpeg",
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
      Country: "Austria",
      // place: "Victoria",
      stars: 5,
      location: "St Katharine's Austria",
      rating: 8.2,
      reviews: 3405,
      price: 4000,
      availableDates: "2025-03-21",
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
      name: " Canada Queens Park Hotel",
      Country: "Canada",
      stars: 4, // ⭐ Hotel ki total star rating
      location: "St Katharine's, Canada",
      rating: 8.2,
      reviews: 3405,
      price: 19000,
      availableDates: "2025-03-06",
      discription:
        "Location was superb, staff was friendly and helpful, food in the pub was very good. Rooms are clean, with door locks and lockers for your gear while out for the",
      mainImage: "/Images/Africa.jpeg",
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
      name: "Safestay Canada Elephant",
      Country: "Canada",
      // place: "and Castle",
      stars: 3, // ⭐ Hotel ki total star rating
      location: "St Katharine's, Canada",
      rating: 8.2,
      reviews: 3405,
      price: 10000, // ✅ Numeric Price
      availableDates: "2025-03-20",
      mainImage: "/Images/Austeria.jpeg",
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
      name: "ibis budget Dubai Heathrow ",
      Country: "Dubai",
      // place: "Central",
      stars: 2, // ⭐ Hotel ki total star rating
      location: "St Katharine's Dubai",
      rating: 8.2,
      reviews: 3405,
      price: 20000,
      availableDates: "2025-03-22",

      discription:
        "This is not a paid but honest sincere review on my stay here. This was my 2nd stay since Feb 2016. My recent stay from 19-28 dec was a blessed one! Im",
      mainImage: "/Images/Dubai.jpeg",
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
      name: "PubLove @ The Bombay Ferry",
      Country: "Bombay",
      // place: " Victoria",
      stars: 1, // ⭐ Hotel ki total star rating
      location: "St Katharine's , Bombay",
      rating: 8.2,
      reviews: 3405,
      price: 80000, // ✅ Numeric Price
      availableDates: "2025-03-09",

      discription:
        "The staff at the front desk is very friendly and helpful during the check-in. A thumbs up for her. The room is beyond my expectation. I thought the room is poor",
      mainImage: "/Images/Bombay.jpeg",
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
    {
      id: 11,
      name: "The England Ferry",
      Country: "England",
      // place: " Victoria",
      stars: 5, // ⭐ Hotel ki total star rating
      location: "St Katharine's ,England",
      rating: 8.2,
      reviews: 3405,
      price: 30000,
      availableDates: "2025-03-12",
      discription:
        "The staff at the front desk is very friendly and helpful during the check-in. A thumbs up for her. The room is beyond my expectation. I thought the room is poor",
      mainImage: "/Images/Eng.jpeg",
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
    {
      id: 12,
      name: "PubLove @ The White Ferry",
      Country: "Australia",
      // place: " Victoria",
      stars: 4, // ⭐ Hotel ki total star rating
      location: "St Katharine's , Australia",
      rating: 8.2,
      reviews: 3405,
      price: 3000, // ✅ Numeric Price
      availableDates: "2025-03-10",

      discription:
        "The staff at the front desk is very friendly and helpful during the check-in. A thumbs up for her. The room is beyond my expectation. I thought the room is poor",
      mainImage: "/Images/Australia.jpeg",
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
    {
      id: 13,
      name: "Italy International Hotel ",
      Country: "Italy",
      // place: "Canary Wharf",
      stars: 3, // ⭐ Hotel ki total star rating
      location: "Canary Wharf Italy,",
      rating: 6.9,
      reviews: 2109,
      price: 15000, // ✅ Numeric Price
      availableDates: "2025-02-28", // ✅ Correct Format
      discription:
        "Great place to stay - we booked it on a chance as we needed cheap accommodation on a Monday night near to Brixton Academy - it's a short walk from a tube",
      mainImage: "/Images/italy.jpeg",
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
      id: 14,
      name: "Mowbray Court Hotel",
      Country: "France",
      stars: 3, // ⭐ Hotel ki total star rating
      location: "St Katharine's France",
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
      id: 15,
      name: "Modern & Minimalistic 2B Flat",
      Country: "Germany",
      stars: 3, // ⭐ Hotel ki total star rating
      location: "St Katharine's, Germany",
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
      id: 16,
      name: "Modern One Bedroom Apartment",
      Country: "America",
      // place: "in Holloway Road",

      stars: 1, // ⭐ Hotel ki total star rating
      location: "St Katharine's,America",
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
      id: 17,
      name: "Holiday Inn Express Japan",
      Country: "Japan",
      // place: "- Dartford",
      stars: 5, // ⭐ Hotel ki total star rating

      location: "St Katharine's, Japan",
      rating: 8.2,
      reviews: 3405,
      price: 8000,
      availableDates: "2025-03-15",

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
      id: 18,
      name: "PubLove @ The White Ferry",
      Country: "Austria",
      // place: "Victoria",
      stars: 4, // ⭐ Hotel ki total star rating
      location: "St Katharine's Austria",
      rating: 8.2,
      reviews: 3405,
      price: 10000,
      availableDates: "2025-03-05",

      discription: "The hotel room is big, great location and lovely staff",
      mainImage: "/Images/Austeria.jpeg",
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
      id: 19,
      name: "African Queens Park Hotel",
      Country: "Africa",
      stars: 3, // ⭐ Hotel ki total star rating
      location: "St Katharine's, Africa",
      rating: 8.2,
      reviews: 3405,
      price: 5000, // ✅ Numeric Price
      availableDates: "2025-03-23",

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
      id: 20,
      name: "Safestay African Elephant",
      Country: "Africa",
      // place: "and Castle",
      stars: 2, // ⭐ Hotel ki total star rating
      location: "St Katharine's,Africa",
      rating: 8.2,
      reviews: 3405,
      price: 1000, // ✅ Numeric Price
      availableDates: "2025-03-07",

      mainImage: "/Images/England.jpeg",
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
      id: 21,
      name: "ibis budget Dubai Heathrow ",
      Country: "Dubai",
      // place: "Central",
      stars: 1, // ⭐ Hotel ki total star rating
      location: "St Katharine's  Dubai",
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
      id: 22,
      name: " The Special Bombay Ferry",
      Country: "Bombay",
      // place: " Victoria",
      stars: 5, // ⭐ Hotel ki total star rating
      location: "St Katharine's , Bombay",
      rating: 8.2,
      reviews: 3405,
      price: 3000, // ✅ Numeric Price
      availableDates: "2025-03-27",

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
    {
      id: 23,
      name: "PubLove @ The White Ferry",
      Country: "England",
      // place: " Victoria",
      stars: 4, // ⭐ Hotel ki total star rating

      location: "St Katharine's ,England",
      rating: 8.2,
      reviews: 3405,
      price: 3000, // ✅ Numeric Price
      availableDates: "2025-03-10",
      discription:
        "The staff at the front desk is very friendly and helpful during the check-in. A thumbs up for her. The room is beyond my expectation. I thought the room is poor",
      mainImage: "/Images/England.jpeg",
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
    {
      id: 24,
      name: "The Australia Ferry",
      Country: "Australia",
      // place: " Victoria",
      stars: 3, // ⭐ Hotel ki total star rating
      location: "St Katharine's , Australia",
      rating: 8.2,
      reviews: 3405,
      price: 3000,
      availableDates: "2025-03-19",
      discription:
        "The staff at the front desk is very friendly and helpful during the check-in. A thumbs up for her. The room is beyond my expectation. I thought the room is poor",
      mainImage: "/Images/As.jpeg",
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
    minprice,
    maxprice,
    selectedDate,
    selectedCountry,
    isAscending,
    sortBy,
  } = useSelector((state) => state.hotels);
  const [filteredHotels, setFilteredHotels] = useState([]);

  const filterHotels = () => {
    let assignValue = hotelsData.filter(
      (hotel) =>
        (searchQuery === "" ||
          hotel.name.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (selectedStars.length === 0 || selectedStars.includes(hotel.stars)) &&
        hotel.price >= selectedPrice &&
        (selectedDate == null || hotel.availableDates === selectedDate) &&
        (minprice === null || hotel.price >= minprice) &&
        (maxprice === null || hotel.price <= maxprice) &&
        (selectedCountry === null || hotel.Country === selectedCountry)
    );
    if (sortBy === "price_lowest") {
      assignValue.sort((a, b) =>
        isAscending ? a.price - b.price : b.price - a.price
      );
    }
    setFilteredHotels(assignValue);
    console.log("Filtered Hotels:", assignValue);
    console.log(selectedCountry);
  };
  // all filters will be re-render but selectedcountry will be just
  // render means first mount.
  useEffect(() => {
    filterHotels();
  }, [
    minprice,
    maxprice,
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
