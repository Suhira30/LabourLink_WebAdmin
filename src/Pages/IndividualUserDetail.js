import React, { useState, useEffect } from 'react';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'; 
import { styled } from '@mui/material/styles';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const IndividualUserDetail = () => {
  const { email } = useParams(); // Extract email ID from URL
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:1000/user/${email}`)
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [email]); 

  
  return (
    <>
      <div style={{ backgroundColor: '#F3F2F7' }}>
        <Sidebar>
          <Box sx={{ padding: '0', marginTop: '130px', marginLeft: 'auto', marginRight: 'auto' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center" alignItems="center">
              <Grid item xs={12} sm={6}>
                <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 'auto', overflow: 'auto', height: 'auto' }}>        
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Personal Detail
                    </Typography>
                    {user && (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        noValidate
        autoComplete="off"
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          <label htmlFor={`name`}>Name</label>
          <Box
            id={`name`}
            name={`name`}
            value={user.name}
            sx={{
              width: '400px',
              height: '50px',
              border: '0.5px solid grey',
              opacity: 0.5,
            }}
          ></Box>
          <label htmlFor={`email`}>Email</label>
          <Box
            id={`email`}
            name={`email`}
            value={user.email}
            sx={{
              width: '400px',
              height: '50px',
              border: '0.5px solid grey',
              opacity: 0.5,
            }}
          ></Box>
          <label htmlFor={`role`}>Role</label>
          <Box
            id={`role`}
            name={`role`}
            value={user.role}
            sx={{
              width: '400px',
              height: '50px',
              border: '0.5px solid grey',
              opacity: 0.5,
            }}
          ></Box>
          <label htmlFor={`join_date`}>Join date</label>
          <Box
            id={`join_date`}
            name={`join_date`}
            value={user.join_date}
            sx={{
              width: '400px',
              height: '50px',
              border: '0.5px solid grey',
              opacity: 0.5,
            }}
          ></Box>
          
        </div>
      </Box>
    )}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
                      <Button variant="contained" color="primary" style={{ marginRight: '20px' }}>Back</Button>
                      <Button variant="contained" color="primary">Remove</Button>
                  </div>
                  </CardContent>
                </Card>
              </Grid>
              {/*----------------Todo list-------------------------*/}
              <Grid item xs={12} sm={6}>
                <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 'auto', overflow: 'auto' ,height:'435px'}}>        
                  <CardContent>
                    {/* Todo component goes here */}
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
          <div style={{ marginTop: '30px', maxWidth: '100%' }}> 
            <Footer />
          </div>
        </Sidebar>
      </div>
    </>
  );
}

export default IndividualUserDetail;
