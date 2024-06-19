import React, { useState, useEffect } from 'react';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid'; 
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useNavigate  } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import userService from './Service/userService';
import BookingHistory from '../Components/BookingHistory';

const IndividualUserDetail = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const { email } = useParams();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [removalPurpose, setRemovalPurpose] = useState('');
  
  const fetchUserData = async (email) => {
    try {
      const userData = await userService.fetchIndividualUserData(email);
      setUser(userData);
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
      await userService.removeUserData(email,removalPurpose);
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
          <tr>
            <td style={{ width: 'auto' }}><strong>Role</strong></td>
            <td>:</td>
            <td>{user.role}</td>
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
          }} onClick={()=>handleClickOpen(user.email)}>Remove</Button>
                  </div>
                  </CardContent>
                </Card>
              </Grid>

    {/*---------------------------------------------------Dailog box ---------------------------*/}
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
              {/*----------------Project List-------------------------*/}
              <Grid item xs={12} sm={6}>
                <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 'auto', overflow: 'auto' ,height:'435px'}}>        
                  <CardContent>
                   < BookingHistory/>
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
