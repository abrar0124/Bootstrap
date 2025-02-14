import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import Accordion from "./components/Accordion";
// import Buttons from "./components/Buttons";
// import Carousel from "./components/Carousel";
// import Dropdown from "./components/Dropdown";
// import Listgroup from "./components/Listgroup";
// import Modal from "./components/Modal";
// import Navbar from "./components/Navbar";
// import Coullapse from "./components/Collapse";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Details from "./components/Detials";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
