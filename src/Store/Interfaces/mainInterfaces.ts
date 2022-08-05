import { Tag } from "./filterInterfaces";

export enum actionTypes {
    SET_TITLES = "SET_TITLES",
    SET_LOADING = "SET_LOADING",
    SET_TAGS = "SET_TAGS",
    SET_SEARCH_VALUE = "SET_SEARCH_VALUE"
}

export interface setTitlesA {
    type: actionTypes.SET_TITLES;
    payload: Title[];
    total: number;
}

export interface setLoadingA {
    type: actionTypes.SET_LOADING;
    isLoading: boolean; 
}

export interface setSearchValueA {
    type: actionTypes.SET_SEARCH_VALUE;
    searchValue: string;
}

export type Action = setTitlesA | setLoadingA | setSearchValueA;

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
    total: number;
    searchValue: string;
}
