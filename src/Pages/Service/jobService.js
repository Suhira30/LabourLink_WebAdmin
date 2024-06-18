// import axios from 'axios';
// const BASE_URL='http://localhost:1000';
// const jobService=axios.create({
//     baseURL:BASE_URL,});

//     jobService.interceptors.request.use(
//         (config)=>
//             {
//                 const token = localStorage.getItem('token');
//                 if(token){
//                     config.headers.Authorization=`Bearer ${token}`;
//                 }
//                 return config;
//             },
//             (error)=>{
//                 return Promise.reject(error)
//             }
//     );
// //-------------------------------------Count of job------------------
//     const fetchJobCount = async () => {
//         try {
//           const response = await jobService.get('/job/count');
//           return response.data;
//         } catch (error) {
//           console.error('Error fetching job count:', error);
//           throw error;
//         }
//       };
// //------------------Post Job --------------------------------
//     const createJob = async (jobData) => {
//         try {
//           const response = await jobService.post('/job', jobData);
//           return response;
//         } catch (error) {
//           throw error;
//         }
//       };
// //--------------------------------Table  :- JOb and labour   -------------------
//   const fetchLabour_Job = async () => {
//     try {
//     const response = await jobService.get('/job/countwithname');
//     return (response.data);
//     }catch (error) {
//        throw (error);
//     }
//     };
//     //--------------------------------Table  :- JOb and labour   -------------------
//   const fetchLabourJobCountsForPie = async () => {
//     try {
//     const response = await jobService.get('/job/countwithname');
//     return (response.data);
//     }catch (error) {
//        throw (error);
//     }
//     };
//     export default{
//         jobService,
//         createJob,
//         fetchJobCount,
//         fetchLabour_Job,
//         fetchLabourJobCountsForPie,
//       }