import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useVerifiedLabour } from '../Context/VerifiedLabourContext ';

const NewlyVerified = () => {
    const { verifiedList } = useVerifiedLabour();
return (
    <Grid container spacing={2}>
    <Grid item xs={12}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h5" component="div"> Recently Verified</Typography>
            <List dense={false}> {verifiedList.map((item, index) => (
                <ListItem key={index} button component={Link} to={`/user-detail/${item.email}`}>
                    <ListItemText primary={`${item.name} (${item.email})`} />
                      </ListItem>
                    ))}
            </List>
    </Grid>
    </Grid>
    );
};

export default NewlyVerified;
