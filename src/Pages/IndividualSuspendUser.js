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
import IndividualReport from '../Components/IndividualReport';

const IndividualSuspendUser = () => {
  const { email } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUserData = async (email) => {
    try {
      setLoading(true);
      const userData = await userService.fetchSuspendIndividualUserData(email);
      setUser(userData);
      console.log("Indiviudal data : ",userData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching individual user data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData(email);
  }, [email]);

  return (
    <>
      <div style={{ backgroundColor: '#F3F2F7' }}>
        <Sidebar>
        <Box sx={{padding: '0',paddingRight:'0',marginTop:'130px', marginLeft: '100px', marginRight: 'auto',maxWidth: '1000px' }}>
        <Grid container spacing={5}>
              <Grid item xs={12} sm={6}>
                <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 'auto', overflow: 'auto', height: '100%' }}>
                  <CardContent>
                    {user && (
                      <>
                        <Typography variant="h6" gutterBottom>
                          {user.name}
                        </Typography>
                        <div style={{ display: 'flex', justifyContent: 'left' }}>
                          <table style={{ width: 'auto' }}>
                            <tbody>
                              <tr>
                                <td style={{ width: 'auto' }}><strong>Name</strong></td>
                                <td>:</td>
                                <td>{user.name}</td>
                              </tr>
                              <tr>
                                <td style={{ width: 'auto' }}><strong>Email</strong></td>
                                <td>:</td>
                                <td>{user.email}</td>
                              </tr>
                              <tr>
                                <td style={{ width: 'auto' }}><strong>Join date</strong></td>
                                <td>:</td>
                                <td>{user.joinDate}</td>
                              </tr>
                              <tr>
                                <td style={{ width: 'auto' }}><strong>Mobile Number</strong></td>
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
                              <tr>
                                <td style={{ width: 'auto' }}><strong>Reason for Suspend</strong></td>
                                <td>:</td>
                                <td>{user.reason}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </>
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
                        Back
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
              {/* Report Detail Section */}
              <Grid item xs={12} sm={6}>
                <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 'auto', overflow: 'auto', height: '100%' }}>
                  <CardContent>
                    <IndividualReport user={email} />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <IndividualBookingHistory user={email} />
              </Grid>
            </Grid>
          </Box>
          <div  style={{backgroundColor:"#E7ECFF"}}>
          <div style={{ marginTop: '30px', maxWidth: '100%' }}>
            <Footer /></div>
          </div>
        </Sidebar>
      </div>
    </>
  );
}

export default IndividualSuspendUser;
