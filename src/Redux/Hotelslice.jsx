import { createSlice } from "@reduxjs/toolkit";
import hotelsData from "../components/Hotels"; // ✅ Hotels ka data import karna na bhoolain

const initialState = {
  hotels: hotelsData, // ✅ Default hotels data
  searchQuery: "",
  selectedStars: [],
  selectedPrice: null, // ✅ Default null, taake filtering na ho
};

const hotelSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    // ✅ Search Query Update
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },

    // ✅ Star Rating Filter Toggle
    toggleStarFilter: (state, action) => {
      const star = action.payload;
      if (state.selectedStars.includes(star)) {
        state.selectedStars = state.selectedStars.filter((s) => s !== star);
      } else {
        state.selectedStars.push(star);
      }
    },

    // ✅ Price Filter (exact match)
    setPriceFilter: (state, action) => {
      state.selectedPrice = action.payload === "" ? null : action.payload;
    },
  },
});

// ✅ Actions Export
export const { setSearchQuery, toggleStarFilter, setPriceFilter } =
  hotelSlice.actions;

// ✅ Reducer Export
export default hotelSlice.reducer;
