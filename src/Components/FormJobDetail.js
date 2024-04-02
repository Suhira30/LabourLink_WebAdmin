
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
    export const FormJobDetail = () => {
      return (
        <Box sx={{ margin: '50px' }}>
      <Typography variant="h6" gutterBottom>
      Add job / Remove job
      </Typography>
        <Box 
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        margin: '10px'
      }}
      noValidate
      autoComplete="off"
    >
     <Grid container spacing={2}  > 
        <Grid item xs={12}>
        <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
          <InputLabel>Job Title
          <TextField defaultValue="Driver" /></InputLabel>
          </Box>
        </Grid>
        <Grid item xs={12}>
        <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
          <InputLabel>Job Id
          <TextField defaultValue="D001" /></InputLabel>          </Box>
        </Grid>
        <Grid item xs={12}>
        <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
          <InputLabel>Job Description
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={4}
          /></InputLabel>          </Box>
        </Grid>
      </Grid>
    </Box></Box>
      );
    
    }