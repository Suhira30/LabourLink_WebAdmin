import React, { useState, useEffect } from 'react';
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
import reviewService from './Service/reviewService';


const Review = () => {
  const pageStyle = {
    backgroundColor: '#F3F2F7',
  };

  const [listData, setListData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [loading, setLoading] = useState(true);
  const [clickedButtons, setClickedButtons] = useState({});


  const fetchData = async () => {
    try {
      const response = await reviewService.fetchReviewData();
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

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 60000); // 60s

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  const handleDelete = async (id) => {
    try {
      await reviewService.deleteReviewById(id);
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };

  const handleClick = (id) => {
    const updatedClickedButtons = { ...clickedButtons, [id]: true };
    setClickedButtons(updatedClickedButtons);
    localStorage.setItem('clickedButtons', JSON.stringify(updatedClickedButtons));
  };

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
         
          {/*----------------------------------List Reviews--------------------------------------------------------------------------------- */}
          
          <Box sx={{ padding: '0', marginTop: '120px', marginLeft: 'auto', marginRight: 'auto', maxWidth: '1000px' }}>
            <Grid container  columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center" alignItems="center">
              <List sx={{ width: '100%', bgcolor: 'background.paper', marginLeft: '20px', }}>
              {currentItems.map(item => (
                <React.Fragment key={item.id}>
                  <ListItem alignItems="flex-start" sx={{ paddingY: 2, position: 'relative' }}>
                    <ListItemAvatar>
                      <Avatar alt={item.labourName} src={item.avatar} sx={{ width: 50, height: 50, marginRight: '30px' }} />
                    </ListItemAvatar>
                    <Box sx={{ flexGrow: 1 }}>
                      <ListItemText
                        primary={
                          <React.Fragment>
                          <Typography sx={{ fontWeight: 'bold', display: 'inline' }}>
                            {item.customerName}
                          </Typography>
                          <Typography sx={{ display: 'inline', marginLeft: '10px' ,fontSize:"12px",fontWeight:'lightss'}}>
                            {item.customerEmail}
                          </Typography>
                        </React.Fragment>}
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
                    <Box sx={{ display: 'flex', position: 'absolute', bottom: 9, right: 50 }}>
                        <Stack direction="row" spacing={2}>
                          <Button
                            sx={{ color: clickedButtons[item.id] ? 'red' : 'inherit' }}
                            onClick={() => {
                              handleClick(item.id);
                              handleDelete(item.id);
                            }}
                          >
                            Remove
                          </Button>
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
  <div  style={{backgroundColor:"#E7ECFF"}}>
          <div style={{marginTop:'30px',maxWidth:'100%'}}> 
          <Footer /></div>
          </div>
        </Sidebar>
      </div>
    </>
  );
}

export default Review;
