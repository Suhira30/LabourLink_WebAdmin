import axios from 'axios';
const BASE_URL='http://localhost:1000/api/v1/labourReview/';
const reviewService=axios.create({
    baseURL:BASE_URL,});

    reviewService.interceptors.request.use(
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
    //-------------------------------------Review all-----------------
    const fetchReviewData = async () => {
        try {
          const response = await reviewService.get('/getAllReviewForAdmin');
          return response.data;
        } catch (error) {
          console.error('Error fetching job count:', error);
          throw error;
        }
      };
      //-------------------------------------remove reviews-----------------
    const deleteReviewById = async (id) => {
        try {
          const response = await reviewService.delete(`/deleteByAdmin/${id}`);
          fetchReviewData();
          return response.data;
        } catch (error) {
          console.error('Error fetching job count:', error);
          throw error;
        }
      };
    //-------------------------------------Individual review-----------------
    const fetchIndividualReviewData = async (email) => {
      try {
        const response = await reviewService.get(`/review/${email}`);
        return response.data;
      } catch (error) {
        console.error('Error  fetching indivudal reviews:', error);
        throw error;
      }
    };
    export default{
        reviewService,
        fetchReviewData,
        deleteReviewById,
        fetchIndividualReviewData,
      }