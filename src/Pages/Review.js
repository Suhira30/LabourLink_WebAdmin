import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import averagereview from '../Img/averagereview.png';
import review from '../Img/review.png';
import Pagination from '@mui/material/Pagination';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ReviewRating from '../Components/ReviewRating';

const Review = () => {
  const pageStyle = {
    backgroundColor: '#F3F2F7',
  };

  const listData = [
    { id: 1, Reviewer: 'James', avatar: '/static/images/avatar/1.jpg', Labourname: 'Ali Connors',rating:5, details: "I had an amazing stay at this hotel! The staff was so friendly and helpful, and the rooms were luxurious and spotless. I would definitely recommend this hotel to others." },
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
                {/*top 4 boxes--01--------------------------------------------------------------------------------- */}
                <Grid item xs={12} sm={6} md={3}>
                  <Card
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      maxWidth: 220,
                      height: 120,
                    }}
                  >
                    <CardMedia
                      sx={{
                        width: 65,
                        height: 65,
                        ml: 2,
                      }}
                      image={review}
                    />
                    <CardContent sx={{ flex: '1' }}>
                      <Typography gutterBottom variant="h5" component="div">
                        {"--"}
                      </Typography>
                      <Typography>Total Review</Typography>
                    </CardContent>
                  </Card>
                </Grid>

                {/*top 4 boxes--02--------------------------------------------------------------------------------- */}
                <Grid item xs={12} sm={6} md={3}>
                  <Card
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      maxWidth: 220,
                      height: 120,
                    }}
                  >
                    <CardMedia
                      sx={{
                        width: 65,
                        height: 65,
                        ml: 2,
                      }}
                      image={averagereview}
                    />
                    <CardContent sx={{ flex: '1' }}>
                      <Typography gutterBottom variant="h5" component="div">
                        {"--"}
                      </Typography>
                      <Typography>Average Rating</Typography>
                    </CardContent>
                  </Card>
                </Grid>

                {/*top 4 boxes--03--------------------------------------------------------------------------------- */}
                <Grid item xs={12} sm={6} md={3}>
                  <Card
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      maxWidth: 220,
                      height: 120,
                    }}
                  >
                    <CardMedia
                      sx={{
                        width: 65,
                        height: 65,
                        ml: 2,
                      }}
                      image={review}
                    />
                    <CardContent sx={{ flex: '1' }}>
                      <Typography gutterBottom variant="h5" component="div">
                        {"--"}
                      </Typography>
                      <Typography>Total Appointments</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </div>
          {/*----------------------------------List Reviews--------------------------------------------------------------------------------- */}
          <Box sx={{ padding: '0', marginTop: '40px', marginLeft: 'auto', marginRight: 'auto', maxWidth: '1000px' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center" alignItems="center">
              <List sx={{ width: '100%', bgcolor: 'background.paper', marginLeft: '20px', }}>
                {currentItems.map(item => (
                  <React.Fragment key={item.id}>
                    <ListItem alignItems="flex-start"  sx={{ paddingY: 4 ,position: 'relative' }}>
                      <ListItemAvatar>
                        <Avatar alt={item.Labourname} src={item.avatar}  sx={{ width: 80, height: 80, marginRight:'30px' }}/>
                      </ListItemAvatar>
                      <Box sx={{ flexGrow: 1 }}>
                      <ListItemText
                       primary={
                        <Typography sx={{ fontWeight: 'bold' }}> 
                          {item.Reviewer}
                        </Typography>}
                        secondary={
                          <React.Fragment>
                            <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary" >
                            <ReviewRating value={item.rating} /> 
                              {item.Labourname}
                            </Typography>
                            {` — ${item.details}`}
                          </React.Fragment>
                        }
                      />   </Box>
                       <Box sx={{display: 'flex',  position: 'absolute', bottom: 9, right: 50 }}>
                       <Stack direction="row" spacing={2}>
                      <Button sx={{ color: 'red' }}>Remove</Button>
                    </Stack>
                            
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
  {/*---------------------------Footer------------------------------------------------------- */}
          <div style={{marginTop:'30px',maxWidth:'100%'}}> 
          <Footer />
          </div>
        </Sidebar>
      </div>
    </>
  );
}

export default Review;
