import { createSlice } from "@reduxjs/toolkit";
import ProductsData from "../components/ProductsData";
import hotelsData from "../components/Hotels";

const initialState = {
  hotels: hotelsData,
  products: ProductsData,
  searchQuery: "",
  selectedStars: [],
  selectedPrice: null,
  selectedDate: null,
  sortBy: null,
  isAscending: true,
  selectedProduct: null,
  selectedCountry: null,
  minprice: null,
  maxprice: null,
};

const hotelSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    toggleStarFilter: (state, action) => {
      const star = action.payload;
      state.selectedStars.includes(star)
        ? (state.selectedStars = state.selectedStars.filter((s) => s !== star))
        : state.selectedStars.push(star);
    },
    clearstarfilter: (state) => {
      state.selectedStars = [];
    },
    setPriceFilter: (state, action) => {
      state.selectedPrice = action.payload;
    },
    setMinprice: (state, action) => {
      state.minprice = action.payload;
    },
    setMaxprice: (state, action) => {
      state.maxprice = action.payload;
    },
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    toggleSortOrder: (state) => {
      state.isAscending = !state.isAscending;
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    setSelectedCountry: (state, action) => {
      state.selectedCountry = action.payload;
    },
  },
});

export const {
  setSearchQuery,
  toggleStarFilter,
  clearstarfilter,
  setPriceFilter,
  setMinprice,
  setMaxprice,
  setSelectedDate,
  setSortBy,
  toggleSortOrder,
  setSelectedProduct,
  setSelectedCountry, // ✅ Export karein
} = hotelSlice.actions;

export default hotelSlice.reducer;
