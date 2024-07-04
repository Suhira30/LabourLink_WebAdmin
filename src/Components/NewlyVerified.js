import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useVerifiedLabour } from '../Context/VerifiedLabourContext ';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';


const NewlyVerified = () => {
    const { verifiedList } = useVerifiedLabour();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // Simulate a loading delay
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);
        
        return () => clearTimeout(timer);
    }, [verifiedList]);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = verifiedList.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(verifiedList.length / itemsPerPage);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
  };

return (
    <Grid container spacing={2}>
    <Grid item xs={12}>
        <Typography  variant="h5" > Recently Verified</Typography>
        {loading ? (
                    <Typography>Loading...</Typography>
                ) : (
                    <List dense={false}>
                        {currentItems.length > 0 ? (
                            currentItems.map((item, index) => (
                                <ListItem key={index} button component={Link} to={`/user-detail/${item.email}`}>
                                    <ListItemText primary={`${item.name} (${item.email})`} />
                                </ListItem>
                            ))
                        ) : (
                            <Typography>No verified users found.</Typography>
                        )}
                    </List>
                )}
    </Grid>
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <Pagination
                  count={totalPages}
                  page={currentPage}
                  onChange={handlePageChange}
                  color="primary"
                />
              </Box>
    </Grid>
    );
};

export default NewlyVerified;
