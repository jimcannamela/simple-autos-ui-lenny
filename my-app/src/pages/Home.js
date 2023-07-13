

const Home = ({submitSearch}) => {
    return <>
      <h1>Search For Your Dream Machine</h1>
      <form className="search-form" onSubmit={submitSearch}>
        <input className="input" type="text" name="searchColor" placeholder="Enter Color"></input>
        <input className="input" type="text" name="searchMake" placeholder="Enter Make"></input>
        <input className="button" type="submit" value="Search"></input>
      </form>
    </>;
  };
  
  export default Home;