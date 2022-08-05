import axios from "axios";


const instance = axios.create({
    baseURL: "https://api.mangadex.org/", 
    headers: {
        "Access-Control-Allow-Origin": "https://rutakata.github.io/manga-adviser/"
    }
})

export const TitleApi = {
    getTitleData: (titleId: string) => {
        return instance.get(`manga/${titleId}`)
    },
    getTitleByName: (searchRequest = "", offset: number) => {
        return instance.get(`manga?title=${searchRequest}&limit=9&offset=${offset}`);
    },
    getTitleCover: (titleId: string) => {
        return instance.get(`cover?manga[]=${titleId}`);
    },
    getRandomTitle: () => {
        return instance.get(`manga/random`);
    },
    getTags: () => {
        return instance.get(`manga/tag`);
    },
    getTitleByTags: (tagParameter: string, offset: number) => {
        return instance.get(`manga?${tagParameter}&limit=9&offset=${offset}`);
    }
}
