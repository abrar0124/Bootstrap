import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Mainhomepage from "./Pages/Mainhomepage";
import Maindetailpage from "./Pages/Maindetailpage";
import Hotelbook from "./Pages/Hotelbook";
import Homepage from "./Pages/Homepage";
import Gallery from "./components/Gallery";
import Countryname from "./Pages/Countryname";
import FilteredCountry from "./Pages/Filteredcountry";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainhomepage />} />
          <Route path="/FilteredCountry" element={<FilteredCountry />} />
          <Route path="/details/:id" element={<Maindetailpage />} />
          <Route path="/Booknow" element={<Hotelbook />} />
          <Route path="/Homepage" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
