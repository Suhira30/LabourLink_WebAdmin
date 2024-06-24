// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import jobService from '../Pages/Service/jobService';
// import Alert from '@mui/material/Alert';
// import AlertTitle from '@mui/material/AlertTitle';
// import Stack from '@mui/material/Stack';

// export const FormJobDetail = () => {
//   const [job, setJob] = useState({
//     jobName: '',
//     description: ''
//   });
//   const [successMessage, setSuccessMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const onInputChange = (e) => {
//     setJob({ ...job, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async () => {
//     try {
//       const response = await jobService.createJob(job);
//       console.log('Response:', response); 
//       setSuccessMessage(response.data.message || "Successfully added");
//     setErrorMessage("");

//       setJob({
//         jobName: '',
//         description: ''
//       });
//     } catch (error) {
//       console.error('Error:', error);
//       setErrorMessage("Already exist");
//     }
//   };

//   return (
//     <>
//       {successMessage && (
//         <Stack sx={{ width: '100%' }} spacing={1}>
//           <Alert severity="success">
//             <AlertTitle>Success</AlertTitle>
//             {successMessage}
//           </Alert>
//         </Stack>
//       )}
//       {errorMessage && (
//         <Stack >
//           <Alert severity="error">
//             <AlertTitle>Error</AlertTitle>
//             {errorMessage}
//           </Alert>
//         </Stack>
//       )}
//      <div style={{ width: '100%', maxWidth: '600px', margin: '0 ' }}>
//       <div style={{ backgroundColor: '#f0f0f0', marginTop: '0px', paddingLeft: '0px', height: '45px', marginLeft: '-29px', marginRight: '-29.3px',width:'auto',alignItems:'center' }}>
//        <Typography variant="h5" gutterBottom style={{ marginLeft: '20px' }}>
//             Add new Job
//           </Typography>
//           </div>
//           <Box
//             component="form"
//             onSubmit={(e) => {
//               e.preventDefault();
//               handleSubmit();
//             }}
//             sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '8px' }}
//             noValidate
//             autoComplete="off"
//           >
//             <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
//               <label htmlFor="jobName">Job Name</label>
//               <TextField
//                 id="jobName"
//                 name="jobName"
//                 variant="outlined"
//                 style={{ width: '350px' }}
//                 value={job.jobName}
//                 onChange={onInputChange}
//               />

//               <label htmlFor="description">Description</label>
//               <TextField
//                 id="description"
//                 variant="outlined"
//                 name="description"
//                 style={{ width: '350px' }}
//                 value={job.description}
//                 onChange={onInputChange}
//               />
//               <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
//                 <Button type="submit" variant="contained" sx={{backgroundcolor:"#1976d2"}}>
//                   ADD
//                 </Button>
//                 <div style={{ marginLeft: '10px' }}></div>

//               </div>
//             </div>
//         </Box>
//       </div>
//     </>
//   );
// };
