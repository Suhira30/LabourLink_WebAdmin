import React from 'react'
import Box from '@mui/material/Box';
import Item from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import frontlogin from '../Img/frontlogin.png';
import applogo from '../Img/app-logo.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// function Copyright(props) {
//   return (
//   <Typography variant="body2" color="text.secondary" align="center" {...props}>
//     {'Copyright © '}
//     <Link color="inherit" href="https://mui.com/">
//       Your Website
//     </Link>{' '}
//     {new Date().getFullYear()}
//     {'.'}
//     </Typography>
//     );
// //   }
//   const defaultTheme = createTheme();
  function handleSubmit(event, navigate) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  
    axios.post('/api/login/admin', {
      email: data.get('email'),
      password: data.get('password'),
    })
    .then(response => {
      // Store the token in local storage
      localStorage.setItem('token', response.data.accessToken);
      // Redirect to the dashboard
      navigate('/dashboard');
    })
    .catch(error => {
      console.error('Login error:', error);
      // Handle login error (e.g., display error message)
    });
  }
  
export const Login = () => { 
  const navigate = useNavigate(); 
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    axios.post('http://localhost:1000/api/v1/auth/login/admin', {
      email: data.get('email'),
      password: data.get('password'),
  })
      .then(response => {
          // Store the token in local storage
          localStorage.setItem('token', response.data.accessToken);
          // Redirect to the dashboard
          navigate('/dashboard');
      })
      .catch(error => {
          console.error('Login error:', error);
          // Handle login error (e.g., display error message)
          alert('Invalid email or password');
      });
    };
return (
  <>
  <Box sx={{width: '100vw',height: '100vh',display: 'grid',gridTemplateColumns: {xs: '1fr',   sm: '55% 45%',},}}>
    <Item sx={{ gridRow: '1', gridColumn: '1',width:"100%",bgcolor: '#FBE6D4',display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    <img src={frontlogin}  style={{ maxWidth: '80%', maxHeight: '70%',height:'auto' ,width:'auto'}} />
    </Item>
    <Item sx={{ gridRow: '1', gridColumn: '2',width:"100%",overflow: 'hidden'}}>
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{  position: 'relative' }}>
    <Box
    sx={{
    my: 12,
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center', 
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    }}>
   <img src={applogo} style={{ maxWidth: '152px', maxHeight: '153px'}} />
    </Box>
    </Box>
  <CssBaseline />
    <Box sx={{my: 25,mx: 4,display: 'flex',flexDirection: 'column',alignItems: 'center',}}>
    <Typography component="h1" variant="h4" >Labor <span style={{ color: '#ec762f' }}>Link</span></Typography>
    <Typography component="h1" variant="h6"> Log in to your Account</Typography>
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
    <Typography variant="subtitle1" gutterBottom style={{ marginBottom: '-15px' }}>Email Address</Typography>
      <TextField margin="normal" required fullWidth id="email" name="email"autoComplete="email" autoFocus/>
    <Typography variant="subtitle1" gutterBottom style={{ marginBottom: '-15px' }}>Password </Typography>
      <TextField margin="normal" required fullWidth name="password"type="password"id="password"autoComplete="current-password"/>
      <FormControlLabel control={<Checkbox value="remember" color="primary" />}label="Remember me"/>
      <Button type="submit"fullWidth variant="contained" sx={{  mt: 3, mb: 2,backgroundColor: '#ec762f', borderRadius:'20px'}}>
        LOG IN
      </Button>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
      <Link href="#" variant="body2">Forgot password?</Link>
      </Grid>
    <Grid item xs={12} sm={6}>
      <Link href="#" variant="body2"> {"Don't have an account? Sign Up"} </Link>
    </Grid>
    </Grid>
    {/*<Copyright sx={{ mt: 5 }} />*/}
    </Box>
    </Box>
    </Item>
    </Box>
</>
  )
}
export default Login;