import React, { useState,useEffect } from 'react';
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
import reviewService from '../Pages/Service/reviewService'
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

const IndividualReport = ({user}) => {
   
  const [listData, setListData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await reviewService.fetchIndividualReviewData(user);
      setListData(response);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = listData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(listData.length / itemsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
  return (
   
   <>
   <Box sx={{ padding: '0', marginLeft: 'auto', marginRight: 'auto', maxWidth: '1000px' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center" alignItems="center">
              <List sx={{ width: '100%', bgcolor: 'background.paper', marginLeft: '20px', padding:"0"}}>
              {currentItems.map(item => (
                <React.Fragment key={item.id}>
                  <ListItem alignItems="flex-start" sx={{ paddingY: 2, position: 'relative' }}>
                    <ListItemAvatar>
                      <Avatar alt={item.customerName} src={item.avatar} sx={{ width: 50, height: 50, marginRight: '30px' }} />
                    </ListItemAvatar>
                    <Box sx={{ flexGrow: 1 }}>
                      <ListItemText
                        primary={
                          <Typography sx={{ fontWeight: 'bold' }}>
                            {item.customerEmail}
                          </Typography>}
                        secondary={
                          <React.Fragment>
                            <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                              <ReviewRating value={item.rating} />
                              {item.labourName}
                            </Typography>
                            {` — ${item.description}`}
                          </React.Fragment>
                        }
                      />
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
};export default IndividualReport
