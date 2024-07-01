import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';
import imglogo from '../Img/app-logo.png';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import {Link } from 'react-router-dom';

  
  function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" mt={1}>
        {'Copyright © '}
        <Link href="https://mui.com/" style={{textDecoration:"none",color:"inherit"}}>Laborlink&nbsp;</Link>
        {new Date().getFullYear()}
      </Typography>
    );
  }
const Footer = () => {
  return (
    <Container
      sx={{
        backgroundColor:'#E7ECFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8},
        py: { xs: 3, sm: 5 },
        textAlign: { sm: 'center', md: 'left' },
        justifyContent: 'space-between',
      width:'100%',
       maxWidth: '100%'
      }}
    >
      
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            minWidth: { xs: '100%', sm: '60%' },
          }}
        >
          <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
            <Box sx={{ ml: '-15px' }}>
              <img
                src={imglogo}
                style={{ width: '50px', height: '50px',marginLeft:'30px' }} 
                alt="Laborlink"
              />
            </Box>
            <Typography variant="body2" fontWeight={600} gutterBottom>
            Labour Link
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
            Hard work beats talent when talent doesn't work hard.
            </Typography>
            <Typography variant="body2" color="text.secondary">
            - Tim Notke
            </Typography>
           
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Quick Access
          </Typography>
          <Link style={{textDecoration: 'none',color:"inherit" }}href="#">
            Blogs
          </Link>
         
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
           About Us
          </Typography>
          <Link to={`/ourstory`} style={{ color: 'inherit',textDecoration:"none" }}>Our Story</Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <div>
          <Link color="text.secondary" href="#" style={{textDecoration:"none",color:"inherit"}}>
            Privacy Policy
          </Link>
          <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link color="text.secondary" href="#" style={{textDecoration:"none",color:"inherit"}}>
            Terms of Service
          </Link>
          <Copyright />
        </div>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: 'text.secondary',
          }}
        >
          <IconButton
            color="inherit"
            href="#"
            aria-label="GitHub"
            sx={{ alignSelf: 'center' }}
          >
            <FacebookOutlinedIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://twitter.com/MaterialUI"
            aria-label="X"
            sx={{ alignSelf: 'center' }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.linkedin.com/company/mui/"
            aria-label="LinkedIn"
            sx={{ alignSelf: 'center' }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}

export default Footer;



