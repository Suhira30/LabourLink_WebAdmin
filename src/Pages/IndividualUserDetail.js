import React, { useState, useEffect } from 'react';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { useParams, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import userService from './Service/userService';
import IndividualReport from '../Components/IndividualReport';
import IndividualBookingHistory from '../charts/IndividualBookingHistory';

const IndividualUserDetail = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    const { email } = useParams();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [removalPurpose, setRemovalPurpose] = useState('');

    const fetchUserData = async (email) => {
        try {
            const userData = await userService.fetchIndividualUserData(email);
            setUser(userData);
            console.log("person data:",userData);
        } catch (error) {
            console.error('Error fetching individual user data:', error);
        }
    };

    useEffect(() => {
        fetchUserData(email);
    }, [email]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setRemovalPurpose('');
    };

    const handleConfirmRemove = async () => {
        setLoading(true);
        try {
            await userService.removeUserData(email, removalPurpose);
            await fetchUserData(email); // Optional: If you need to refetch the individual user data
            navigate('/user-detail');   // Navigate to the user-detail page
        } catch (error) {
            console.error('Error removing individual user data:', error);
        } finally {
            setLoading(false);
            handleClose();
        }
    };

    return (
        <>
            <div style={{ backgroundColor: '#F3F2F7' }}>
                <Sidebar>
                    {/* <Box sx={{ padding: '0', marginTop: '130px', marginLeft: '100px', marginRight: 'auto'}}> */}
                    <Box sx={{padding: '0',paddingRight:'0',marginTop:'130px', marginLeft: '100px', marginRight: 'auto',maxWidth: '1000px' }}>

                        <Grid container spacing={5}>
                            {/* User Detail Section */}
                            <Grid item xs={12} sm={6}>
                                <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 'auto', overflow: 'auto', height: '100%' }}>
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
                                            >
                                                <div style={{ display: 'flex', justifyContent: 'left' }}>
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
                                                        </tbody>
                                                    </table>
                                                </div>
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
                                                        }} onClick={() => handleClickOpen(user.email)}>Remove</Button>
                                                </div>
                                            </Box>
                                        )}
                                    </CardContent>
                                </Card>
                            </Grid>

                            {/* Report Detail Section */}
                            <Grid item xs={12} sm={6}>
                                <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 'auto', overflow: 'auto',height:'100%' }}>
                                    <CardContent>
                                     <IndividualReport user={email} /> 
                                    </CardContent>
                                </Card>
                            </Grid>

                            {/* Dialog for Removal Purpose */}
                            <Dialog open={open} onClose={handleClose}>
                                <DialogTitle>Removal Purpose</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        Please enter the reason for removing this user:
                                    </DialogContentText>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="removal-purpose"
                                        label="Removal Purpose"
                                        type="text"
                                        fullWidth
                                        variant="standard"
                                        value={removalPurpose}
                                        onChange={(e) => setRemovalPurpose(e.target.value)}
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose}>Cancel</Button>
                                    <Button onClick={handleConfirmRemove} disabled={loading || !removalPurpose}>
                                        {loading ? 'Removing...' : 'Remove'}
                                    </Button>
                                </DialogActions>
                            </Dialog>

                            {/* Individual Booking History */}
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

export default IndividualUserDetail;
