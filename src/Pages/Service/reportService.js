import axios from 'axios';
const BASE_URL='http://localhost:8080/api';
const reportService=axios.create({
    baseURL:BASE_URL,});
   
    reportService.interceptors.request.use(
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
    //---------------------------------Report all  -------------------
const fetchAllReport  = async () => {
    try {
    const response = await reportService.get(`/v1/report/allReports/admin`);
    console.log(response.data);
        return (response);
    }catch (error) {
       throw (error);
    }
    };
    export default{
        reportService,
        fetchAllReport,
    }