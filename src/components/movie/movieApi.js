import axiosInstance from "../../utils/axios";

export const getMovie = async (id)=>{
 const response = await axiosInstance.get(`/movies/${id}`)
 return response.data;

}