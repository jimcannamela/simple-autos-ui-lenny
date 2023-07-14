import { useEffect,  useReducer, UseState } from "react";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Automobile from '../Components/Automobile';
import AutosList from "../Components/AutosList";


export const ACTION = {
  GET_AUTOS: 'get-autos'
}

function reducer(state, action) {
  switch(action.type) {
    case ACTION.GET_AUTOS:
      console.log(action.payload)
      return{...state, automobiles:action.payload}
    
    default:
        return state
  }
}

const initialState = {
  automobiles: []
}

function Home() {
      const [state, dispatch] = useReducer(reducer, initialState)

      async function getAutosByColorAndMake(color, make) {
      console.log("color " + color + " make " + make)
      const response = await fetch(`http://localhost:8080/api/autos?color=${color}&make=${make}`)
      return response.json();
    }

    // async function getAutosByColor(color) {
    //   const response = await fetch(`http://localhost:8080/api/autos?color=${color}`)
    //   return response.json();
    // }

    // async function getAutosByMake(make) {
    //   const response = await fetch(`http://localhost:8080/api/autos?make=${make}`)
    //   return response.json();
    // }
  function submitSearch(e) {
    e.preventDefault();
    let searchColor = e.target.searchColor.value;
    let searchMake = e.target.searchMake.value;
  
    if (searchColor !== undefined && searchColor !== '' && searchMake !== undefined && searchMake !== '') {
      console.log("color " + searchColor + " make " + searchMake)
      getAutosByColorAndMake(searchColor, searchMake)
      .then((autosData) => {
        dispatch({ type: ACTION.GET_AUTOS, payload: autosData.automobiles })      
      })
      .catch((err) => {
  
      })
    }
  }
    return <>
      <h1>Search For Your Dream Machine</h1>
      <form className="search-form" onSubmit={submitSearch}>
        <input className="input" type="text" name="searchColor" placeholder="Enter Color"></input>
        <input className="input" type="text" name="searchMake" placeholder="Enter Make"></input>
        <input className="button" type="submit" value="Search"></input>
      </form>
      <AutosList autos = {state.automobiles}/>

    </>;
  };


  
  export default Home;