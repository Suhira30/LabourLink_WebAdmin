import React from 'react'
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const mail = () => {
    const pageStyle = {
        backgroundColor: '#F3F2F7',
      };
    
  return (
    <>
    <div style={pageStyle}>
      <Sidebar>
      <Box sx={{ padding: '0', marginTop: '120px', marginLeft: 'auto', marginRight: 'auto', maxWidth: '1000px' }}>
        <Grid container  columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center" alignItems="center">
        </Grid>
      </Box>
    {/*---------------------------Footer------------------------------------------------------- */}
    <div style={{marginTop:'30px',maxWidth:'100%'}}> 
        <Footer />
    </div>
        </Sidebar>
    </div>
    </>
  )
}
export  default mail;
