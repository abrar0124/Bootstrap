import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Mainhomepage from "./Pages/Mainhomepage";
import Maindetailpage from "./Pages/Maindetailpage";
import Booknow from "./components/Booknow";
import Homepage from "./Pages/Homepage";
import ProductDetail from "./components/ProductDetail";
import Parent from "./Data-Ch-to-Parent/Parent";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainhomepage />} />
          <Route path="/details/:id" element={<Maindetailpage />} />
          <Route path="/Booknow" element={<Booknow />} />
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/ProductDetail/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter> */}
      <Parent />
    </>
  );
}
export default App;
