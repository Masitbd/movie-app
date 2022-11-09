import axiosInstance from "../../utils/axios";

// http://localhost:9000/movies?tags_like=romance&tags_like=commedy&id_ne=2&_limit=1

export const getRelatedMovies = async ({tags, id})=>{
    const limit = 5;
    let queryString =
         tags?.length>0? 
         tags.map(tag=>
        `tags_like=${tag}`).join('&') + `&id_ne=${id}&_limit=${limit}`:
        `&id_ne=${id}&_limit=${limit}`

        console.log('myquerystring',queryString)

 const response = await axiosInstance.get(`/movies?${queryString}`)
 return response.data;

}