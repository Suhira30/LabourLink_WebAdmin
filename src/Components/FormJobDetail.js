
import * as React from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Axios from 'axios';
import { useEffect, useState } from 'react';

    export const FormJobDetail = () => {
      const [user,setUser]=useState({
        Jobtitle:" ",
        Jobid:" ",
        Description:" " 
    });
    const{Jobtitle,username,email}=user
const onInputChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
}
  return (
    <div style={{

        width: '80%',
        maxWidth: '600px', // Set maximum width if needed
      
    }}><Box sx={{ margin: '10px' }}>
    <Typography variant="h6" gutterBottom>
      Register User
    </Typography>
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Align items to the center of the container
        margin: '10px'
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <label htmlFor="Name">Job title</label>
        <TextField 
        id="Jobtitle" 
        name="Jobtitle"
        variant="outlined" 
        style={{ width: '500px' }}
        value ={user.Jobtitle}
        onChange={(e)=>onInputChange(e)}/>
        
        <label htmlFor="Jobid">Job Id</label>
        <TextField 
        id="Jobid" 
        variant="outlined" 
        name="Jobid"
        style={{ width: '500px' }}
        value ={user.Jobid}
        onChange={(e)=>onInputChange(e)}/>
        
        <label htmlFor="Description">Description</label>
        <TextField
          id="Description"
          variant="outlined"  
          name="Description"
          style={{ width: '500px' }}
          value ={user.Description}
          onChange={(e)=>onInputChange(e)}
        />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
  <Button variant="contained" color="primary">Submit</Button>
  <div style={{ marginLeft: '10px' }}></div> 
  <Button variant="contained" color="primary">Cancel</Button>
</div>

      </div>
    </Box>
  </Box>
</div>

  
  )
}
