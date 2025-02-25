import { createSlice } from "@reduxjs/toolkit";
import hotelsData from "../components/Hotels"; // Hotels ka data import karna na bhoolain

const initialState = {
  hotels: hotelsData, // Your hotel data
  searchQuery: "",
  selectedStars: [],
  selectedPrice: null,
  selectedDate: null,
  sortBy: null,
  isAscending: true, // Sorting order ko Redux mein rakhein
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
    setPriceFilter: (state, action) => {
      state.selectedPrice = action.payload;
    },
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    toggleSortOrder: (state) => {
      state.isAscending = !state.isAscending; // Sorting order toggle karein
    },
  },
});

export const {
  setSearchQuery,
  toggleStarFilter,
  setPriceFilter,
  setSelectedDate,
  setSortBy,
  toggleSortOrder, // New action
} = hotelSlice.actions;

export default hotelSlice.reducer;
