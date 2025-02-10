import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Accordion from "./components/Accordion";
import Buttons from "./components/Buttons";
import Carousel from "./components/Carousel";
import Dropdown from "./components/Dropdown";
import Listgroup from "./components/Listgroup";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Coullapse from "./components/Collapse";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accordion />} />
          <Route path="/Buttons" element={<Buttons />} />
          <Route path="/Carousel" element={<Carousel />} />
          <Route path="/Collapse" element={<Coullapse />} />
          <Route path="/Dropdown" element={<Dropdown />} />
          <Route path="/List group" element={<Listgroup />} />
          <Route path="/Modal" element={<Modal />} />
          <Route path="/Navbar" element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
