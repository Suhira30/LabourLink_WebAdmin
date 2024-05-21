import React from 'react';
import { Button, TextField } from '@mui/material';

const MyComponent = () => {
  return (
    <div>
      <Button variant="contained" color="primary">
        Click me
      </Button>
      <TextField label="Enter your name" />
      
    </div>
  );
};

export default MyComponent;
