import React, { useState, useEffect } from 'react';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid'; 
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import userService from './Service/userService';
import IndividualBookingHistory from '../charts/IndividualBookingHistory';


const IndividualSuspendUser = () => {
    const { email } = useParams();
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const fetchUserData = async (email) => {
        try {
          const userData = await userService.fetchSuspendIndividualUserData(email);
          setUser(userData);
        } catch (error) {
          console.error('Error fetching individual user data:', error);
        }
      };
    
      useEffect(() => {
        fetchUserData(email);
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
      <table style={{ width: 'auto' }}>
        <tbody>
          <tr>
            <td style={{ width: 'auto' }}> <strong>Name</strong></td>
            <td>:</td>
            <td>{user.name}</td>
          </tr>
          <tr>
            <td style={{ width: 'auto' }}><strong>Email</strong></td>
            <td>:</td>
            <td>{user.email}</td>
          </tr>
          <tr  >
            <td style={{ width: 'auto'  }}><strong>Join date</strong></td>
            <td>:</td>
            <td>{user.joinDate}</td>
          </tr>
          <tr  >
            <td style={{ width: 'auto'  }}><strong>Mobile Number</strong></td>
            <td>:</td>
            <td>{user.mobileNumber}</td>
          </tr>
          <tr>
            <td style={{ width: 'auto' }}><strong>Role</strong></td>
            <td>:</td>
            <td>{user.role}</td>
          </tr>
          {user.role === 'LABOUR' && (
            <tr>
            <td style={{ width: 'auto' }}><strong>Job Role</strong></td>
            <td>:</td>
            <td>{user.jobRole.join(', ')}</td>
        </tr>
    )}                                                    
          <tr  >
            <td style={{ width: 'auto'  }}><strong>Reason for Suspend</strong></td>
            <td>:</td>
            <td>{user.reason}</td>
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
export default IndividualSuspendUser;