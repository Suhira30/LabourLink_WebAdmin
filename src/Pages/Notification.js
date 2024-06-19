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
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';

const Notification = () => {
  const pageStyle = {
    backgroundColor: '#F3F2F7',
  };

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch all notifications from the backend
    const fetchNotifications = () => {
      fetch('http://localhost:1000/api/adminnotification')
        .then(response => response.json())
        .then(data => {
          const storageAvailable = ('localStorage' in window);
          const savedNotifications = storageAvailable ? JSON.parse(localStorage.getItem('notifications') || '[]') : [];
          const mergedNotifications = [...data, ...savedNotifications];
          setNotifications(mergedNotifications);

          if (storageAvailable) {
            localStorage.setItem('notifications', JSON.stringify(mergedNotifications));
          }
        })
        .catch(error => console.error('Error fetching notifications:', error));
    };

    fetchNotifications(); // Initial fetch

    // Set up WebSocket connection for real-time notifications
    const socket = new SockJS('http://localhost:1000/ws');
    const stompClient = new Client({
      webSocketFactory: () => socket,
      onConnect: () => {
        console.log('Connected');
        stompClient.subscribe('/topic/notifications', (message) => {
          const notification = JSON.parse(message.body);
          const updatedNotifications = [notification, ...notifications]; // Add new notification to the beginning
          setNotifications(updatedNotifications);

          // Store updated notifications in localStorage
          const storageAvailable = ('localStorage' in window);
          if (storageAvailable) {
            localStorage.setItem('notifications', JSON.stringify(updatedNotifications));
          }
        });
      },
      onStompError: (frame) => {
        console.error('Broker reported error: ' + frame.headers['message']);
        console.error('Additional details: ' + frame.body);
      },
    });

    stompClient.activate();

    return () => {
      stompClient.deactivate();
    };
  }, []); // Empty dependency array ensures this effect runs only once on component mount

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
