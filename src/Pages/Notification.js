import React, { useContext, useEffect,useState } from 'react';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import notificationService from './Service/notificationService';
import { useVerifiedLabour } from '../Context/VerifiedLabourContext ';
import Pagination from '@mui/material/Pagination';
import { NotificationContext } from '../Context/NotificationContext'; // Adjust the path accordingly

const Notification = () => {
  const pageStyle = {
    backgroundColor: '#F3F2F7',
  };

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return date.toLocaleDateString(undefined, options);
  };
  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  const { notifications, setNotifications,  clickedButtons, setClickedButtons } = useContext(NotificationContext);
  const { setVerifiedList } = useVerifiedLabour();

  const handleClearLocalStorage = () => {
    localStorage.removeItem('notifications');
    setNotifications([]); // Clear state
    alert('LocalStorage items removed.');
  };

  // const handleClearReportLocalStorage = () => {
  //   localStorage.removeItem('reports');
  //   setReports([]); // Clear state
  //   alert('LocalStorage items removed.');
  // };

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
      const updatedClickedButtons = { ...clickedButtons, [email]: true };
      setClickedButtons(updatedClickedButtons);
    } catch (error) {
      console.error('Verified error:', error);
    }
  };

  // const handleReportOnClick = (id) => {
  //   // Update clickedReportButtons
  //   const updatedClickedReportButtons = { ...clickedReportButtons, [id]: true };
  //   setClickedReportButtons(updatedClickedReportButtons);
  // };

  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = notifications.slice(indexOfFirstItem, indexOfLastItem); // Use 'reports' instead of 'setReports'

  const totalPages = Math.ceil(notifications.length / itemsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div style={pageStyle}>
      <Sidebar>
        <Box sx={{ padding: '0', marginTop: '120px', marginLeft: 'auto', marginRight: 'auto', maxWidth: '800px', overflow: 'hidden' }}>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '0px' }}>
            <Typography component="span" variant="body2" color="primary" fontSize="16px" style={{ cursor: 'pointer' }} onClick={handleClearLocalStorage}>
              Clear all
            </Typography>
          </Grid>
          {/*-----Notification Registration ------------ */}
          <Box sx={{ flexGrow: 1 }}>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
              {currentItems.map((notification, index) => (
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
                          <a href={notification.documentUri} target="__blank" rel="noopener noreferrer">
                            document{' '}
                          </a>{`for job verification  `}<br></br>
                          <Typography component="span" variant="body2" color="text.secondary">
                          {`${notification.joinDate}`}
                          </Typography> 
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
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
              />
            </Box>

          </Box>
          {/*-----Notification Report ------------ */}
          {/* <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '0px' }}>
            <Typography component="span" variant="body2" color="primary" fontSize="16px" style={{ cursor: 'pointer' }} onClick={handleClearReportLocalStorage}>
              Clear all
            </Typography>
          </Grid> */}
          {/* <Box sx={{ flexGrow: 1 }}>
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
                  > */}
                    {/* <ListItemText
                      primary={
                        <Typography component="span" variant="body2" color="text.primary" fontSize="16px">
                          <Typography component="span" variant="body2" fontWeight="bold">
                            {report.ReportedByName}
                          </Typography>
                          {` reported ${report.title} to ${report.reportedToId} `}
                          
                        </Typography>
                      }
                    /> */}
                    {/* <Stack direction="row" spacing={2}>
                      <Link to={`/user-detail/${report.reportedToId}`}>
                        <Button variant="outlined" color={clickedReportButtons[report.id] ? 'success' : 'secondary'} onClick={() => handleReportOnClick(report.id)}>
                          View
                        </Button>
                      </Link>
                    </Stack>
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </React.Fragment> */}
              {/* ))}
            </List>
          </Box> */}
        </Box>
        {/*---------------------------Footer------------------------------------------------------- */}
        <div  style={{backgroundColor:"#E7ECFF"}}>
        <div style={{ marginTop: '30px', maxWidth: '100%' }}>
          <Footer /></div>
        </div>
      </Sidebar>
    </div>
  );
};

export default Notification;
