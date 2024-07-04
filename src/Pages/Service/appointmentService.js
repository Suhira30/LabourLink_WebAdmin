import axios from 'axios';
import BASE_URL from './baseUrl';

const appointmentService=axios.create({baseURL:BASE_URL,});
 
appointmentService.interceptors.request.use(
  (config)=>{
  const token = localStorage.getItem('token');
    if(token){
      config.headers.Authorization=`Bearer ${token}`;
    }
    return config;
  },(error)=>{
     return Promise.reject(error)
    }
);
     // ----------------------Data fetching methods
     //----------------------------------Pending----------------------------------------------
  const fetchPendingAppointmentCount = async () => {
    try {
      const response = await appointmentService.get('/api/bookings/pending_count');
      return response.data;
    } catch (error) {
      //console.error('Error fetching pending count:', error);
      throw error;
    }
  };
    //----------------------------------Declined--------------------------------------------------
    const fetchDeclinedAppointmentCount = async () => {
        try {
          const response = await appointmentService.get('/api/bookings/declined_count');
          return response.data;
        } catch (error) {
          //console.error('Error fetching Cancel count:', error);
          throw error;
        }
      };
    //----------------------------------Accept-----------------------------------------------
    const fetchAcceptAppointmentCount = async () => {
        try {
          const response = await appointmentService.get('/api/bookings/accept_count');
          return response.data;
        } catch (error) {
          //console.error('Error fetching Delivered count:', error);
          throw error;
        }
      };
     //----------------------------------Complete-----------------------------------------------
     const fetchCompleteAppointmentCount = async () => {
      try {
        const response = await appointmentService.get('/api/bookings/complete_count');
        return response.data;
      } catch (error) {
        //console.error('Error fetching Delivered count:', error);
        throw error;
      }
    };
  
      //-----------------Booking : -graph : -Job Vs  Booking count along with booking stage------------------
      const fetchAppointmentVsTotal = async () => {
        try {
          const response = await appointmentService.get('/api/bookings/graphleft');
          return response;
        } catch (error) {
          //console.error('Error fetching appointment vs total appointments data:', error);
          throw error;
        }
      };

    //---------------------------------Table 1 :- pending booking------------------
    const fetchPendingAppointmentData = async () => {
      try {
        const response = await appointmentService.get('/api/bookings/pending');
        return (response);
    } catch (error) {
      throw (error);
    }
    };
    //---------------------------------Table 2 :- Complete booking------------------
    const fetchCompleteAppointmentData = async () => {
      try {
        const response = await appointmentService.get('/api/bookings/deliver');
        return (response);
      } catch (error) {
      throw (error);
      }
    };
    //---------------------------------Table 3 :- Ccancel booking------------------
    const fetchCancelledAppointmentData = async () => {
      try {
        const response = await appointmentService.get('/api/bookings/cancel');
        return (response);
      } catch (error) {
      throw (error);
      }
    };
      //---------------------------------Table 4 :- Accept booking------------------
      const fetchAcceptAppointmentData = async () => {
        try {
          const response = await appointmentService.get('/api/bookings/accept');
          return (response);
        } catch (error) {
        throw (error);
        }
      };
    //-------------------barchar right :- Cancelled Appointment Vs Total number----------
    // const fetchCancelledAppointmentVsTotal = async () => {
    //   try {
    //     const response = await appointmentService.get('/graphright');
    //     const formattedData = response.data.map(item => [item[0], parseInt(item[1])]);
    //     return [['Job', 'Total'], ...formattedData];
    //   } catch (error) {
    //     console.error('Error fetching cancelled appointment vs total appointments data:', error);
    //     throw error;
    //   }
    // };
  export default{
    appointmentService,
    fetchPendingAppointmentCount,
    fetchDeclinedAppointmentCount,
    fetchAcceptAppointmentCount,
    fetchCompleteAppointmentCount,
    fetchAppointmentVsTotal,
    fetchPendingAppointmentData,
    fetchCompleteAppointmentData,
    fetchCancelledAppointmentData,
    fetchAcceptAppointmentData,
    
    
  }