import React ,{ useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import user from '../Img/user.png';
import job from '../Img/job.png';
import JobVSBooking from '../charts/JobVsBooking';
import jobService from './Service/jobService';
import JobPieChart from '../charts/JobPieChart';


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
  {/*-----------form-table----------- */}
  <Grid item xs={6}  sx={{ height: '400px' }}>
    <Card >       
      <JobVSBooking />
    </Card>
  </Grid>

  {/* ----------Pie chart----------- */}
  <Grid item xs={6} sx={{ height: '400px' }}  >
    <Card >        
    <JobPieChart/>
    </Card>
  </Grid>
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