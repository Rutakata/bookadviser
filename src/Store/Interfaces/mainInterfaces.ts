import { Tag } from "./filterInterfaces";

export enum actionTypes {
    SET_TITLES = "SET_TITLES",
    SET_LOADING = "SET_LOADING",
    SET_TAGS = "SET_TAGS"
}

export interface setTitlesA {
    type: actionTypes.SET_TITLES;
    payload: Title[];
}

export interface setLoadingA {
    type: actionTypes.SET_LOADING;
    isLoading: boolean; 
}


export type Action = setTitlesA | setLoadingA;

export interface Title {
    id: string;
    type: string;
    attributes: {
        title: {
            en: string;
        },
        description: {
            en: string;
        },
        tags: Tag[]
    }
}

export interface MainState {
    titles: Title[];
    loading: boolean;
}
