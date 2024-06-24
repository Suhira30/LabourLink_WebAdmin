import axios from 'axios';
const BASE_URL='http://localhost:1000/api';
const userService=axios.create({
    baseURL:BASE_URL,});
   
    userService.interceptors.request.use(
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
  //---------------------------------Table 01 :- users All-------------------
  const fetchNewUserData = async () => {
    try {
    const response = await userService.get('/user/all');
    return (response.data);
    }catch (error) {
      throw (error);
    }
    };
  //----------------------------------Count of user--------------------------------
  const fetchUserCount = async () => {
    try {
      const response = await userService.get('/user/count');
      return response.data;
    } catch (error) {
      console.error('Error fetching user count:', error);
      throw error;
    }
  };
  //---------------------------------Individual user detail------------------------
  const fetchIndividualUserData = async (email) => {
    try {
    const response = await userService.get(`/user/u/${email}`);
    //console.log(response.data);
    return (response.data);
    }catch (error) {
      throw (error);
    }
    };
  //---------------------------------Individual user detail remove -------------------
  const removeUserData  = async (email,removalPurpose) => {
    try {
    const response = await userService.put(`/user/u/${email}`,{removalPurpose});
    return (console.log("Successfully removed"));
    }catch (error) {
       throw (error);
    }
    };
     
  //--------------------------------Table 02 :-suspend  user all  -------------------
  const fetchSuspendedUsers = async () => {
    try {
    const response = await userService.get('/suspend/all');
    return (response.data);
    }catch (error) {
       throw (error);
    }
    };
  //--------------------------------Suspend Individual user detail-------------------
  const fetchSuspendIndividualUserData = async (email) => {
    try {
    const response = await userService.get(`/suspend/${email}`);
    //console.log(response.data);
    return (response.data);
    }catch (error) {
      throw (error);
    }
    };
  //---------------------------------Suspended Count of user------------------
  const fetchSuspendUserCount = async () => {
    try {
    const response = await userService.get('/suspend/count');
    return response.data;
    } catch (error) {
    console.error('Error fetching user count:', error);
     throw error;
    }
    };
  //---------------------------------Table 03 :- Deactivated users All-------------------
  const fetchDeactivatedUserData = async () => {
    try {
    const response = await userService.get('/user/deactivate/all');
    return (response.data);
    }catch (error) {
      throw (error);
    }
    };
  //---------------------------------Deactivate Count of user------------------
  const fetchDeactivatedUserCount = async () => {
    try {
    const response = await userService.get('/user/deactivate/count');
    return response.data;
    } catch (error) {
    //console.error('Error fetching user count:', error);
     throw error;
    }
    };
   //--------------------------------Deactivate Individual user detail-------------------
   const fetchDeactivatedIndividualUserData = async (email) => {
    try {
    const response = await userService.get(`/user/deactivate/${email}`);
    //console.log(response.data);
    return (response.data);
    }catch (error) {
      throw (error);
    }
    };
    //---------------------------------Individual booking detail------------------------
  const fetchBookingData = async (email) => {
    try {
    const response = await userService.get(`/bookings/booking/${email}`);
    console.log("booking per person",response);
    return (response.data);
    }catch (error) {
      throw (error);
    }
    };
     //---------------------------------Profie------------------------
  const fetchProfileName = async () => {
    try {
    const response = await userService.get('user/userProfile');
    console.log("profile ",response.data);
    return (response.data);
    }catch (error) {
      throw (error);
    }
    };
  export default{
    userService,
    fetchNewUserData,
    fetchUserCount,
    fetchIndividualUserData,
    removeUserData,
    fetchSuspendedUsers,
    fetchSuspendUserCount,
    fetchSuspendIndividualUserData,
    fetchDeactivatedUserData,
    fetchDeactivatedUserCount,
    fetchDeactivatedIndividualUserData,
    fetchBookingData,
    fetchProfileName,
  }