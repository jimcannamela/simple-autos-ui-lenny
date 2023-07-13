import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Inventory from "../pages/Inventory";
import SellCar from "../pages/SellCar";
import NoPage from "../pages/NoPage";


function Navbar() {
    return (
        <>
    <p>Search Stuff</p>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="SellCar" element={<SellCar />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
    )
}

export default Navbar