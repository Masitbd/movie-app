import axiosInstance from "../../utils/axios";

export const getMovies = async ()=>{
 const response = await axiosInstance.get('/movies')
 return response.data;

}