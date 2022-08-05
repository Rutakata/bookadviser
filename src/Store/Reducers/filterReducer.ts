import { Dispatch } from "redux";
import { TitleApi } from "../../API/api";
import { Action, FilterState, actionTypes, Tag, setTagsA, updateSelectedTagsA, removeSelectedTagA } from "../Interfaces/filterInterfaces";

let initialState: FilterState = {
    tags: [],
    selectedTags: []
}

export const filterReducer = (state = initialState, action: Action) => {
    switch(action.type) {
        case actionTypes.SET_TAGS:
            return { tags: action.payload, selectedTags: state.selectedTags }
        case actionTypes.UPDATE_SELECTED_TAGS:
            let newSelectedTags = [...state.selectedTags];

            if (newSelectedTags.length === 0) {
                newSelectedTags.push(action.tagId);
            }else if (!newSelectedTags.some((tagId:string) => tagId === action.tagId)) {
                newSelectedTags.push(action.tagId);
            }
            
            return { tags: state.tags, selectedTags: [...newSelectedTags] }
        case actionTypes.REMOVE_SELECTED_TAG: {
            let updatedSelectedTags = state.selectedTags.filter((tagId: string) => {
                if (tagId !== action.tagId) return tagId
            })

            return { tags: state.tags, selectedTags: [...updatedSelectedTags] }
        }
        default:
            return state;
    }
}

const setTags = (payload: Tag[]): setTagsA => {
    return { type: actionTypes.SET_TAGS, payload }
}

export const updateSelectedTags = (tagId: string): updateSelectedTagsA => {
    return { type: actionTypes.UPDATE_SELECTED_TAGS, tagId }
}

export const removeSelectedTag = (tagId: string): removeSelectedTagA => {
    return { type: actionTypes.REMOVE_SELECTED_TAG, tagId }
}

export const getTags = () => async(dispatch: Dispatch) => {
    try {
        let response = await TitleApi.getTags();
        dispatch(setTags(response.data.data));
    } catch(e) {
        console.error(e);
    }
}