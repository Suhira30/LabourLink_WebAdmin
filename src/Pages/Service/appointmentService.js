import axios from 'axios';

const BASE_URL='http://localhost:1000/api/bookings';
const appointmentService=axios.create({
    baseURL:BASE_URL,});
 
    appointmentService.interceptors.request.use(
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
     //----------------------------------Pending----------------------------------------------
  const fetchPendingAppointmentCount = async () => {
    try {
      const response = await appointmentService.get('/pending_count');
      return response.data;
    } catch (error) {
      console.error('Error fetching pending count:', error);
      throw error;
    }
  };
    //----------------------------------Declined--------------------------------------------------
    const fetchDeclinedAppointmentCount = async () => {
        try {
          const response = await appointmentService.get('/declined_count');
          return response.data;
        } catch (error) {
          console.error('Error fetching Cancel count:', error);
          throw error;
        }
      };
    //----------------------------------Accept-----------------------------------------------
    const fetchAcceptAppointmentCount = async () => {
        try {
          const response = await appointmentService.get('/accept_count');
          return response.data;
        } catch (error) {
          console.error('Error fetching Delivered count:', error);
          throw error;
        }
      };
     //----------------------------------Complete-----------------------------------------------
     const fetchCompleteAppointmentCount = async () => {
      try {
        const response = await appointmentService.get('/complete_count');
        return response.data;
      } catch (error) {
        console.error('Error fetching Delivered count:', error);
        throw error;
      }
    };
  
      //---------------------------------barchar :- Appointment Vs Total number------------------
      const fetchAppointmentVsTotal = async () => {
        try {
          const response = await appointmentService.get('/graphleft');
          return response;
        } catch (error) {
          console.error('Error fetching appointment vs total appointments data:', error);
          throw error;
        }
      };
    //-------------------barchar right :- Cancelled Appointment Vs Total number----------
    const fetchCancelledAppointmentVsTotal = async () => {
      try {
        const response = await appointmentService.get('/graphright');
        const formattedData = response.data.map(item => [item[0], parseInt(item[1])]);
        return [['Job', 'Total'], ...formattedData];
      } catch (error) {
        console.error('Error fetching cancelled appointment vs total appointments data:', error);
        throw error;
      }
    };
    //---------------------------------Table 1 :- pending booking------------------
    const fetchPendingAppointmentData = async () => {
      try {
        const response = await appointmentService.get('/pending');
        return (response);
    } catch (error) {
      throw (error);
    }
    };
    //---------------------------------Table 2 :- Complete booking------------------
    const fetchCompleteAppointmentData = async () => {
      try {
        const response = await appointmentService.get('/deliver');
        return (response);
      } catch (error) {
      throw (error);
      }
    };
    //---------------------------------Table 3 :- Ccancel booking------------------
    const fetchCancelledAppointmentData = async () => {
      try {
        const response = await appointmentService.get('/cancel');
        return (response);
      } catch (error) {
      throw (error);
      }
    };
      //---------------------------------Table 4 :- Accept booking------------------
      const fetchAcceptAppointmentData = async () => {
        try {
          const response = await appointmentService.get('/accept');
          return (response);
        } catch (error) {
        throw (error);
        }
      };
  export default{
    appointmentService,
    fetchPendingAppointmentCount,
    fetchDeclinedAppointmentCount,
    fetchAcceptAppointmentCount,
    fetchCompleteAppointmentCount,
    fetchAppointmentVsTotal,
    fetchCancelledAppointmentVsTotal,
    fetchPendingAppointmentData,
    fetchCompleteAppointmentData,
    fetchCancelledAppointmentData,
    fetchAcceptAppointmentData,
    
    
  }