import axiosInstance from "../../utils/axios";

export const getMovies = async (tags, search)=>{
    let queryString = "";
   console.log(tags)
    if (tags?.length > 0) {
        queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
    }

    if (search !== "") {
        queryString += `&q=${search}`;
    }
    const response = await axiosInstance.get(`/movies?${queryString}`);   
 //const response = await axiosInstance.get(`/movies/?${queryString}`);
 return response.data;

}