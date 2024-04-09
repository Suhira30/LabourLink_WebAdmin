import React from 'react'
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import cancel4 from '../Img/cancel.png';
import delivery from '../Img/delivery.png';
import order from '../Img/order.png';
import revenue from '../Img/revenue.png';
import Barchart from '../charts/DashBoardBarchartLeft';
import DashBoardBarchartRight from '../charts/DashBoardBarchartRight';
import Order from '../charts/DashBoardLineChart';
import { Revenue } from '../charts/DashboardRevenue';
import Pie_Dashboard from '../charts/Pie_Dashboard';
import Todo from "../Components/Todo"
 import Calender from '../Components/Calender';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Dashboard = () => {
  const pageStyle = {
    backgroundColor: '#F3F2F7',
  };
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
    <Box sx={{ flexGrow: 1,padding: '0',paddingRight:'0',marginTop:'30px', marginLeft: '15px', marginRight: 'auto',maxWidth: '1000px'}}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
     {/*top 4 boxes--01--------------------------------------------------------------------------------- */}
      <Grid item xs={12} sm={6} md={3}>
          <Card  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 220,'&:hover': { backgroundColor: '#f0f0f0' } }}>
      <CardMedia
        sx={{
        width: 65,
        height:65,
        ml: 2
       }}
        image={order}
      />
      <CardContent sx={{ flex: '1' }}>
      <Typography gutterBottom variant="h5" component="div">
        65
        </Typography>
        <Typography >
        Total Orders
        </Typography>
      </CardContent>
    </Card>
        </Grid>

  {/*top 4 boxes--02--------------------------------------------------------------------------------- */}
  <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 220}}>
      <CardMedia
        sx={{
          width: 65,
          height:65,
          ml: 2
         }}
        image={cancel4}
      />
      <CardContent sx={{ flex: '1' }}>
      <Typography gutterBottom variant="h5" component="div">
        60
        </Typography>
        <Typography >        Total Delivery
        </Typography>
      </CardContent>
    </Card>
        </Grid>
      {/*top 4 boxes--03--------------------------------------------------------------------------------- */}
      <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 220}}>
      <CardMedia
         sx={{
          width: 65,
          height:65,
          ml: 2
         }}
        image={delivery}
      />
      <CardContent sx={{ flex: '1' }}>
      <Typography gutterBottom variant="h5" component="div">
        57
        </Typography>
        <Typography >        Total Cancel
        </Typography>
      </CardContent>
    </Card>
        </Grid>
    {/*top 4 boxes--04--------------------------------------------------------------------------------- */}
 
    <Grid item xs={12} sm={6} md={3}>
          <Card  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 220}}>
      <CardMedia
         sx={{
          width: 65,
          height:65,
          ml: 2
         }}
        image={revenue}
      />
      <CardContent sx={{ flex: '1' }}>
      <Typography gutterBottom variant="h5" component="div">
        6
        </Typography>
        <Typography > Total Revenue</Typography>
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
    <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 'auto', overflow: 'auto',height:'435px'}}>        <CardContent>
          <Calender/>
        </CardContent>
      </Card>
    </Grid>
    {/*----------------Todo list-------------------------*/}
    
    <Grid item xs={12} sm={6}>
    <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 'auto', overflow: 'auto' ,height:'435px'}}>        <CardContent>
    <Todo/>
        </CardContent>
      </Card>
    </Grid>

         {/*-----------graph-Bar left----------- */}
    <Grid item xs={12} sm={6}>
    <Card sx={{ display: 'flex', justifyContent: 'center',marginTop:'30px', alignItems: 'center', maxWidth: 'auto', overflow: 'auto'}}>        <CardContent>
          <Barchart />
        </CardContent>
      </Card>
    </Grid>
    {/*-----------graph-Bar-Right----------- */}
    <Grid item xs={12} sm={6}>
    <Card sx={{ display: 'flex', justifyContent: 'center', marginTop:'30px',alignItems: 'center', maxWidth: 'auto', overflow: 'auto' }}>        <CardContent>
    <DashBoardBarchartRight/>
        </CardContent>
      </Card>
    </Grid>
    {/*-----------graph-line-Order---------- */}
    <Grid item xs={12} sm={8}>
    <Card sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'auto',marginTop:'30px', height:'300px'  }}>
         <CardContent>
    <Order/>
        </CardContent>
      </Card>
    </Grid>
    {/*-----------graph-pie-Demands order---------- */}
    <Grid item xs={12} sm={4}>
    <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 'auto',marginTop:'30px', height:'300px' }}>        <CardContent>
    <Pie_Dashboard />
        </CardContent>
      </Card>
    </Grid>
{/*-----------graph-line----------- */}
    <Grid item xs={12} sm={12}>
    <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 'auto', overflow: 'auto',marginTop:'30px', height:'400px'}}>        <CardContent>
          <Revenue />
        </CardContent>
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

export default Dashboard;