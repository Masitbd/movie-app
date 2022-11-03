import axios from "axios"

export const getMovies = async ()=>{
 const response = await axios.get('/movies')
 return response.data;
}