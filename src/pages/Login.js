import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Item from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { loginAdmin } from '../services/AuthService';


  const defaultTheme = createTheme();
export const Login = () => {  
  
  const [logError, setLogError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    try{
      let response = await loginAdmin("ADMIN", data.get('email'), data.get('password')); 

      localStorage.setItem("token", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);

      console.log(response);
      navigate('/'); // Navigate to the home page.
            
      setLogError("");
    } catch (e){
      setLogError("Invalid login, please try again");
    }
  };


  return (
    <div>
<Box
 sx={{
    width: '100vw',
    height: '100vh',
    display: 'grid',
    
    gridTemplateColumns: {
      xs: '1fr',   
      sm: '55% 45%', 
    },
 
  }}
><Item sx={{ gridRow: '1', gridColumn: '1',width:"100%",bgcolor: '#FBE6D4',display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
  <img src={require('./images/frontlogin.png')} style={{ maxWidth: '80%', maxHeight: '70%',height:'auto' ,width:'auto'}} />
  </Item>

  <Item sx={{ gridRow: '1', gridColumn: '2',width:"100%",overflow: 'hidden'}}>
  <Box
  component="form"
  noValidate
  onSubmit={handleSubmit}
  sx={{  position: 'relative' }} 
>
   <Box
   sx={{
    my: 9,
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center', 
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)', 
   
   }}
   >
   <img 
  src={require('./images/app-logo3.png')} 
  style={{ maxWidth: '80px', maxHeight: '80px'}} />
</Box>
    </Box>

        <CssBaseline />
          <Box
            sx={{
              my: 15,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              
            }}
          >
           
            <Typography component="h4" variant="h4" >
              Labour <span style={{ color: '#ec762f', fontWeight: '550' }}>LINK</span>
            </Typography>
            <Typography variant="subtitle1" gutterBottom sx={{ mt: 2, mb:0 }} style={{ fontWeight: '550'  }}>
            Log in to your Account
            </Typography>
           
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 0 }}>

            { logError &&
              <Typography variant="subtitle2" gutterBottom color="#742F2F" backgroundColor="#F4D6D2" 
                sx={{ mt: 0,
                      mb:0,
                      pt: 1, 
                      pr: 2,
                      pb: 1, 
                      pl: 2, 
                      borderRadius: 1
                        }}>
                {logError}
              </Typography>
            }

            <Typography variant="subtitle1" gutterBottom style={{ marginBottom: '-15px' }}>
      Email Address
    </Typography>
              <TextField
              
                margin="normal"
                required
                fullWidth
                id="email"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <Typography variant="subtitle1" gutterBottom style={{ marginBottom: '-15px' }}>
          Password
          </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
              
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ 
                  mt: 1, 
                  mb: 1,
                  backgroundColor: '#ec762f',
                  borderRadius:'20px',
                  '&:hover': {
                  backgroundColor: '#f2a272', // Light orange color
                },
                }}
               
              >
              LOG IN
              </Button>
              <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Link href="#" variant="body2"  sx={{mx:2, color:'#ec762f', textDecoration: 'none'}}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Link href="#" variant="body2" sx={{mx:1, color:'#ec762f', textDecoration: 'none'}}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>

              {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box>
          </Box>
       


  </Item>
  
</Box>
    </div>
  )
}

export default Login;