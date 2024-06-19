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
  //---------------------------------All Notification-------------------
  const fetctNotificationData = async () => {
    try {
    const response = await notificationService.get('/adminnotification');
    return (response.data);
    }catch (error) {
      throw (error);
    }
    };export default{
        notificationService,
        fetctNotificationData,}