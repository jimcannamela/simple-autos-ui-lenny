import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
       <Outlet />
      <nav>
       
            <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       
            <Link to="/inventory">Inventory</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         
            <Link to="/SellCar">Sell Your Car</Link>
      
      </nav>

   
    </>
  )
};

export default Layout;