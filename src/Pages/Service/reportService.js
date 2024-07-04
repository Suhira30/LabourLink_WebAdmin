import axios from 'axios';
import BASE_URL from './baseUrl';

const reportService=axios.create({ baseURL:BASE_URL,});
   
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
    const response = await reportService.get(`/api/v1/report/allReports/admin`);
    console.log(response.data);
        return (response);
    }catch (error) {
       throw (error);
    }
    };
    //---------------------------------Report by mail -------------------
const fetchReportData  = async (email) => {
    try {
    const response = await reportService.get(`/api/v1/report/individual/${email}`);
    console.log(response.data);
        return (response.data);
    }catch (error) {
       throw (error);
    }
    };
    export default{
        reportService,
        fetchAllReport,
        fetchReportData,
    }