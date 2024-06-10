import axios from 'axios';
const BASE_URL='http://localhost:1000';
const userService=axios.create({
    baseURL:BASE_URL,});
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdWhpcmFiM0BnbWFpbC5jb20iLCJpYXQiOjE3MTc3MzU0MTAsImV4cCI6MTcxODM0MDIxMH0.Xyn9P3_638rYrNNV-7tiS0-234xOzZAXePpYq12NOoc';
    localStorage.setItem('token', token);

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
  //----------------------------------Count of user------------------
  const fetchUserCount = async () => {
    try {
      const response = await userService.get('/api/user/count');
      return response.data;
    } catch (error) {
      console.error('Error fetching user count:', error);
      throw error;
    }
  };
  //---------------------------------Table 01 :- users All-------------------
  const fetchNewUserData = async () => {
    try {
    const response = await userService.get('/app/cancel');
    return (response.data);
    }catch (error) {
      throw (error);
    }
    };
  export default{
    userService,
    fetchNewUserData,
    fetchUserCount,
  }