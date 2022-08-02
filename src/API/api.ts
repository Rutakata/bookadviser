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

export const RandomApi = {
    getRandomTitle: () => {
        return instance.get(`manga/random`);
    }
}

export const TitleApi = {
    getTitleData: (titleId: string) => {
        return instance.get(`manga/${titleId}`)
    },
    getTitleByName: (searchRequest = "") => {
        return instance.get(`manga?title=${searchRequest}`);
    },
    getTitleCover: (titleId: string) => {
        return instance.get(`cover?manga[]=${titleId}`);
    },
    getRandomTitle: () => {
        return instance.get(`manga/random`);
    }
}