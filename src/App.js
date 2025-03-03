import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Mainhomepage from "./Pages/Mainhomepage";
import Maindetailpage from "./Pages/Maindetailpage";
import Hotelbook from "./Pages/Hotelbook";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainhomepage />} />
          <Route path="/details/:id" element={<Maindetailpage />} />
          <Route path="/Booknow" element={<Hotelbook />} />
          <Route path="/Homepage" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
