import React from 'react'
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import user from '../Img/user.png';
import job from '../Img/job.png';
import { styled } from '@mui/material/styles';
import JobDetailTable from '../charts/JobDetailTable';
import JobDemandLine from '../charts/JobDemandLine';
import { FormJobDetail } from '../Components/FormJobDetail';
import axios from 'axios';
import { useEffect, useState } from "react";
import jobService from './Service/jobService';

const Jobdetail = () => {
  // ------------------------Count of job------------------
  const [jobCount, setJobCount] = useState(0);
  const [demandJob, setHighDemandJob] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
    try{
      const jobs=await jobService.fetchJobCount();
      setJobCount(jobs);
      const highDemandJob=await jobService.fetchHighDemand();
      setHighDemandJob(highDemandJob);
    }
    catch (error) {
      console.error('Error fetching count:', error);
    }
  };
  fetchData();
}, []);
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
          <Card  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 220}}>
      <CardMedia
        sx={{
        width: 65,
        height:65,
        ml: 2
       }}
        image={job}
      />
      <CardContent sx={{ flex: '1' }}>
      <Typography gutterBottom variant="h5" component="div">
      {jobCount}
        </Typography>
        <Typography >
        Jobs
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
        image={user}
      />
      <CardContent sx={{ flex: '1' }}>
      <Typography gutterBottom variant="h6" component="div">
        {demandJob}
        </Typography>
        <Typography >        High Demand
        </Typography>
      </CardContent>
    </Card>
        </Grid>
        </Grid>
        </Box>
      </div>
  {/*---------------------------02 grid------------------------------------------------------- */}
  <Box sx={{ padding: '0', marginTop:'30px', marginLeft: 'auto', marginRight: 'auto', maxWidth: '1000px' }}>
  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center" alignItems="center">
  {/*-----------form-left----------- */}
  <Grid item xs={12} sm={8} >
    <Card sx={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', overflow: 'auto', height: '300px' }}>        
      {/* <FormJobDetail /> */}
    </Card>
  </Grid>
  {/*----------Right detail----------- */}
  <Grid item xs={12} sm={4} sx={{ height: '100%' }}>
    <Card sx={{ display: 'flex', width: '100%', justifyContent: 'center', overflow: 'auto', height: '300px' }}>       
      <JobDetailTable />
    </Card>
  </Grid>
</Grid>
     {/*----------Jod Demand per a day----------- */}
    <Grid item xs={12} sm={12}>
    <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 'auto', overflow: 'auto',marginTop:'30px'}}>        <CardContent>
          <JobDemandLine />
        </CardContent>
      </Card>
    </Grid>
    </Box>

  {/*---------------------------Footer------------------------------------------------------- */}
   
  <div style={{marginTop:'100px',maxWidth:'100%'}}> 
    <Footer/>
    </div>
    </Sidebar>
    </div>
    
 
  </>

  )
}

export default Jobdetail