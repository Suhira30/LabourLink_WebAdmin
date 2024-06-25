import React, { useState, useEffect } from 'react';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem'; // Corrected usage
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import notificationService from './Service/notificationService';
import { NotificationsOff } from '@mui/icons-material';
import { useVerifiedLabour } from '../Context/VerifiedLabourContext ';
import Button from '@mui/material/Button';

const Notification = () => {
  const pageStyle = {
    backgroundColor: '#F3F2F7',
  };
  
  const [notifications, setNotifications] = useState([]); // Uncommented
  const [reports, setReports] = useState([]);
  const [clickedButtons, setClickedButtons] = useState({});
  const [clickedReportButtons, setClickedReportButtons] = useState({});
  const { setVerifiedList } = useVerifiedLabour(); // Correct context usage

  useEffect(() => {
    const socket = new SockJS('http://localhost:1000/ws');
    const stompClient = new Client({
      webSocketFactory: () => socket,
      onConnect: () => {
        stompClient.subscribe('/topic/reports', (message) => {
          console.log('Connected report notification for page');
          const report = JSON.parse(message.body);
          console.log('Connected report notification for page',report.id);

          handleReportNotification(report);
        });
      },
      onStompError: (frame) => {
        console.error('Broker reported error: ' + frame.headers['message']);
        console.error('Additional details: ' + frame.body);
      },
    });

    stompClient.activate();

    const storedNotifications = JSON.parse(localStorage.getItem('notifications')) || [];
    const storedReports = JSON.parse(localStorage.getItem('reports')) || [];
    const storedClickedButtons = JSON.parse(localStorage.getItem('clickedButtons')) || {};
    const storedClickedReportButtons = JSON.parse(localStorage.getItem('clickedReportButtons')) || {};

    setNotifications(storedNotifications);
    setReports(storedReports);
    setClickedButtons(storedClickedButtons);
    setClickedReportButtons(storedClickedReportButtons);

    return () => {
      stompClient.deactivate();
    };
  }, []);

  // const handleNotification = (notification) => {
  //   setNotifications(prevNotifications => {
  //     const newNotifications = [notification, ...prevNotifications];
  //     localStorage.setItem('notifications', JSON.stringify(newNotifications));
  //     return newNotifications;
  //   });
  // };

  const handleReportNotification = (report) => {
    setReports(prevReports => {
      const newReports = [report, ...prevReports];
      localStorage.setItem('reports', JSON.stringify(newReports));
      return newReports;
    });
  };

  const handleClearLocalStorage = () => {
    localStorage.removeItem('notifications');
    setNotifications([]); // Clear state
    alert('LocalStorage items removed.');
  };

  const handleClearReportLocalStorage = () => {
    localStorage.removeItem('reports');
    setReports([]); // Clear state
    alert('LocalStorage items removed.');
  };

  const handleNotificationOnClick = async (email, index) => {
    try {
      await notificationService.verifiedLabour(email);
      const isVerified = await notificationService.IsVerifiedLabour(email);

      // Update notifications
      const updatedNotifications = notifications.map((notification, idx) => {
        if (idx === index) {
          return { ...notification, verified: isVerified };
        }
        return notification;
      });
      setNotifications(updatedNotifications);
      localStorage.setItem('notifications', JSON.stringify(updatedNotifications));
      const updatedClickedButtons = { ...clickedButtons, [email]: true };
      setClickedButtons(updatedClickedButtons);
      localStorage.setItem('clickedButtons', JSON.stringify(updatedClickedButtons));

    } catch (error) {
      console.error('Verified error:', error);
    }
  };
  
  const handleReportOnClick = (id) => {
    // Update clickedReportButtons
    const updatedClickedReportButtons = { ...clickedReportButtons, [id]: true };
    setClickedReportButtons(updatedClickedReportButtons);
    localStorage.setItem('clickedReportButtons', JSON.stringify(updatedClickedReportButtons));
  };

  return (
    <div style={pageStyle}>
      <Sidebar>
        <Box sx={{ padding: '0', marginTop: '120px', marginLeft: 'auto', marginRight: 'auto', maxWidth: '800px', overflow: 'hidden' }}>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '0px' }}>
            <Typography
              component="span"
              variant="body2"
              color="primary"
              fontSize="16px"
              style={{ cursor: 'pointer' }}
              onClick={handleClearLocalStorage}
            >
              Clear all
            </Typography>
          </Grid>
          {/*-----Notification Registeration ------------ */}
          <Box sx={{ flexGrow: 1 }}>
            <List sx={{ width: '100%', bgcolor: 'background.paper', maxHeight: '400px', overflow: 'auto' }}>
              {notifications.map((notification, index) => (
                <React.Fragment key={index}>
                  <ListItem
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between', // Align items to left and right
                      alignItems: 'center', // Centers items vertically
                      paddingLeft: '10px',
                      paddingRight: '10px',
                      paddingTop: '8px',
                      paddingBottom: '8px',
                    }}
                  >
                    <ListItemText
                      primary={
                        <Typography component="span" color="text.primary" fontSize="16px">
                          <Typography component="span" fontWeight="bold">
                            {notification.name}
                          </Typography>
                          {` with ${notification.email} added `}
                          <a href={notification.documentUri} target="__blank" rel="noopener noreferrer">document </a> {`for job verification on ${notification.joinDate}`}
                        </Typography>
                      }
                    />
                    <IconButton color="primary" onClick={() => handleNotificationOnClick(notification.email, index)}>
                      {clickedButtons[notification.email] ? <CheckCircleIcon color="success" /> : <CheckCircleOutlineIcon />}
                    </IconButton>
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </React.Fragment>
              ))}
            </List>
          </Box>
          {/*-----Notification Report ------------ */}
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '0px' }}>
            <Typography
              component="span"
              variant="body2"
              color="primary"
              fontSize="16px"
              style={{ cursor: 'pointer' }}
              onClick={handleClearReportLocalStorage}
            >
              Clear all
            </Typography>
          </Grid>
          <Box sx={{ flexGrow: 1 }}>
            <List sx={{ width: '100%', bgcolor: 'background.paper', maxHeight: '400px', overflow: 'auto' }}>
              {reports.map((report, index) => (
                <React.Fragment key={index}>
                  <ListItem
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between', // Align items to left and right
                      alignItems: 'center', // Centers items vertically
                      paddingLeft: '10px',
                      paddingRight: '10px',
                      paddingTop: '8px',
                      paddingBottom: '8px',
                    }}
                  >
                    <ListItemText
                      primary={
                        <Typography component="span" variant="body2" color="text.primary" fontSize="16px">
                          <Typography component="span" variant="body2" fontWeight="bold">{report.ReportedByName}</Typography>
                          {` reported ${report.title} to ${report.reportedToId} ${report.id} `}
                          <Typography component="span" variant="body2" color="text.secondary">{`Reported on: ${report.reportedDate}`}</Typography>
                        </Typography>
                      }
                    />
                     <Stack direction="row" spacing={2}>
                     <Link to={`/user-detail/${report.reportedToId}`}>
                     <Button variant="outlined" color={clickedReportButtons[report.id] ? 'success' : 'secondary'} onClick={() => handleReportOnClick(report.id)}>
                          View
                        </Button>
                        </Link>
                    </Stack>
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </React.Fragment>
              ))}
            </List>
          </Box>
        </Box>
        {/*---------------------------Footer------------------------------------------------------- */}
        <div style={{ marginTop: '30px', maxWidth: '100%' }}>
          <Footer />
        </div>
      </Sidebar>
    </div>
  );
};

export default Notification;
