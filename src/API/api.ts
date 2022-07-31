import axios from "axios";


const instance = axios.create({
    baseURL: "https://api.mangadex.org/"
})


export const MainApi = {
    getTitleByName: (searchRequest = "bleach") => {
        return instance.get(`manga?title=${searchRequest}`)
    }
}