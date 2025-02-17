import { createSlice } from "@reduxjs/toolkit";
import hotels from "../components/Hotels";
const hotelSlice = createSlice({
  name: "hotels",
  initialState: {
    hotels: hotels,
    searchQuery: "",
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});
export const { setSearchQuery } = hotelSlice.actions;
export default hotelSlice.reducer;
