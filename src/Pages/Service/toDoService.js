import axios from 'axios';
import BASE_URL from './baseUrl';

const toDoService=axios.create({ baseURL:BASE_URL,});
   
    toDoService.interceptors.request.use(
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
     //----------------------------------All todo----------------------------------------------
     const fetchAll = async () => {
        try {
          const response = await toDoService.get('/apptodo/api/todo');
          //console.log(response.data)
          return response.data;
        } catch (error) {
          console.error('Error fetching pending count:', error);
          throw error;
        }
      };
    //----------------------------------Add Todo----------------------------------------------
     const addToDo = async (todo) => {
        try {
          const response = await toDoService.post('/apptodo/',todo);
          return response.data;
        } catch (error) {
          //console.error('Error fetching pending count:', error);
          throw error;
        }
      };
     //----------------------------------Delete Todo----------------------------------------------
     const deleteToDo = async (id) => {
        try {
          const response = await toDoService.delete(`/apptodo/${id}`);
          return response.data;
        } catch (error) {
          //console.error('Error fetching pending count:', error);
          throw error;
        }
      };
       //----------------------------------Handel Todo----------------------------------------------
     const handleToDo = async (id) => {
        try {
          const response = await toDoService.put(`/apptodo/${id}`);
          return response.data;
        } catch (error) {
          //console.error('Error fetching pending count:', error);
          throw error;
        }
      };
    export default{
        toDoService,
        fetchAll,
        addToDo,
        deleteToDo,
        handleToDo,
    }