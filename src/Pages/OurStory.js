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
import { CardActionArea } from '@mui/material';
import Footer from "../Components/Footer";

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
<Box sx={{width: 'auto%',height: '100vh',display: 'grid',gridTemplateColumns: { xs: '1fr', sm: '50% 50%' },bgcolor: '#fde8e3',}}>
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
        {/*-----------Leaders------------------------ */}
    <Box sx={{ width: '100%', height: '100vh', display: 'flex', alignContent: 'center', marginLeft: '0', padding: '0px',alignItems:"center" }}>
  <Grid container alignContent={"center"} spacing={3} padding={"0px"} margin={"0"} alignItems={"center"} justifyContent={"center"}>
    <Grid item xs={3}>
      <Card sx={{ width: "300px", height: "400px", padding: "0px", margin: "0" }}>
          <CardMedia component="img" height="140" image="/static/images/cards/contemplative-reptile.jpg" alt="green iguana" />
          <CardContent sx={{ padding: "16px" }}>
            <Typography gutterBottom variant="h5" component="div">
              S.B.Balachandran 
            </Typography>
            <Typography component="div">
              Founder
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
      </Card>
    </Grid>
    <Grid item xs={3}>
      <Card sx={{ width: "300px", height: "400px", padding: "0px", margin: "0" }}>
          <CardMedia component="img" height="140" image="/static/images/cards/contemplative-reptile.jpg" alt="green iguana" />
          <CardContent sx={{ padding: "16px" }}>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
      </Card>
    </Grid>
    <Grid item xs={3}>
      <Card sx={{ width: "300px", height: "400px", padding: "0px", margin: "0" }}>
          <CardMedia component="img" height="140" image="/static/images/cards/contemplative-reptile.jpg" alt="green iguana" />
          <CardContent sx={{ padding: "16px" }}>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
      </Card>
    </Grid>
  </Grid>
</Box>
</Box>
   {/*---------------------------Footer------------------------------------------------------- */}
   <div  style={{backgroundColor:"#E7ECFF"}}>
 <div style={{width:"100%"}}> 
    <Footer/>
  </div>
  </div>
  </>
  )
}
export  default OurStory;
