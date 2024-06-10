import axios from 'axios';
const BASE_URL='http://localhost:1000';
const jobService=axios.create({
    baseURL:BASE_URL,});
   
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdWhpcmFiM0BnbWFpbC5jb20iLCJpYXQiOjE3MTc3MzU0MTAsImV4cCI6MTcxODM0MDIxMH0.Xyn9P3_638rYrNNV-7tiS0-234xOzZAXePpYq12NOoc';
    localStorage.setItem('token', token);

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
          const response = await jobService.get('/job/count');
          return response.data;
        } catch (error) {
          console.error('Error fetching job count:', error);
          throw error;
        }
      };
//------------------Post Job --------------------------------
    const createJob = async (jobData) => {
        try {
          const response = await jobService.post('/job', jobData);
          return response;
        } catch (error) {
          throw error;
        }
      };
    export default{
        jobService,
        createJob,
        fetchJobCount,
      }