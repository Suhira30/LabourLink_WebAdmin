import axios from 'axios';
const BASE_URL='http://localhost:1000';
const jobService=axios.create({
    baseURL:BASE_URL,});

    jobService.interceptors.request.use(
        (config)=>
            {
                const token = localStorage.getItem('token');
                if(token){
                    config.headers.Authorization=`Bearer ${token}`;
                }
                return config;
            },
            (error)=>{
                return Promise.reject(error)
            }
    );
//-------------------------------------Count of job------------------
    const fetchJobCount = async () => {
        try {
          const response = await jobService.get('/api/jobrole');
          return response.data;
        } catch (error) {
          console.error('Error fetching job count:', error);
          throw error;
        }
      };
//------------------High demand Job --------------------------------
    const fetchHighDemand = async () => {
        try {
          const response = await jobService.get("/api/bookings/highdemand");
          return response.data;
        } catch (error) {
          throw error;
        }
      };
// //--------------------------------Table  :- JOb and labour   -------------------
//   const fetchLabour_Job = async () => {
//     try {
//     const response = await jobService.get('/job/countwithname');
//     return (response.data);
//     }catch (error) {
//        throw (error);
//     }
//     };
//--------------------------------Table  :- JOb and labour   -------------------
  const fetchLabourJobCountsForPie = async () => {
    try {
    const response = await jobService.get('/api/labour/count');
    console.log("job per job role :",response.data);
    return (response.data);
    }catch (error) {
       throw (error);
    }
    };
  //--------------------------------List  :- JOb list  -------------------
  const fetchLabourJobCounts = async () => {
    try {
    const response = await jobService.get('/api/jobrole/joblist');
    console.log("job for list :",response.data);
    return (response);
    }catch (error) {
       throw (error);
    }
    };
    export default{
        jobService,
        fetchJobCount,
        fetchHighDemand,
        fetchLabourJobCounts,
        fetchLabourJobCountsForPie,
      }