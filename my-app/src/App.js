import './App.css';
import {useEffect, useReducer, useState} from 'react'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Automobile from './Components/Automobile';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Inventory from "./pages/Inventory";
import SellCar from "./pages/SellCar";
import NoPage from "./pages/NoPage";
import AutosList from './Components/AutosList';


export const ACTION = {
  GET_ALL_AUTOS: 'get-all-autos'
}

function reducer(state, action) {
  switch(action.type) {
    case ACTION.GET_ALL_AUTOS:
      console.log(action.payload);
      return{...state, automobiles:action.payload}
  }
}

const initialState = {
  automobiles: []
}


function App() {

    const [state, dispatch] = useReducer(reducer, initialState)

    async function getAutos() {
      const response = await fetch('http://localhost:8080/api/autos')
      return response.json();
    }


    useEffect(() => {
      getAutos()
      .then((autosData) => {
        dispatch({type: ACTION.GET_ALL_AUTOS, payload: autosData.automobiles})
      })
      .catch((err) => {

      })
    }, [])

    



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
          <Route index element={<Home />
            } />
          <Route path="inventory" element={<><Inventory/>
              <AutosList autos = {state.automobiles}/></>}/>
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
