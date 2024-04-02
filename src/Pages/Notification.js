import React from 'react'
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
const Notification = () => {
  const pageStyle = {
    backgroundColor: '#F3F2F7',
  };
  return (
    <>
        <div style={pageStyle}>
    <Sidebar>
    <div style={{padding: '25px' ,marginTop:'100px',marginLeft:'150px',marginRight:'150px',backgroundColor:"pink"}}> 
        <h1>This is the Notification Page</h1>
        <p>Additional content goes here...</p>
      </div>
      <div style={{marginTop:'100px',marginLeft:'150px',marginRight:'150px'}}> 
    <Footer/>
    </div>
    </Sidebar>
    </div>
 
  </>

 )
}
export default Notification;