import { createSlice } from "@reduxjs/toolkit";
import hotelsData from "../components/Hotels"; //  Hotels ka data import karna na bhoolain
const initialState = {
  hotels: hotelsData, //  Default hotels data
  searchQuery: "",
  selectedStars: [],
  selectedPrice: null, //  Default null,
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
      if (state.selectedStars.includes(star)) {
        state.selectedStars = state.selectedStars.filter((s) => s !== star);
      } else {
        state.selectedStars.push(star);
      }
    },
    setPriceFilter: (state, action) => {
      state.selectedPrice = action.payload;
    },
  },
});
//  Actions Export
export const { setSearchQuery, toggleStarFilter, setPriceFilter } =
  hotelSlice.actions;

//  Reducer Export
export default hotelSlice.reducer;
