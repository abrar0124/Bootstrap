import { createSlice } from "@reduxjs/toolkit";
import hotels from "../components/Hotels";
const hotelSlice = createSlice({
  name: "hotels",
  initialState: {
    hotels: hotels,
    searchQuery: "",
    selectedStars: [], // Selected star ratings actually  array
  },
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
  },
});
export const { setSearchQuery, toggleStarFilter } = hotelSlice.actions;
export default hotelSlice.reducer;
