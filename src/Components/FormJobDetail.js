import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Axios from 'axios';

export const FormJobDetail = () => {
  const [job, setJob] = useState({
    jobName: '',
    description: ''
  });

  const onInputChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await Axios.post('http://localhost:1000/job',job);
           setJob({
        jobName: '',
        description: ''
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div style={{ width: '80%', maxWidth: '600px', margin: '0 auto' }}>
      <Box sx={{ margin: '10px' }}>
        <Typography variant="h6" gutterBottom>
          Add new Job
        </Typography>
        <Box
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(); 
          }}
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '10px' }}
          noValidate
          autoComplete="off"
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <label htmlFor="jobName">Job Name</label>
            <TextField
              id="jobName"
              name="jobName"
              variant="outlined"
              style={{ width: '500px' }}
              value={job.jobName}
              onChange={onInputChange}
            />

            <label htmlFor="description">Description</label>
            <TextField
              id="description"
              variant="outlined"
              name="description"
              style={{ width: '500px' }}
              value={job.description}
              onChange={onInputChange}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
              <Button type="submit" variant="contained" color="primary">
                ADD
              </Button>
              <div style={{ marginLeft: '10px' }}></div>
              
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
};
