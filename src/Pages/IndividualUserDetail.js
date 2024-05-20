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
import { Link } from "react-router-dom";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const IndividualUserDetail = () => {
  const { email } = useParams(); 
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:1000/user/${email}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [email]); 
  const handleClick=()=>{
    axios.put(`http://localhost:1000/user/${email}`)
          .then(response =>{
            console.log("success");
          }).catch(error=>{
            console.log('failed');
          });
  }
  
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
                    {user.name}
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
      ><div style={{ display: 'flex', justifyContent: 'left' }}>
      <table style={{ width: '50%' }}>
        <tbody>
          <tr>
            <td style={{ width: '50%' }}> <strong>Name</strong></td>
            <td>:</td>
            <td>{user.name}</td>
          </tr>
          <tr>
            <td style={{ width: '50%' }}><strong>Email</strong></td>
            <td>:</td>
            <td>{user.email}</td>
          </tr>
          <tr>
            <td style={{ width: '50%' }}><strong>Role</strong></td>
            <td>:</td>
            <td>{user.role}</td>
          </tr>
          <tr  >
            <td style={{ width: '50%'  }}><strong>Join date</strong></td>
            <td>:</td>
            <td>{user.joinDate}</td>
          </tr>
          <tr  >
            <td style={{ width: '50%'  }}><strong>Mobile Number</strong></td>
            <td>:</td>
            <td>{user.mobileNumber}</td>
          </tr>
        </tbody>
      </table>
    </div>
    
      </Box>
    )}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
      <Link to={`/user-detail`}
          style={{
            display: "inline-block",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            textDecoration: "none",
            cursor: "pointer",
            marginRight: '20px',
          }}>
            Back</Link>

           <Button     
           style={{
            display: "inline-block",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            textDecoration: "none",
            cursor: "pointer",
            marginRight: '20px',
          }} onClick={handleClick}>Remove</Button>
                  </div>
                  </CardContent>
                </Card>
              </Grid>
              {/*----------------Project List-------------------------*/}
              <Grid item xs={12} sm={6}>
                <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 'auto', overflow: 'auto' ,height:'435px'}}>        
                  <CardContent>
                    {/* Project List */}
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
