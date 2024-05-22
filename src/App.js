import React from "react";
import './App.css';
import {Routes,Route } from "react-router-dom";
import Layout from "./Layout"
import ResponsiveAppBar from "./pages/ResponsiveAppBar";
import Login from "./pages/Login";

function App() {
  return (
 <div>
<Layout/>
  <Routes>
    <Route path="/" index element={ <Login />}/>
    <Route path="/responsiveAppBar" element={<ResponsiveAppBar/>}/>
  </Routes>
  
 </div>
  );
}
  

export default App;
