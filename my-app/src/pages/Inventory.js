import {useEffect, useReducer, useState} from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Automobile from '../Components/Automobile';
import AutosList from "../Components/AutosList";


export const ACTION = {
  GET_ALL_AUTOS: 'get-all-autos'
}

function reducer(state, action) {
  switch(action.type) {
    case ACTION.GET_ALL_AUTOS:
      console.log(action.payload)
      return{...state, automobiles:action.payload}
    
    default:
        return state
  }
}

const initialState = {
  automobiles: []
}

// const Inventory = () => {

function Inventory() {

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


    return <div>
    <h1>Inventory List</h1>
    <AutosList autos = {state.automobiles}/>
    </div>;
  };
  
  export default Inventory;