import React, { useState, useEffect } from 'react';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import notificationService from './Service/notificationService';
const Notification = () => {
  const pageStyle = {
    backgroundColor: '#F3F2F7',
  };

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchdata=async () => {
        try{
            const tabledata=await notificationService.fetctNotificationData();
            console.log('Fetched data:', tabledata); 
            setNotifications(tabledata);
            
           }catch(error){
            console.log("error:", error);
           }
    };
    fetchdata();
    },[]);
  return (
    <>
      <div style={pageStyle}>
        <Sidebar>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0', marginTop: '80px', marginLeft: 'auto', marginRight: 'auto', maxWidth: '1000px' }}>
            <Box sx={{ flexGrow: 1, padding: '0', paddingRight: '0', marginTop: '30px', marginLeft: '15px', marginRight: 'auto', maxWidth: '1000px' }}>
              <Grid container rowSpacing={2} justifyContent="center" columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
                {/* Add grid items if needed */}
              </Grid>
            </Box>
          </div>

          {/* List Notifications */}
          <Box sx={{ padding: '0', marginTop: '10px', marginLeft: 'auto', marginRight: 'auto', maxWidth: '700px' }}>
            <div>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center" alignItems="center">
                <List sx={{ width: '100%', bgcolor: 'background.paper', marginLeft: '20px' }}>
                  <Typography component="span" variant="body2" color="text.primary" fontSize="16px">Notifications</Typography>
                  {notifications.map((notification, index) => (
                    <React.Fragment key={index}>
                      <ListItemText
                        primary={
                          <Typography component="span" variant="body2" color="text.primary" fontSize="16px">
                            <Typography component="span" variant="body2" fontWeight="bold">
                              {notification.name}
                            </Typography>
                            {` with ${notification.email} added ${notification.documentUri} for ${notification.jobRole} on ${notification.joinDate}`}
                          </Typography>
                        }
                        secondary={
                          <React.Fragment>
                            <Typography component="span" variant="body2" color="text.secondary">
                              Join Time: {notification.joinTime}
                            </Typography>
                          </React.Fragment>
                        }
                      />
                      <Divider variant="inset" component="li" />
                    </React.Fragment>
                  ))}
                </List>
              </Grid>
            </div>
          </Box>

          {/* Footer */}
          <div style={{ marginTop: '30px', maxWidth: '100%' }}>
            <Footer />
          </div>
        </Sidebar>
      </div>
    </>
  );
}

export default Notification;
