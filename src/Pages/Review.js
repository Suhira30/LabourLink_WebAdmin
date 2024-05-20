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
import cancel4 from '../Img/cancel.png';
import order from '../Img/order.png';
import Pagination from '@mui/material/Pagination';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import ReviewRating from '../Components/ReviewRating';

const Review = () => {
  const pageStyle = {
    backgroundColor: '#F3F2F7',
  };

  const listData = [
    { id: 1, Reviewer: 'James', avatar: '/static/images/avatar/1.jpg', Labourname: 'Ali Connors',rating:5, details: "I had an amazing stay at this hotel! The staff was so friendly and helpful, and the rooms were luxurious and spotless. I would definitely recommend this hotel to others." },
    { id: 2, Reviewer: 'Michael', avatar: '/static/images/avatar/2.jpg', Labourname: 'Travis Howard',rating:4, details: "I received first-class service from the moment I arrived until the moment I left. The facilities were top-notch, and the view from my room was simply stunning" },
    { id: 3, Reviewer: 'Robert', avatar: '/static/images/avatar/3.jpg', Labourname: 'Sandra Adams',rating:2,  details: "The hotel was in the perfect location, close to all the major attractions. Breakfast was a feast, with a wide variety of delicious options to choose from. I can't wait to stay here again" },
    { id: 4, Reviewer: 'John', avatar: '/static/images/avatar/2.jpg', Labourname: 'Travis Howard', rating:3, details: "I had a question about a product I was interested in buying, and the customer service representative I spoke to was very knowledgeable and helpful. They were able to answer all of my questions, and they helped me choose the right product for my needs. I was really impressed with the level of service I received." },
    { id: 5, Reviewer: 'Daniel', avatar: '/static/images/avatar/3.jpg', Labourname: 'Sandra Adams',rating:5,  details: "I love this store! The customer service is outstanding, and the products are always top-notch. I highly recommend them to anyone looking for a great shopping experience." },
    { id: 6, Reviewer: 'William', avatar: '/static/images/avatar/2.jpg', Labourname: 'Travis Howard',rating:4,  details: "I had an amazing experience with this company! The customer service was outstanding, and the product exceeded my expectations. I highly recommend them to anyone looking for quality products and excellent service." },
    { id: 7, Reviewer: 'Richard', avatar: '/static/images/avatar/3.jpg', Labourname: 'Sandra Adams',rating:1,  details: "Simple insurance application process: The insurance application process was easy and straightforward. I got coverage quickly and at a good price, which made the whole thing stress-free." },
    { id: 8, Reviewer: 'Joseph', avatar: '/static/images/avatar/2.jpg', Labourname: 'Travis Howard',rating:3,  details: "We had an unforgettable stay at this seasonal rental! The place was spotless when we arrived, and the view of the sea was breathtaking. The owners were warm and welcoming." },
    { id: 9, Reviewer: 'Paul', avatar: '/static/images/avatar/3.jpg', Labourname: 'Sandra Adams',rating:2,  details: "It was easy to book the rental, and communication with the owner was smooth. They were very responsive and answered all of our questions quickly." },
    { id: 10, Reviewer: 'Christopher', avatar: '/static/images/avatar/2.jpg', Labourname: 'Travis Howard',rating:4,  details: "This house felt like a real home away from home. It was fully equipped with everything we needed, and we had a relaxing and comfortable vacation." },
    { id: 11, Reviewer: 'Andrew', avatar: '/static/images/avatar/3.jpg', Labourname: 'Sandra Adams',rating:3,  details: "Buying a car from this dealership was easy and stress-free. The salesperson didn't try to pressure me into buying anything I didn't want, and they kept me well informed throughout the process." },
    { id: 12, Reviewer: 'Richard', avatar: '/static/images/avatar/2.jpg', Labourname: 'Travis Howard',rating:1,  details: "This dealership has a large selection of vehicles to choose from. I found the exact model and color I wanted, and the salespeople were helpful and accommodating." },
    { id: 13, Reviewer: 'John', avatar: '/static/images/avatar/3.jpg', Labourname: 'Sandra Adams',rating:2,  details: "The hotel was in the perfect location, close to all the major attractions. Breakfast was a feast, with a wide variety of delicious options to choose from. I can't wait to stay here again" },
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
                      image={order}
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
                      image={cancel4}
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
                      image={order}
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
                       <Button variant="contained" color="success">Show</Button>
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

          <div style={{ marginTop: '100px', marginLeft: '150px', marginRight: '150px' }}>
            <Footer />
          </div>
        </Sidebar>
      </div>
    </>
  );
}

export default Review;
