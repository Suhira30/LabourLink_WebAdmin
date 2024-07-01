import React from 'react'
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import aboutUs from '../Img/aboutUs.png';
import Grid from '@mui/material/Grid';
import mission1 from "../Img/mission1.png";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Footer from "../Components/Footer";
import Founder from "../Img/Founder.jpg";
import CoFounder from "../Img/CoFounder.jpg";
import CoFounder2 from "../Img/CoFounder2.jpg"
const OurStory = () => {
  return (
<>
<Box sx={{ flexGrow: 1,padding: '0',paddingRight:'0',marginTop:'30px', marginLeft: '100px', marginRight: '100px',maxWidth: '100%' }}>
    <Box sx={{width: 'auto%',height: '100vh',display: 'grid',gridTemplateColumns: { xs: '1fr', sm: '50% 50%' },bgcolor: '#fde8e3'}}>
        <Box sx={{my: 22,mx: 3,display: 'flex',flexDirection: 'column',alignItems: 'center',marginLeft:"90px",marginRight:"90px",}}>
            <Typography component="h1" variant="h4">
            Labor <span style={{ color: '#ec762f' }}>Link</span>
            </Typography>
            <Typography component="h1" variant="h6"sx={{ fontSize: '5rem' }} >
            Our Story
            </Typography>
            <Typography component="h1" variant="h3"sx={{ fontSize: '16px',lineHeight:"1.5",textAlign:"justify"}} >
            Labour Link is an innovative web application designed to connect customers 
            with skilled laborers effortlessly. Through this platform, customers can hire 
            laborers for various job roles, ensuring that they find the right person for their
            specific needs. Application not only simplifies the hiring process but also ensures
            transparency and reliability, making it the go-to solution for hiring skilled laborers.
            </Typography>          
        </Box>
      <CssBaseline />
        <Box sx={{ gridRow: '1', gridColumn: '2',width: '100%', bgcolor: 'white',display: 'flex',alignItems: 'center',justifyContent: 'center',}}>
        <img src={aboutUs} style={{ maxWidth: '100%', maxHeight: '100%', height: 'auto', width: 'auto' }} />
        </Box>
    </Box>
{/*-----------------mission-----------------------*/}
   <Box sx={{width: 'auto',height: '100vh', display: 'grid', bgcolor: '#fde8e3', gridTemplateColumns: { xs: '1fr', sm: '50% 50%' },}}>
   <Box sx={{ gridRow: '1', gridColumn: '1',width: '100%', bgcolor: 'white',display: 'flex',alignItems: 'center',justifyContent: 'center',}}>
        <img src={mission1} style={{ maxWidth: '100%', maxHeight: '100%', height: 'auto', width: 'auto' }} />
    </Box>
    <Box sx={{my: 22,mx: 3,gridColumn: '2',display: 'flex',flexDirection: 'column',alignItems: 'center',marginLeft:"90px",marginRight:"90px",marginTop:"150px",}}>
        <Typography component="h1" variant="h6"sx={{ fontSize: '5rem' }} >
        Our Mission
        </Typography>
        <Typography component="h1" variant="h3"sx={{ fontSize: '16px',lineHeight:"1.5",textAlign:"justify"}} >
        Labour Link is an innovative web application designed to connect customers 
        with skilled laborers effortlessly. Through this platform, customers can hire 
        laborers for various job roles, ensuring that they find the right person for their
        specific needs. Application not only simplifies the hiring process but also ensures
        transparency and reliability, making it the go-to solution for hiring skilled laborers.
        </Typography>          
    </Box>
      <CssBaseline />
    </Box>


{/*-------------Contact --------*/}
{/* <Box sx={{width: 'auto%',height: '100vh',display: 'grid',gridTemplateColumns: { xs: '1fr', sm: '50% 50%' },bgcolor: '#fde8e3',}}>
        <Box sx={{my: 22,mx: 3,display: 'flex',flexDirection: 'column',alignItems: 'center',marginLeft:"90px",marginRight:"90px",}}>
            <Typography component="h1" variant="h4">
            Labor <span style={{ color: '#ec762f' }}>Link</span>
            </Typography>
            <Typography component="h1" variant="h6"sx={{ fontSize: '5rem' }} >
            Our Story
            </Typography>
            <Typography component="h1" variant="h3"sx={{ fontSize: '16px',lineHeight:"1.5",textAlign:"justify"}} >
            Labour Link is an innovative web application designed to connect customers 
            with skilled laborers effortlessly. Through this platform, customers can hire 
            laborers for various job roles, ensuring that they find the right person for their
            specific needs. Application not only simplifies the hiring process but also ensures
            transparency and reliability, making it the go-to solution for hiring skilled laborers.
            </Typography>          
        </Box>
      <CssBaseline />
        <Box sx={{ gridRow: '1', gridColumn: '2',width: '100%', bgcolor: 'white',display: 'flex',alignItems: 'center',justifyContent: 'center',}}>
        <img src={aboutUs} style={{ maxWidth: '100%', maxHeight: '100%', height: 'auto', width: 'auto' }} />
        </Box>
    </Box> */}
        {/*-----------Leaders------------------------ */}
    <Box sx={{ width: '100%', height: 'auto', display: 'flex', alignContent: 'center', marginLeft: '0', padding: '0px',alignItems:"center" ,marginTop:"20px"}}>
  <Grid container alignContent={"center"} spacing={3} padding={"0px"} margin={"0"} alignItems={"center"} justifyContent={"center"}>
    <Grid item xs={3}>
      <Card sx={{ width: "300px", height: "600px", padding: "0px", margin: "0" }}>
          <CardMedia component="img" height="340" image={Founder} alt="green iguana" />
          <CardContent sx={{ padding: "16px" }}>
            <Typography gutterBottom variant="h5" component="div">
              S.B.Balachandran 
            </Typography>
            <Typography component="div">
              Founder
            </Typography>
            <Typography variant="body2" color="text.secondary">
            As the founder of this innovative platform, I am deeply
            passionate about creating solutions that make a tangible 
            difference in people's lives.
            Thank you for choosing to be a part of our community. Your trust and feedback 
            are invaluable to us as we strive to continuously improve and evolve.
            </Typography>
          </CardContent>
      </Card>
    </Grid>
    <Grid item xs={3}>
      <Card sx={{ width: "300px", height: "600px", padding: "0px", margin: "0" }}>
          <CardMedia component="img" height="340" image={CoFounder} alt="green iguana" />
          <CardContent sx={{ padding: "16px" }}>
            <Typography gutterBottom variant="h5" component="div">
              William Davis
            </Typography>
            <Typography variant="body2" color="text.secondary">
            As one of the co-founders, I am incredibly excited to share our journey with you.
            and this application is the result of countless hours of dedication, creativity, and teamwork.
            Thank you for being a part of our vision and for allowing us to be a part of your journey.
            </Typography>
          </CardContent>
      </Card>
    </Grid>
    <Grid item xs={3}>
      <Card sx={{ width: "300px",  height: "600px", padding: "0px", margin: "0" }}>
          <CardMedia component="img" height="340" image={CoFounder2} />
          <CardContent sx={{ padding: "16px" }}>
            <Typography gutterBottom variant="h5" component="div">
              Charles Jessy
            </Typography>
            <Typography variant="body2" color="text.secondary">
            As a co-founder, I am thrilled to have you on board and excited for you to experience what we’ve built. 
            Our journey started with a simple idea to LABOUR LINK.Thank you for being a part of our story. Your journey 
            with us is just beginning, and we’re here to support you every step of the way.      

            </Typography>
          </CardContent>
      </Card>
    </Grid>
  </Grid>
</Box>
</Box>
   {/*---------------------------Footer------------------------------------------------------- */}
   <div  style={{backgroundColor:"#E7ECFF",marginTop:"40px"}}>
 <div style={{width:"100%"}}> 
    <Footer/>
  </div>
  </div>
  </>
  )
}
export  default OurStory;
