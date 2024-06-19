import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ReviewRating from '../Components/ReviewRating';

const BookingHistory = () => {
   
    
  const listData = [
    { id: 1, Reviewer: 'James', avatar: '/static/images/avatar/1.jpg', Labourname: 'Ali Connors',rating:5, details: "I had an amazing stay at this hotel! The staff was so friendly and helpful, and the rooms were luxurious and spotless. I would definitely recommend this hotel to others." },
    { id: 2, Reviewer: 'Michael', avatar: '/static/images/avatar/2.jpg', Labourname: 'Travis Howard',rating:4, details: "I received first-class service from the moment I arrived until the moment I left. The facilities were top-notch, and the view from my room was simply stunning" },
    { id: 3, Reviewer: 'Robert', avatar: '/static/images/avatar/3.jpg', Labourname: 'Sandra Adams',rating:2,  details: "The hotel was in the perfect location, close to all the major attractions. Breakfast was a feast, with a wide variety of delicious options to choose from. I can't wait to stay here again" },
    { id: 4, Reviewer: 'John', avatar: '/static/images/avatar/2.jpg', Labourname: 'Travis Howard', rating:3, details: "I had a question about a product I was interested in buying, and the customer service representative I spoke to was very knowledgeable and helpful. They were able to answer all of my questions, and they helped me choose the right product for my needs. I was really impressed with the level of service I received." },
    { id: 5, Reviewer: 'Michael', avatar: '/static/images/avatar/2.jpg', Labourname: 'Travis Howard',rating:4, details: "I received first-class service from the moment I arrived until the moment I left. The facilities were top-notch, and the view from my room was simply stunning" },
    { id: 6, Reviewer: 'Robert', avatar: '/static/images/avatar/3.jpg', Labourname: 'Sandra Adams',rating:2,  details: "The hotel was in the perfect location, close to all the major attractions. Breakfast was a feast, with a wide variety of delicious options to choose from. I can't wait to stay here again" },
    { id: 7, Reviewer: 'John', avatar: '/static/images/avatar/2.jpg', Labourname: 'Travis Howard', rating:3, details: "I had a question about a product I was interested in buying, and the customer service representative I spoke to was very knowledgeable and helpful. They were able to answer all of my questions, and they helped me choose the right product for my needs. I was really impressed with the level of service I received." },
  
]
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = listData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(listData.length / itemsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
  return (
   
   <>
   <Box sx={{ padding: '0', marginTop: '150px', marginLeft: 'auto', marginRight: 'auto', maxWidth: '1000px' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center" alignItems="center">
              <List sx={{ width: '100%', bgcolor: 'background.paper', marginLeft: '20px', padding:"0"}}>
                {currentItems.map(item => (
                  <React.Fragment key={item.id}>
                    <ListItem alignItems="flex-start"  sx={{ paddingY: 4 ,position: 'relative' }}>
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
   </>
  )
};export default BookingHistory
