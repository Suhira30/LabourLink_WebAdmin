// import React, { useState, useEffect } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import BASE_URL from '../Pages/Service/baseUrl'; // Ensure this URL points to your backend
// import 'react-toastify/dist/ReactToastify.css';

// const TostifyReport = () => {
//   const [reports, setReports] = useState([]);
//   const [lastCheckedReportedId, setLastCheckedReportedId] = useState(() => {
//     // Retrieve lastCheckedReportedId from local storage or default to 0
//     const savedLastCheckedId = localStorage.getItem('lastCheckedReportedId');
//     return savedLastCheckedId ? parseInt(savedLastCheckedId, 10) : 0;
//   });

//   useEffect(() => {
//     const fetchReports = async () => {
//       try {
//         const response = await fetch(`${BASE_URL}/api/v1/report/poll?lastCheckedReportedId=${lastCheckedReportedId}`);
//         console.log(response.data);
//         const responseText = await response.text(); // Get the raw response text
//         console.log('Response Status:', response.status); // Log the response status
//         console.log('Response Text:', responseText); // Log the raw response text

//         if (!response.ok) {
//           throw new Error(`Network response was not ok: ${response.statusText}`);
//         }

//         const data.id= JSON.parse(responseText); // Parse the response text as JSON

//         if (data && data.length > 0) {
//           data.forEach(report => handleNotification(report));
//           const latestId = Math.max(...data.map(report => report.id));
//           setLastCheckedReportedId(latestId);
//           console.log(latestId);
//           localStorage.setItem('lastCheckedReportedId', latestId);

//         }
//       } catch (error) {
//         console.error('Error fetching reports:', error);
//       }
//     };

//     const intervalId = setInterval(fetchReports, 5000); // Poll every 5 seconds

//     return () => clearInterval(intervalId);
//   }, [lastCheckedReportedId]);

//   const handleNotification = (report) => {
//     setReports((prevReports) => [...prevReports, report]);
//     triggerToast(report);
//   };

//   const triggerToast = (report) => {
//     const message = `Report: ${report.title}. ${report.reportedByName} reported to ${report.reportedToId}.`;
//     toast(<div dangerouslySetInnerHTML={{ __html: message }} />, {
//       position: "bottom-right",
//       autoClose: false,
//       hideProgressBar: true,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       style: {
//         backgroundColor: 'red', // Red background
//         color: '#ffffff', // White text
//       },
//     });
//   };

//   return (
//     <>
//       <ToastContainer
//         position="bottom-left"
//         autoClose={false}
//         hideProgressBar
//         newestOnTop
//         closeOnClick
//         pauseOnHover
//         draggable
//         progress={undefined}
//       />
//     </>
//   );
// };

// export default TostifyReport;

