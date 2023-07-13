import './App.css';
import {useEffect, useReducer, useState} from 'react'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';



function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <Header />
        <Navbar />
      </header>
      <main>
        <body>
          
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
