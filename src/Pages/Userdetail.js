import React from 'react'
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import cancel4 from '../Img/cancel.png';
import delivery from '../Img/delivery.png';
import order from '../Img/order.png';
import revenue from '../Img/revenue.png';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import UserNew from '../charts/UserNew';
import UserSuspend from '../charts/UserSuspend';
import UserDeactivate from '../charts/UserDeactivate';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
 const Userdetail = () => {
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
  maxWidth: '1000px'
  }}>  
    <Box sx={{ flexGrow: 1,padding: '0',paddingRight:'0',marginTop:'30px', marginLeft: '15px', marginRight: 'auto',maxWidth: '1000px' }}>
       <Grid container rowSpacing={2} justifyContent= 'center' columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
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
  
        </Grid>
        </Box>
      </div>
      
   
  {/*---------------------------Table------------------------------------------------------- */}
  <Box sx={{ padding: '0',marginTop:'30px', marginLeft: 'auto', marginRight: 'auto',maxWidth: '1000px',paddingRight:'0'}}>
  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
      {/*--------------------01 table ------------------- */}
    <Grid item xs={12} sm={12}   >
    <Card sx={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    maxWidth: 'auto',
    marginTop:'0px',
    padding:'0',
    border: 'none',
    
    marginBottom:'0',
   
  }}>       <UserNew />
       
      </Card>
    </Grid>
    {/*--------------------02 table ------------------- */}
    <Grid item xs={12} >
    <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 'auto' , border: 'none',marginTop:'30px'}}>        
    <UserSuspend />   
      </Card>
    </Grid>
    {/*--------------------03  table ------------------- */}
    <Grid item xs={12} marginBottom={0}>
    <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 'auto' , border: 'none',marginTop:'30px'}}>        
    <UserDeactivate />
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
export default Userdetail;