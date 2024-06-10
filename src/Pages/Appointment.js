import React from 'react'
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import cancel4 from '../Img/cancel.png';
import delivery from '../Img/delivery.png';
import order from '../Img/order.png';
import revenue from '../Img/revenue.png';
import AppTabledata from '../charts/AppointmentsPending';
import DEliveredTabledata from '../charts/AppointmentsDeliver';
import CancelTabledata from '../charts/AppointmentsCancel';
import Appointment_vs_Total from '../charts/AppointmentJob_vs_Total';
import CancelledAppointment_vs_Total from '../charts/AppointmentCancelled_vs_Total';
import appointmentService from '../Pages/Service/appointmentService';
const pageStyle = {
  backgroundColor: '#F3F2F7',
};
const Appointment = () => {
//------------------------Pending--------------------
//------------------------cancel---------------------
//-----------------------delivered-------------------
//------------------------Revenue-------------------
  const [pendingCount, setPendingCount] = useState(0);
  const [cancelCount, setCancelCount] = useState(0);
  const [deliveredCount, setDeliveredCount] = useState(0);
  const [Revenue, setRevenue] = useState(0);

  useEffect(() => {
    const fetchData=async()=>{
    try{
      const pending=await appointmentService.fetchPendingAppointmentCount();
      setPendingCount(pending);
      const cancel=await appointmentService.fetchCancelAppointmentCount();
      setCancelCount(cancel);
      const deliver=await appointmentService.fetchDeliveredAppointmentCount();
      setDeliveredCount(deliver);
      const revenue=await appointmentService.fetchRevenueAmount();
      setRevenue(revenue);
  }catch(error){
    console.error('Error fetching count:', error);
  }
}; fetchData();
}, []);
  return (
<>
  <div style={pageStyle}>
    <Sidebar>
  <div style={{display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0',
    marginTop: '80px',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '1000px',}}> 

  <Box sx={{ flexGrow: 1,padding: '0',paddingRight:'0',marginTop:'30px', marginLeft: '15px', marginRight: 'auto',maxWidth: '1000px'}}>
  <Grid container spacing={2} justifyContent="center" alignItems="center" >
  {/*top 4 boxes--01--------------------------------------------------------------------------------- */}
    <Grid item xs={12} sm={6} md={3} >
      <Card  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 220,height: 120}}>
      <CardMedia
        sx={{
        width: 65,
        height:65,
        ml: 2}}image={order}/>
      <CardContent sx={{ flex: '1' }}>
        <Typography gutterBottom variant="h5" component="div">{pendingCount}</Typography>
        <Typography >Pending Appointment</Typography>
      </CardContent>
      </Card>
    </Grid>

  {/*top 4 boxes--02--------------------------------------------------------------------------------- */}
  <Grid item xs={12} sm={6} md={3}>
    <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 220,height: 120}}>
      <CardMedia
        sx={{
        width: 65,
        height:65,
        ml: 2
        }}image={cancel4}/>
      <CardContent sx={{ flex: '1' }}>
        <Typography gutterBottom variant="h5" component="div">{cancelCount}</Typography>
        <Typography >Cancelled Appointment</Typography>
      </CardContent>
    </Card>
  </Grid>

  {/*top 4 boxes--03--------------------------------------------------------------------------------- */}
  <Grid item xs={12} sm={6} md={3}>
    <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 220,height: 120}}>
      <CardMedia
        sx={{
        width: 65,
        height:65,
        ml: 2
        }}image={delivery}/>
      <CardContent sx={{ flex: '1' }}>
        <Typography gutterBottom variant="h5" component="div">{deliveredCount}</Typography>
        <Typography >Delivered Appointment</Typography>
      </CardContent>
    </Card>
  </Grid>

  {/*top 4 boxes--04--------------------------------------------------------------------------------- */}
  <Grid item xs={12} sm={6} md={3}>
    <Card  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 220,height: 120}}>
      <CardMedia
        sx={{
        width: 65,
        height:65,
        ml: 2
        }}image={revenue}/>
      <CardContent sx={{ flex: '1' }}>
        <Typography gutterBottom variant="h5" component="div">{Revenue}</Typography>
        <Typography > Total Revenue</Typography>
      </CardContent>
    </Card>
  </Grid>
  </Grid>
  </Box>
  </div>
      
  {/*---------------------------Table------------------------------------------------------- */}
  <Box sx={{ padding: '0',marginTop:'30px', marginLeft: 'auto', marginRight: 'auto',maxWidth: '1000px',paddingRight:'0'}}>
  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
  
  {/*--------------------chart : appointmet  VS Total order ------------------- */}    
  <Grid item xs={12} sm={6}>
    <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 'auto', overflow: 'auto',height:'500px'}}>        
      <CardContent>
        <Appointment_vs_Total/>
      </CardContent>
    </Card>
  </Grid>
  
  {/*--------------------chart : cancelled appointment VS Total  ------------------- */}
  <Grid item xs={12} sm={6}>
    <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 'auto', overflow: 'auto' ,height:'500px'}}>        
      <CardContent>
        <CancelledAppointment_vs_Total/>
      </CardContent>
    </Card>
  </Grid>
  
  {/*--------------------01 table : All Appointment  -------------------*/}
  <Grid item xs={12} sm={12}   >
    <Card sx={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    maxWidth: 'auto',
    padding:'0',
    border: 'none',
    marginBottom:'0',
    marginTop:'30px',}}>     
    <AppTabledata />
    </Card>
  </Grid>
  
  {/*--------------------02 table ------------------- */}
  <Grid item xs={12} >
    <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 'auto' , border: 'none',marginTop:'30px'}}>        
    <DEliveredTabledata />   
    </Card>
  </Grid>
 
  {/*--------------------03  table ------------------- */}
  <Grid item xs={12} marginBottom={0}>
    <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 'auto' , border: 'none',marginTop:'30px'}}>        
    <CancelTabledata />
    </Card>
  </Grid>
  </Grid>
</Box>

  {/*---------------------------Footer------------------------------------------------------- */}
    <div style={{marginTop:'30px',maxWidth:'100%'}}> 
    <Footer/>
    </div>
    </Sidebar>
</div>
</>
  )
}
export default Appointment