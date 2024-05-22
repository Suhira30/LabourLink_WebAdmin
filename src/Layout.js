import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <nav>
      
            <Link to="/login"></Link>
       
            <Link to="/ResponsiveAppBar"></Link>
          
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;