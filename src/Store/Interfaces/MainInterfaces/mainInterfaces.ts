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

export interface setTagsA {
    type: actionTypes.SET_TAGS;
    payload: Tag[];
}

export type Action = setTitlesA | setLoadingA | setTagsA;

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
        tags: {
            attributes: {
                name: {
                    en: string;
                }
            }
        }[]
    }
}

export interface Tag {
    id: string;
    type: string;
    attributes: {
        name: {
            en: string;
        }
    }
}

export interface MainState {
    titles: Title[];
    loading: boolean;
    tags: Tag[];
}



// export interface Action {
//     type: string;
//     payload?: any;
//     isLoading?: boolean;
// }
