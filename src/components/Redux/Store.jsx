import { configureStore } from "@reduxjs/toolkit";
import Hotelslice from "./Hotelslice";
const store = configureStore({
  reducer: {
    hotels: Hotelslice,
  },
});

export default store;
