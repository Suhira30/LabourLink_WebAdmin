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
import PendingTableData from '../charts/AppointmentsPending';
import CompleteTabledata from '../charts/AppointmentsDeliver';
import DeclinedTabledata from '../charts/AppointmentsCancel';
import AcceptTabledata from '../charts/AppointmentAccept';
import Appointment_vs_Total from '../charts/AppointmentJob_vs_Total';
import CancelledAppointment_vs_Total from '../charts/AppointmentCancelled_vs_Total';
import appointmentService from '../Pages/Service/appointmentService';
import AppointmentComparison from '../charts/AppointmentComparison';
const pageStyle = {
  backgroundColor: '#F3F2F7',
};
const Appointment = () => {
//------------------------Pending--------------------
//------------------------cancel---------------------
//-----------------------delivered-------------------
//------------------------Revenue-------------------
  const [pendingCount, setPendingCount] = useState(0);
  const [declinedCount, setDeclinedCount] = useState(0);
  const [acceptCount, setAcceptCount] = useState(0);
  const [completeCount, setCompleteCount] = useState(0);


  useEffect(() => {
    const fetchData=async()=>{
    try{
      const pending=await appointmentService.fetchPendingAppointmentCount();
      setPendingCount(pending);
      const declined=await appointmentService.fetchDeclinedAppointmentCount();
      setDeclinedCount(declined);
      const accept=await appointmentService.fetchAcceptAppointmentCount();
      setAcceptCount(accept);
      const complete=await appointmentService.fetchCompleteAppointmentCount();
      setCompleteCount(complete);
     
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
        <Typography >Pending Booking</Typography>
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
        <Typography gutterBottom variant="h5" component="div">{declinedCount}</Typography>
        <Typography >Declined Booking</Typography>
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
        <Typography gutterBottom variant="h5" component="div">{acceptCount}</Typography>
        <Typography >Accept Booking</Typography>
      </CardContent>
    </Card>
  </Grid>
{/*top 4 boxes--04--------------------------------------------------------------------------------- */}
<Grid item xs={12} sm={6} md={3}>
    <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 220,height: 120}}>
      <CardMedia
        sx={{
        width: 65,
        height:65,
        ml: 2
        }}image={delivery}/>
      <CardContent sx={{ flex: '1' }}>
        <Typography gutterBottom variant="h5" component="div">{completeCount}</Typography>
        <Typography >Complete Booking</Typography>
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
  <Grid item xs={12} >
  <Card >        
  <CardContent>
        <AppointmentComparison/>
        </CardContent>
    </Card>
   </Grid>
{/*   
  {/*--------------------chart : cancelled appointment VS Total  ------------------- */}
  {/* <Grid item xs={12} sm={6}>
    <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 'auto', overflow: 'auto' ,height:'500px'}}>        
      <CardContent>
        <CancelledAppointment_vs_Total/>
      </CardContent>
    </Card>
  </Grid> */}
   
  {/*--------------------01 table : pending Appointment  -------------------*/}
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
    <PendingTableData />
    </Card>
  </Grid>
  
  {/*--------------------02 table declined------------------- */}
  <Grid item xs={12} >
    <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 'auto' , border: 'none',marginTop:'30px'}}>        
    <DeclinedTabledata />  
    </Card>
  </Grid>

 {/*--------------------04  table accept------------------- */}
 <Grid item xs={12} marginBottom={0}>
    <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 'auto' , border: 'none',marginTop:'30px'}}>        
    <AcceptTabledata />
    </Card>
  </Grid>
  {/*--------------------03  table complete------------------- */}
  <Grid item xs={12} marginBottom={0}>
    <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 'auto' , border: 'none',marginTop:'30px'}}>        
    <CompleteTabledata /> 
    </Card>
  </Grid>
  
  </Grid>
</Box>
  {/*---------------------------Footer------------------------------------------------------- */}
  <div  style={{backgroundColor:"#E7ECFF"}}>
    <div style={{marginTop:'30px',maxWidth:'100%'}}> 
    <Footer/></div>
    </div>
    </Sidebar>
</div>
</>
  )
}
export default Appointment