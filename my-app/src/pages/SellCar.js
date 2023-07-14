import { useEffect, Reducer, useState } from "react";

export const ACTION = {
  POST_AUTO: 'post-auto'
}

function SellCar() {

  async function postNewAuto(newAuto) {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newAuto)
    };
      const response = await fetch('http://localhost:8080/api/autos', requestOptions);
      return response.json();
  }

  function addAuto (e) {
    e.preventDefault();
    const newAuto = { owner: e.target.enteredName.value, 
      year: e.target.enteredYear.value, 
      make: e.target.enteredMake.value, 
      model: e.target.enteredModel.value, 
      color: e.target.enteredColor.value, 
      vin: e.target.enteredVin.value}
    postNewAuto(newAuto)
    .then((autoData) => {
      const boughtAuto = [];
      boughtAuto.push(autoData);
      console.log(boughtAuto);
    })
    .catch((err) => {

    })  
    }

    return <>
    <h1>Sell your car here!</h1>
    <form className="search-form" onSubmit={addAuto}>
      <input className="input" type="text" name="enteredName" placeholder="Enter Your Name"></input><br/>
      <input className="input" type="text" name="enteredMake" placeholder="Enter Make"></input><br/>
      <input className="input" type="text" name="enteredModel" placeholder="Enter Model"></input><br/>
      <input className="input" type="text" name="enteredYear" placeholder="Enter Year"></input><br/>
      <input className="input" type="text" name="enteredColor" placeholder="Enter Color"></input><br/>
      <input className="input" type="text" name="enteredVin" placeholder="Enter VIN"></input><br/>
      <input className="input" type="text" name="enteredPrice" placeholder="Enter Amount You Would Like To Get"></input><br/>
      <input className="button" type="submit" value="Sell Your Car"></input>
    </form>
  </>
  };
  
  export default SellCar;