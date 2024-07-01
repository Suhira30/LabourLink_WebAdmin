import axios from 'axios';
const BASE_URL='http://localhost:8080/api';
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
//---------------------------------register notification -------------------
    const fetchRegisterNotification  = async () => {
    try {
    const response = await notificationService.get(`/adminnotification`);
    return (response);
    }catch (error) {
       throw (error);
    }
    };
// //---------------------------------reports of Labour-------------------
//   const fetchReportofLabour  = async (email) => {
//     try {
//     const response = await notificationService.put(``);
//     return (console.log("Successfully verified"));
//     }catch (error) {
//        throw (error);
//     }
//     };
//---------------------------------Is verified -------------------
const IsVerifiedLabour  = async (email) => {
    try {
    const response = await notificationService.get(`/labour/getLabour/${email}`);
    return (console.log("Success until notification service"));
    }catch (error) {
       throw (error);
    }
    };
    export default{
        notificationService,
        verifiedLabour,
        //fetchReportofLabour,
        IsVerifiedLabour,
        fetchRegisterNotification,
    }     