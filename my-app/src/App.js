import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Inventory from "./pages/Inventory";
import SellCar from "./pages/SellCar";
import NoPage from "./pages/NoPage";

function App() {

   return (
    <>
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <body>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="inventory" element={<Inventory/>}/>
                <Route path="SellCar" element={<SellCar />} />
                <Route path="*" element={<NoPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </body>
      </main>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
    </>
  );
}

export default App;
