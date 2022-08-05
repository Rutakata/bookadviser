export interface Tag {
    id: string;
    type: string;
    attributes: {
        name: {
            en: string;
        }
    }
}

export interface FilterState {
    tags: Tag[];
    selectedTags: string[];
}

export enum actionTypes {
    SET_TAGS = "SET_TAGS",
    UPDATE_SELECTED_TAGS = "UPDATE_SELECTED_TAGS",
    SET_LOADING = "SET_LOADING",
    REMOVE_SELECTED_TAG = "REMOVE_SELECTED_TAG"
}

export interface setTagsA {
    type: actionTypes.SET_TAGS;
    payload: Tag[];
}

export interface updateSelectedTagsA {
    type: actionTypes.UPDATE_SELECTED_TAGS,
    tagId: string
}

export interface setLoadingA {
    type: actionTypes.SET_LOADING,
    isLoading: boolean
}

export interface removeSelectedTagA {
    type: actionTypes.REMOVE_SELECTED_TAG,
    tagId: string
}

export type Action = setTagsA | updateSelectedTagsA | setLoadingA | removeSelectedTagA;
