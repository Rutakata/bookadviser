import axios from "axios";


const instance = axios.create({
    baseURL: "https://api.mangadex.org/"
})


export const MainApi = {
    getTitleByName: (searchRequest = "") => {
        return instance.get(`manga?title=${searchRequest}`);
    },
    getTitleCover: (titleId: string) => {
        return instance.get(`cover?manga[]=${titleId}`);
    }
}