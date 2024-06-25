import { BrowserRouter, Routes, Route } from "react-router-dom";
import Appointment from "./Pages/Appointment";
import Login from "./Pages/Login";
import Dashboard from './Pages/Dashboard';
import Jobdetail from "./Pages/Jobdetail"
import Notification from "./Pages/Notification"
import Review from "./Pages/Review"
import Settingpage from "./Pages/Settingpage";
import Userdetail from "./Pages/Userdetail";
import Footer from "./Components/Footer";
import Searchbar from './Components/Searchbar';
import Sidebar from "./Components/Sidebar";
import IndividualUserDetail  from './Pages/IndividualUserDetail';
import IndividualSuspendUserDetail  from './Pages/IndividualSuspendUser';
import IndividualDeactivateUserDetail  from './Pages/IndividualDeactivatedUser';
import Tostify from './Components/Tostify';import 'react-toastify/dist/ReactToastify.css';
import { VerifiedLabourProvider } from "./Context/VerifiedLabourContext ";

function App() {
  return(
    <div >
      <VerifiedLabourProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" index element={ <Login />}/>
        <Route path="/dashboard"   element={<Dashboard/>}></Route>
        <Route path="/job-detail"   element={<Jobdetail/> }></Route>
        <Route path="/notification"   element={<Notification/> }></Route>
        <Route path="/review"   element={<Review/> }></Route>
        <Route path="/setting-page"   element={<Settingpage/> }></Route>
        <Route path="/user-detail"   element={<Userdetail/> }></Route>
        <Route path="/bookings"   element={<Appointment/> }></Route>
        <Route path="/user-detail/:email" element={<IndividualUserDetail />} />
        <Route path="/suspenduser-detail/:email" element={<IndividualSuspendUserDetail />} />
        <Route path="/deactivateuser-detail/:email" element={<IndividualDeactivateUserDetail />} />
      </Routes>
      </BrowserRouter>
      </VerifiedLabourProvider>
      <Tostify/>
    </div>
  );

 
}
export default App;
