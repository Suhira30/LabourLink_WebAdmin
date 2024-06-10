import React from 'react'
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import suspenduser from '../Img/suspenduser.png';
import totaluser from '../Img/totaluser.png';
import deactiveuser from '../Img/deactiveuser.png';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import UserNew from '../charts/UserNew';
import UserSuspend from '../charts/UserSuspend';
import UserDeactivate from '../charts/UserDeactivate';
import { useEffect, useState } from "react";
import userService from './Service/userService';

const pageStyle = {
  backgroundColor: '#F3F2F7',
};
 const Userdetail = () => {
  const [userCount, setUserCount] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
    try{
      const users=await userService.fetchUserCount();
      setUserCount(users);}
      catch (error) {
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
  maxWidth: '1000px'
  }}>  
    <Box sx={{ flexGrow: 1,padding: '0',paddingRight:'0',marginTop:'30px', marginLeft: '15px', marginRight: 'auto',maxWidth: '1000px' }}>
       <Grid container rowSpacing={2} justifyContent= 'center' columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
     {/*top  boxes--01--------------------------------------------------------------------------------- */}
      <Grid item xs={12} sm={6} md={3}>
          <Card  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 220,'&:hover': { backgroundColor: '#f0f0f0' } }}>
      <CardMedia
        sx={{
        width: 65,
        height:65,
        ml: 2
       }}
        image={totaluser}
      />
      <CardContent sx={{ flex: '1' }}>
      <Typography gutterBottom variant="h5" component="div">
        {userCount}
        </Typography>
        <Typography >
        Total Users
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
        image={suspenduser}
      />
      <CardContent sx={{ flex: '1' }}>
      <Typography gutterBottom variant="h5" component="div">
        --
        </Typography>
        <Typography >        Suspend User
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
         image={ deactiveuser}      />
      <CardContent sx={{ flex: '1' }}>
      <Typography gutterBottom variant="h5" component="div">
       --
        </Typography>
        <Typography >        Deactive User
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