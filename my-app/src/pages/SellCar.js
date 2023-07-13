const SellCar = () => {
    return <>
    <h1>Sell your car here!</h1>
    <form className="search-form" >
      <input className="input" type="text" name="enteredName" placeholder="Enter Your Name"></input>
      <input className="input" type="text" name="enterMake" placeholder="Enter Make"></input>
      <input className="input" type="text" name="enterModel" placeholder="Enter Model"></input>
      <input className="input" type="text" name="enterYear" placeholder="Enter Year"></input>
      <input className="input" type="text" name="enterColor" placeholder="Enter Color"></input>
      <input className="input" type="text" name="enterPrice" placeholder="Enter Amount You Would Like To Get"></input>      
      <input className="button" type="submit" value="Sell Your Car"></input>
    </form>
  </>
  };
  
  export default SellCar;