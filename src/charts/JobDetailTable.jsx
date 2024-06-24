import React, { useEffect, useState } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import jobService from "../Pages/Service/jobService";

export default function JobDetailTable() {
  const [jobRoles, setJobRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jobRolesData = await jobService.fetchLabourJobCounts(); // Adjust function name as per your jobService implementation
        console.log('Fetched job roles:', jobRolesData); 
        setJobRoles(jobRolesData.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching job roles:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handling loading state
  if (loading) {
    return <p>Loading...</p>;
  }

  // Handling error state
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // Rendering the list of job roles
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
      {jobRoles.map((jobRole, index) => (
        <ListItem key={`job-role-${index}`}>
          <ListItemText primary={jobRole} />
        </ListItem>
      ))}
    </List>
  );
}
