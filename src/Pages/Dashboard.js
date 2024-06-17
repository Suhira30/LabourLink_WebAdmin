import React from 'react'
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import appointment from '../Img/appointment.png';
import job from '../Img/job.png';
import user from '../Img/user.png';
import Barchart from '../charts/DashBoardBarchartLeft';
import DashBoardBarchartRight from '../charts/DashBoardBarchartRight';
import Order from '../charts/DashBoardLineChart';
import { Revenue } from '../charts/DashboardRevenue';
import Pie_Dashboard from '../charts/Pie_Dashboard';
import Todo from "../Components/Todo"
import Calender from '../Components/Calender';
import { useEffect, useState } from "react";
import dashboardService from '../Pages/Service/dashboardService';

const pageStyle = {
  backgroundColor: '#F3F2F7',
};

const Dashboard = () => {
  //------------------------Count of user-----------------
  //------------------------Count of job------------------
  //---------------------Total appointment----------------
   const [userCount, setUserCount] = useState(0);
   const [jobCount, setJobCount] = useState(0);
   const [appointmentCount, setAppointmentCount] = useState(0);

   useEffect(() => {
    const fetchData = async () => {
      try{
        const users=await dashboardService.fetchUserCount();
        setUserCount(users);
        const jobs=await dashboardService.fetchJobCount();
        setJobCount(jobs);
        const appointment=await dashboardService.fetchAppointmentCount();
        setAppointmentCount(appointment);
      } catch (error) {
        console.error('Error fetching count:', error);
      }
    };
    fetchData();
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
      maxWidth: '1000px',
     }}> 
  <Box sx={{ flexGrow: 1,padding: '0',paddingRight:'0',marginTop:'30px', marginLeft: '15px', marginRight: 'auto',maxWidth: '1000px' }}>
  <Grid container rowSpacing={2} justifyContent= 'center' columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
     {/*top  boxes--01--------------------------------------------------------------------------------- */}
  <Grid item xs={12} sm={6} md={3}>
    <Card  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 220,height: 120 }}>
      <CardMedia
        sx={{
        width: 65,
        height:65,
        ml: 2
       }}
        image={user}/>
      <CardContent sx={{ flex: '1' }}>
      <Typography gutterBottom variant="h5" component="div">{userCount}</Typography>
        <Typography >Total Users</Typography>
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
         }}
         image={job}/>
      <CardContent sx={{ flex: '1' }}>
      <Typography gutterBottom variant="h5" component="div">{jobCount}</Typography>
        <Typography >Total Job</Typography>
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
         }}
        image={appointment}/>
      <CardContent sx={{ flex: '1' }}>
      <Typography gutterBottom variant="h5" component="div">
        {appointmentCount}
        </Typography>
        <Typography >Total Appointments</Typography>
      </CardContent>
    </Card>
  </Grid>
  </Grid>
  </Box>
  </div>
  <Box sx={{ padding: '0',marginTop:'30px', marginLeft: 'auto', marginRight: 'auto',maxWidth: '1000px' }}>
  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center" alignItems="center"  >
{/*----------------Calendar-------------------------*/}
    <Grid item xs={12} sm={6}>
    <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 'auto', overflow: 'auto',height:'435px'}}>        
      <CardContent>
       <Calender/>
      </CardContent>
    </Card>
    </Grid>
{/*----------------Todo list-------------------------*/}
    <Grid item xs={12} sm={6}>
    <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 'auto', overflow: 'auto' ,height:'435px'}}> 
      <CardContent>
       <Todo/>
      </CardContent>
    </Card>
    </Grid>

{/*------------graph-Bar left------------------------ */}
    <Grid item xs={12} sm={6}>
    <Card sx={{ display: 'flex', justifyContent: 'center',marginTop:'30px', alignItems: 'center', maxWidth: 'auto', overflow: 'auto'}}>
      <CardContent>
        <Barchart />
      </CardContent>
    </Card>
    </Grid>
{/*--------------graph-Bar-Right--------------------- */}
    <Grid item xs={12} sm={6}>
    <Card sx={{ display: 'flex', justifyContent: 'center', marginTop:'30px',alignItems: 'center', maxWidth: 'auto', overflow: 'auto' }}>
      <CardContent>
        <DashBoardBarchartRight/>
      </CardContent>
    </Card>
    </Grid>
{/*------------------graph-line-Order----------------- */}
    <Grid item xs={12} sm={6}>
    <Card sx={{  display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'auto',marginTop:'30px', maxWidth: 'auto' }}>
      <CardContent>
        <Order/>
      </CardContent>
    </Card>
    </Grid>
{/*-----------graph-pie-Demands order----------------- */}
    <Grid item xs={12} sm={6}>
    <Card sx={{ display: 'flex', justifyContent: 'center', marginTop:'30px',alignItems: 'center', maxWidth: 'auto', overflow: 'auto',height:'440px' }}>        
      <CardContent>
        <Pie_Dashboard />
      </CardContent>
    </Card>
    </Grid>
{/*-----------graph-line------------------------------- */}
    {/* <Grid item xs={12} sm={12}>
    <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 'auto', overflow: 'auto',marginTop:'30px', height:'400px'}}>        
      <CardContent>
        <Revenue />
      </CardContent>
    </Card>
    </Grid> */}
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

export default Dashboard;