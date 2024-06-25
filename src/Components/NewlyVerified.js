import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useVerifiedLabour } from '../Context/VerifiedLabourContext ';

const NewlyVerified = () => {
    // const [prevList, setList] = useState([]);
    const { verifiedList } = useVerifiedLabour();

    // useEffect(() => {
    //     const socket = new SockJS('http://localhost:1000/ws');
    //     const stompClient = new Client({
    //         webSocketFactory: () => socket,
    //         onConnect: () => {
    //             stompClient.subscribe('/topic/verifiedlist', (message) => {
    //                 console.log('Connected verified list');
    //                 const list = JSON.parse(message.body);
    //                 console.log(list); // checking
    //                 handleVerifiedList(list);
    //             });
    //         },
    //         onStompError: (frame) => {
    //             console.error('Broker reported error: ' + frame.headers['message']);
    //             console.error('Additional details: ' + frame.body);
    //         },
    //     });

    //     stompClient.activate();

    //     return () => {
    //         stompClient.deactivate();
    //     };
    // }, []);

    // const handleVerifiedList = (list) => {
    //     setList((prevList) => {
    //         const updatedNotification = [list, ...prevList];
    //         return updatedNotification.slice(0, 5);
    //     });
    // };
  
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h5" component="div">
                    Recently Verified
                </Typography>
                <List dense={false}>
                    {verifiedList.map((item, index) => (
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
