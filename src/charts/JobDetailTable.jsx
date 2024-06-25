// import React, { useEffect, useState } from "react";
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import jobService from "../Pages/Service/jobService";

// export default function JobDetailTable() {
//   const [jobRoles, setJobRoles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const jobRolesData = await jobService.fetchLabourJobCounts(); // Adjust function name as per your jobService implementation
//         console.log('Fetched job roles:', jobRolesData); 
//         setJobRoles(jobRolesData.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching job roles:', error);
//         setError(error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // Handling loading state
//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   // Handling error state
//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   // Rendering the list of job roles
//   return (
//     <Grid container spacing={2}>
//             <Grid item xs={12}>
//                 <Typography sx={{ mt: 4, mb: 2 }} variant="h5" component="div">
//                     Job Roles
//                 </Typography>
//                 <List dense={false} padding="0px">
//                     {jobRoles.map((item, index) => (
//                         <ListItem key={index} sx={{ padding: '4px 16px' }}>
//                         <ListItemText primary={`${item}`} />
//                       </ListItem>
//                     ))}
//                 </List>
//             </Grid>
//         </Grid>
//   );
// }
