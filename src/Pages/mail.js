import React from 'react'
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import { Typography } from '@mui/material';
import mail1 from '../Img/mail1.png'
import worningMail from "../Img/warningMail.png";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import MailTab from "../Components/MailTab";
const mail = () => {
    const pageStyle = {
        backgroundColor: '#F3F2F7',
      };
    
  return (
    <>
    <div style={pageStyle}>
      <Sidebar>
      <Box sx={{ flexGrow: 1,padding: '0',paddingRight:'0',marginTop:'110px', marginLeft: '100px', marginRight: '100px',maxWidth: '100%' }}>
   {/* mail 1--------------------------------- */}
    <Box sx={{ width: 'auto%', height: '62vh', display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '45% 55%' },  bgcolor: 'white' }}>
      <img src={mail1} style={{ width: "93%", height: "93%", objectFit: 'contain', marginTop: "5px",paddingLeft:"50px",paddingRight:"0" }} />
      <CssBaseline />
      <Box sx={{ gridRow: '1', gridColumn: '2', width: '100%', height: '62vh', bgcolor: 'white',  flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 2,marginLeft:"140px",marginTop:"20px"}}>
        <Box component="span" sx={{ color: 'green' }}>Vacancy</Box> Mail
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',paddingRight:"110px",paddingLeft:"0",display: 'flex-start', '& > :not(style)': { m: 1, width: '100%' } }}>
          <TextField helperText="Subject" id="demo-helper-text-aligned" label="Subject"  value="Vacancy" InputProps={{readOnly: true }}/>
          <TextField helperText="Enter Mail Body"  id="outlined-multiline-static" label="Mail Body"  multiline rows={5} />
        </Box>
        <Stack direction="row" spacing={2} sx={{marginLeft:"165px",marginTop:"10px"}}>
        <Button variant="outlined" endIcon={<SendIcon />}
        sx={{color: '#ffffff',backgroundColor:"#439c2f", border:"none", '&:hover': { backgroundColor: '#27cc02', border:"none" }}} >
          Send
        </Button>
        </Stack>
      </Box>
    </Box>

    {/* mail 2--------------------------------- */}
    <Box sx={{width: 'auto%',height: '75vh',display: 'grid',marginTop:"30px",gridTemplateColumns: { xs: '1fr', sm: '55% 45%' }}}>
      <Box sx={{ gridRow: '1', gridColumn: '1', width: '100%', height: '75vh', bgcolor: 'white',  flexDirection: 'column', justifyContent: 'center', alignItems: 'center',paddingLeft:"50px",paddingRight:"0" }}>
        <Typography sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 2,marginLeft:"140px",marginTop:"20px"}}>
        <Box component="span" sx={{ color: 'red' }} value="Warning ">Warning</Box> Mail
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',paddingRight:"80px",paddingLeft:"50px",display: 'flex-start', '& > :not(style)': { m: 1, width: '100%' } }}>
          <TextField helperText="Subject" id="demo-helper-text-aligned" label="Subject" value="Warning" InputProps={{readOnly: true }}/>
          <TextField helperText="Enter Mail Id" id="demo-helper-text-aligned" label="Sender" />
          <TextField helperText="Enter Mail Body"  id="outlined-multiline-static" label="Mail Body"  multiline rows={4} />
        </Box>
        <Stack direction="row" spacing={2} sx={{marginLeft:"173px",marginTop:"10px"}}>
        <Button variant="outlined" endIcon={<SendIcon />}
         sx={{color: '#ffffff',backgroundColor:"#d13a0d", border:"none", '&:hover': { backgroundColor: '#ff0000', border:"none" }}} >
        Send
        </Button>
        </Stack>

      </Box>
    <CssBaseline />
    <Box sx={{ gridRow: '1', gridColumn: '2',width: '100%',height: '75vh', display: 'flex',alignItems: 'center',justifyContent: 'center', bgcolor: 'white'}}>
    <img src={worningMail} style={{ width: "100%", height: "100%", objectFit: 'contain', marginTop: "-15px",paddingLeft:"0px",paddingRight:"80px" }} />
    </Box>
    </Box>
{/*-------------------------------------------Fetch all mail ----------------------------- */}
    <Box sx={{width: 'auto%',display: 'grid',marginTop:"30px"}}>
    <MailTab/>
    </Box>
    </Box>
{/*---------------------------Footer------------------------------------------------------- */}
    <div  style={{backgroundColor:"#E7ECFF"}}>
    <div style={{marginTop:'30px',maxWidth:'100%'}}> 
        <Footer /></div>
    </div>
        </Sidebar>
    </div>
    </>
  )
}
export  default mail;
