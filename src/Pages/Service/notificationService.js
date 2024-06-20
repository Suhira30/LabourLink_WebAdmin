import axios from 'axios';
const BASE_URL='http://localhost:1000/api';
const notificationService=axios.create({
    baseURL:BASE_URL,});
   
    notificationService.interceptors.request.use(
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
//---------------------------------Verified Labour -------------------
  const verifiedLabour  = async (email) => {
    try {
    const response = await notificationService.put(`/labour/getLabour/${email}`);
    return (console.log("Successfully verified"));
    }catch (error) {
       throw (error);
    }
    };
//---------------------------------reports of Labour-------------------
  const fetchReportofLabour  = async (email) => {
    try {
    const response = await notificationService.put(`/labour/getLabour/${email}`);
    return (console.log("Successfully verified"));
    }catch (error) {
       throw (error);
    }
    };
    export default{
        notificationService,
        verifiedLabour,
        fetchReportofLabour
    }     