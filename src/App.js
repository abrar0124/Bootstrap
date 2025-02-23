import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Mainhomepage from "./Pages/Mainhomepage";
import Maindetailpage from "./Pages/Maindetailpage";
import LowestPriceHotels from "./components/LowestPriceHotel";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainhomepage />} />
          <Route path="/lowest-price" element={<LowestPriceHotels />} />
          <Route path="/details/:id" element={<Maindetailpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
