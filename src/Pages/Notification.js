import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';

const Notification = () => {
  const pageStyle = {
    backgroundColor: '#F3F2F7',
  };

  const listData = [
    { id: 1, User: 'James', avatar: '/static/images/avatar/1.jpg', details: "Submit the resume for the job", date: 'Today' },
    { id: 2, User: 'Michael', avatar: '/static/images/avatar/2.jpg', details: "Submit the resume for the job", date: 'Today' },
    { id: 3, User: 'Robert', avatar: '/static/images/avatar/3.jpg', details: "Add a review ", date: 'Yesterday' },
    { id: 4, User: 'John', avatar: '/static/images/avatar/2.jpg', details: "Submit the resume for the job", date: 'Yesterday' },
    { id: 5, User: 'Daniel', avatar: '/static/images/avatar/3.jpg', details: "Add a review ", date: 'Yesterday' },
    { id: 6, User: 'William', avatar: '/static/images/avatar/2.jpg', details: "Submit the resume for the job", date: '2 days ago' },
    { id: 7, User: 'Richard', avatar: '/static/images/avatar/3.jpg', details: "Add a review ", date: '2024-05-14' },
    { id: 8, User: 'Joseph', avatar: '/static/images/avatar/2.jpg', details: "Add a review ", date: '2024-05-13' },
    { id: 9, User: 'Paul', avatar: '/static/images/avatar/3.jpg', details: "Add a review ", date: '2024-05-12' },
    { id: 10, User: 'Christopher', avatar: '/static/images/avatar/2.jpg', details: "Submit the resume for the job", date: '2024-05-11' },
    { id: 11, User: 'Andrew', avatar: '/static/images/avatar/3.jpg', details: "Add a review ", date: '2024-05-10' },
    { id: 12, User: 'Richard', avatar: '/static/images/avatar/2.jpg', details: "Submit the resume for the job", date: '2024-05-09' },
    { id: 13, User: 'John', avatar: '/static/images/avatar/3.jpg', details: "Submit the resume for the job", date: '2024-05-08' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = listData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(listData.length / itemsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <div style={pageStyle}>
        <Sidebar>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '0',
              marginTop: '80px',
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: '1000px',
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                padding: '0',
                paddingRight: '0',
                marginTop: '30px',
                marginLeft: '15px',
                marginRight: 'auto',
                maxWidth: '1000px',
              }}
            >
              <Grid
                container
                rowSpacing={2}
                justifyContent="center"
                columnSpacing={{ xs: 1, sm: 2, md: 2 }}
              >
              </Grid>
            </Box>
          </div>

          {/* List Reviews */}
          <Box sx={{ padding: '0', marginTop: '10px', marginLeft: 'auto', marginRight: 'auto', maxWidth: '700px' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center" alignItems="center">
              <List sx={{ width: '100%', bgcolor: 'background.paper', marginLeft: '20px', }}>
                {currentItems.map(item => (
                  <React.Fragment key={item.id}>
                    <ListItem sx={{ position: 'relative' }}>
                      <ListItemAvatar>
                        <Avatar alt={item.User} src={item.avatar} sx={{ width: 40, height: 40, marginRight: '10px' }} />
                      </ListItemAvatar>
                      <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <ListItemText
                          primary={
                            <Typography component="span" variant="body2" color="text.primary" fontSize="16px">
                              <Typography component="span" variant="body2" fontWeight="bold">
                                {item.User}
                              </Typography>
                              {" added a review — "}{item.details}
                            </Typography>
                          }
                        />
                        <Typography component="span" variant="body2" color="text.secondary" fontSize="10px">
                          {item.date}
                        </Typography>
                      </Box>
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
            </Grid>
          </Box>
      {/*--------------------------------------------------------------Footer------------------------------------------------*/}
          <div style={{ marginTop: '100px', marginLeft: '150px', marginRight: '150px' }}>
            <Footer />
          </div>
        </Sidebar>
      </div>
    </>
  );
}

export default Notification;
