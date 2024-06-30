import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import logout from '../Img/Logout.jpg';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
const navigate = useNavigate();
const handleOnClick=()=>{
    navigate("/");
  }
  return (
    <>
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '45% 55%' },
        }}
      >
        <Box
          sx={{
            my: 25,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h4">
            Labor <span style={{ color: '#ec762f' }}>Link</span>
          </Typography>
          <Typography component="h1" variant="h6"sx={{ fontSize: '5rem' }} >
            You are log out
          </Typography>
          <Typography component="h1" variant="h6"sx={{ fontSize: '2rem' }} >
            See you again !
          </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ width:"100px",marginTop:"20px", backgroundColor: '#ec762f', borderRadius: '20px' }}
              onClick={handleOnClick}
            >
              LOG IN
            </Button>
            
          </Box>
    

        <CssBaseline />

        <Box
          sx={{
            gridRow: '1',
            gridColumn: '2',
            width: '100%',
            bgcolor: '#fde8e3',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img src={logout} style={{ maxWidth: '100%', maxHeight: '100%', height: 'auto', width: 'auto' }} />
        </Box>
      </Box>
    </>
  );
};

export default Logout;
