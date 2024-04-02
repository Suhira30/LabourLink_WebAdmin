
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet,createBrowserRouter, RouterProvider,Switch  } from "react-router-dom";
import Appointment from "./Pages/Appointment";
import Calender from "./Pages/Calender";

import Dashboard from './Pages/Dashboard';
import Jobdetail from "./Pages/Jobdetail"
import Notification from "./Pages/Notification"
import Review from "./Pages/Review"
import Settingpage from "./Pages/Settingpage";
import Userdetail from "./Pages/Userdetail";
import Footer from "./Components/Footer";
import Searchbar from './Components/Searchbar';
import Sidebar from "./Components/Sidebar";

function App() {

      const Layout = () => {
        return(
  <div className="main">
      <Searchbar/>
    <div className="container">
      <div className="menuContainer">
      <Sidebar/>
      </div>
      <div className="ContentContainer">
<Outlet/>
      </div>
    
    </div>
    <Footer/>
  </div>
        );
      }
  return(
    <div >
      <BrowserRouter>
      <Routes>
      <Route path="/"   element={<Dashboard/>}></Route>
        <Route path="/dashboard"   element={<Dashboard/>}></Route>
        <Route path="/calender"   element={<Calender/> }></Route>
        {/*<Route path="/chat"   element={<Chat/> }></Route>*/}
        <Route path="/job-detail"   element={<Jobdetail/> }></Route>
        <Route path="/notification"   element={<Notification/> }></Route>
        <Route path="/review"   element={<Review/> }></Route>
        <Route path="/setting-page"   element={<Settingpage/> }></Route>
        <Route path="/user-detail"   element={<Userdetail/> }></Route>
        <Route path="/appointment"   element={<Appointment/> }></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
/*
const router=createBrowserRouter([
  
    {
      path:"/",
      element:<Dashboard/> 
     },
     {
       path:"/calender",
       element:<Calender/> 
      },
      {
        path:"/chat",
        element:<Chat/> 
       },
       {
        path:"/appointment",
        element:<Appointment/> 
       },
       ,
       {
        path:"/appointment",
        element:<Appointment/> 
       },
       ,
       {
        path:"/appointment",
        element:<Appointment/> 
       },
       ,
       {
        path:"/appointment",
        element:<Appointment/> 
       },
       ,
       {
        path:"/appointment",
        element:<Appointment/> 
       },
       

]);
 return
  <RouterProvider router={router}/>;*/
 
}
export default App;
