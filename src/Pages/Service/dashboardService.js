import axios from 'axios';
const BASE_URL='http://localhost:8080';
const dashboardService=axios.create({
    baseURL:BASE_URL,});
   
    dashboardService.interceptors.request.use(
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
    // ----------------------Data fetching methods
     //----------------------------------Count of user------------------
  const fetchUserCount = async () => {
    try {
      const response = await dashboardService.get('/api/user/count');
      return response.data;
    } catch (error) {
      console.error('Error fetching user count:', error);
      throw error;
    }
  };
  //-------------------------------------Count of job------------------
  const fetchJobCount = async () => {
    try {
      const response = await dashboardService.get('/job/count');
      return response.data;
    } catch (error) {
      console.error('Error fetching job count:', error);
      throw error;
    }
  };
  //---------------------------Total appointment-----------------------
 const fetchAppointmentCount = async ()=> {
try{
    const response=await dashboardService.get('/api/bookings/total_app');
    return response.data;
}catch(error){
    console.log('Error fetching appointment count:', error);
    throw error;
} }
  //---------------------------Dashboard barchart - Active Customer- left---------------------
  const fetchActiveCustomerData = async () => {
    try {
      const response = await dashboardService.get("/api/bookings/dashboard/g_active"); 
      const formattedData = response.data.reduce((acc, item) => {
        acc[item[0]] = parseInt(item[1]);
        return acc;
      }, {});

      const daysOrder = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const chartData = [['Days', 'Total']];
      daysOrder.forEach(day => {
        chartData.push([day, formattedData[day] || 0]);
      });

     return chartData;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error ;
    }
  };
//---------------------------Dashboard barchart -Active labour - right----------------------
const fetchActiveLabourData = async () => {
    try {
      const response = await dashboardService.get("/api/bookings/dashboard/g_active_l"); 
      const formattedData = response.data.reduce((acc, item) => {
        acc[item[0]] = parseInt(item[1]);
        return acc;
      }, {});

      const daysOrder = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const chartData = [['Days', 'Total']];
      daysOrder.forEach(day => {
        chartData.push([day, formattedData[day] || 0]);
      });

     return chartData;
    } catch (error) {
      console.error("Error fetching active labour data:", error);
      throw error ;
    }
  };
//---------------------------Dashboard barchart -Active labour - right----------------------
const fetchTotalAppointmentPerDay = async () => {
  try {
    const response = await dashboardService.get("/api/bookings/dashboard/g_AppCount"); 
    const formattedData = response.data.reduce((acc, item) => {
      acc[item[0]] = parseInt(item[1]);
      return acc;
    }, {});

    const daysOrder = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const chartData = [['Days', 'Total']];
    daysOrder.forEach(day => {
      chartData.push([day, formattedData[day] || 0]);
    });

   return chartData;
  } catch (error) {
    console.error("Error fetching active labour data:", error);
    throw error ;
  }
};

  export default {
    dashboardService,
    fetchUserCount,
    fetchJobCount,
    fetchAppointmentCount,
    fetchActiveCustomerData,
    fetchActiveLabourData,
    fetchTotalAppointmentPerDay
  };