import React, { useState, useEffect } from 'react';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from "react-router-dom";
import notificationService from './Service/notificationService';

const Notification = () => {
  const pageStyle = {
    backgroundColor: '#F3F2F7',
  };
  const [notifications, setNotifications] = useState([]);
  const [reports, setReports] = useState([]);
  const [clicked,setClicked]=useState({});

  useEffect(() => {
    const socket = new SockJS('http://localhost:1000/ws');
    const stompClient = new Client({
      webSocketFactory: () => socket,
      onConnect: () => {
        stompClient.subscribe('/topic/notifications', (message) => {
          console.log('Connected registration for page');
          const notification = JSON.parse(message.body);
          handleNotification(notification);
        });
        stompClient.subscribe('/topic/reports', (message) => {
          console.log('Connected report notification for page');
          const report = JSON.parse(message.body);
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
    setNotifications(storedNotifications);
    setReports(storedReports);

    return () => {
      stompClient.deactivate();
    };
  }, []);

  const handleNotification = (notification) => {
    setNotifications(prevNotifications => {
      const newNotifications = [...prevNotifications, notification];
      localStorage.setItem('notifications', JSON.stringify(newNotifications));
      return newNotifications;
    });
  };
  
  
const handleReportNotification = (report) => {
  setReports(prevReports => {
    const newReports = [...prevReports, report];
    localStorage.setItem('reports', JSON.stringify(newReports));
    return newReports;
  });
};

  const handleClearLocalStorage = () => {
    localStorage.removeItem('notifications');
    alert('LocalStorage items removed.');
  };
  const handleClearReportLocalStorage = () => {
    localStorage.removeItem('reports');
    alert('LocalStorage items removed.');
  };
  const handelNotificationOnClick=async (email,index)=>{
    try {
      await notificationService.verifiedLabour(email);
      setClicked((prevClicked) => ({ ...prevClicked, [index]: true }));
    }catch(error){
      console.log("Verified error");
    }}
 
  return (
    <div style={pageStyle}>
      <Sidebar>
        <Box sx={{ padding: '0', marginTop: '120px', marginLeft: 'auto', marginRight: 'auto', maxWidth: '800px',overflow: 'hidden'  }}>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '8px' }}>
          <Typography
            component="span"
            variant="body2"
            color="primary"
            fontSize="16px"
            style={{ cursor: 'pointer' }}
            onClick={handleClearLocalStorage}>Clear all</Typography>
        </Grid>
        {/*-----Notification Registeration ------------ */}
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center" alignItems="center" overflow= 'auto' width='auto' padding="0">
        <List sx={{  bgcolor: 'background.paper', marginTop: '0px', overflow: 'auto' ,padding:'0',margin:"0"}}>
        {notifications.map((notification, index) => (
        <React.Fragment key={index}>
          <ListItemText
            primary={
              <Typography component="span" variant="body2" color="text.primary" fontSize="16px">
                <Typography component="span" variant="body2" fontWeight="bold">
                  {notification.name}
                </Typography>
                {` with ${notification.email} added ${notification.documentUri} for job verification on ${notification.joinDate}`}
              </Typography>
            }
            secondary={
              <Stack direction="row" spacing={0} alignItems="center">
                <IconButton color="primary" onClick={() => handelNotificationOnClick((notification.email),index)}>
                  {clicked[index] ? <CheckCircleIcon color="success" /> : <CheckCircleOutlineIcon />}
                </IconButton>
              </Stack>
            }
            sx={{
              display: 'flex',
              paddingLeft: '10px', 
              paddingRight: '10px', 
              paddingTop: '8px', 
              paddingBottom: '8px', 
            }}
          />
          <Divider variant="inset" component="li" />
        </React.Fragment>
      ))}
    </List>
     {/*-----Notification Report ------------ */}
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '0px' }}>
            <Typography
              component="span"
              variant="body2"
              color="primary"
              fontSize="16px"
              style={{ cursor: 'pointer' }}
              onClick={handleClearReportLocalStorage}>Clear all</Typography>
          </Grid>
          <List sx={{ width: '100%', bgcolor: 'background.paper', marginLeft: '20px', marginTop: '0px', maxHeight: '400px', overflow: 'auto' }}>
           {/* <Typography component="span" variant="body2" color="text.primary" fontSize="16px" marginLeft={"20px"}>Report Notifications</Typography>*/}
            {reports.map((report, index) => (
            <React.Fragment key={index}>
              <ListItemText 
              
              primary={
                <Typography component="span" variant="body2" color="text.primary" fontSize="16px">
                <Typography component="span" variant="body2" fontWeight="bold">{report.ReportedByName}</Typography>
                {` reported ${report.title} to ${report.reportedToId}`}
                <Typography component="span" variant="body2" color="text.secondary">{`Reported on: ${report.reportedDate}`}</Typography>
                </Typography>
              }
              secondary={
                <Stack direction="row" spacing={0} alignItems="center">
                 <Link to={`/user-detail/${report.reportedToId}`}><IconButton color="primary"> <CheckCircleOutlineIcon />
                  {/* {clicked[index] ? <CheckCircleIcon color="success" /> : <CheckCircleOutlineIcon />} */}
                </IconButton></Link>
              </Stack>
              }
              sx={{
                display: 'flex',
                paddingLeft: '10px', 
                paddingRight: '10px', 
                paddingTop: '8px', 
                paddingBottom: '8px', 
              }}
              />
            <Divider variant="inset" component="li" />
            </React.Fragment>
            ))}
          </List>
        </Grid>  
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
