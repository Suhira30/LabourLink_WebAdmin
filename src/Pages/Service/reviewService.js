import axios from 'axios';
import BASE_URL from './baseUrl';

const reviewService=axios.create({baseURL:BASE_URL,});

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
          const response = await reviewService.get('/api/v1/labourReview/getAllReviewForAdmin');
          return response.data;
        } catch (error) {
          // console.error('Error fetching job count:', error);
          throw error;
        }
      };
      //-------------------------------------remove reviews-----------------
    const deleteReviewById = async (id) => {
        try {
          const response = await reviewService.delete(`/api/v1/labourReview/deleteByAdmin/${id}`);
          fetchReviewData();
          return response.data;
        } catch (error) {
          // console.error('Error fetching:', error);
          throw error;
        }
      };
    //-------------------------------------Individual review-----------------
    const fetchIndividualReviewData = async (email) => {
      try {
        const response = await reviewService.get(`/api/v1/labourReview/review/${email}`);
        return response.data;
      } catch (error) {
        // console.error('Error  fetching indivudal reviews:', error);
        throw error;
      }
    };
    export default{
        reviewService,
        fetchReviewData,
        deleteReviewById,
        fetchIndividualReviewData,
      }