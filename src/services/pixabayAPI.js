import axios from "axios";

 

const instance = axios.create({
    baseURL: "https://pixabay.com/api/",
})

export const getPhotos = async (searchWord, page) => {
    const {data} = await instance("/", {
        params: {
            q: searchWord,
            page,
            key: "20735432-c0677fc566250abe2f2f1af55",
            image_type: "photo",
            orientation: "horizontal",
            per_page: 12
            
        }
    });
    return data;
}