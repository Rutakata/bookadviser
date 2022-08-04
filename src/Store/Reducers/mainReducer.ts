import { Dispatch } from "redux";
import { TitleApi } from "../../API/api";
import { Title, MainState, Action, Tag } from "../Interfaces/MainInterfaces/mainInterfaces"


const SET_TITLES = "SET_TITLES";
const SET_LOADING = "SET_LOADING";
const SET_TAGS = "SET_TAGS";


let initialState:MainState = {
    titles: [],
    loading: true,
    tags: []
}

export function mainReducer(state = initialState, action: Action): MainState  {
    switch(action.type) {
        case SET_TITLES:
            return { titles: action.payload, loading: true, tags: state.tags }
        case SET_LOADING:
            return { titles: state.titles, loading: action.isLoading ? action.isLoading: false, tags: state.tags}
        case SET_TAGS:
            return { titles: state.titles, loading: state.loading, tags: [...action.payload] }
        default:
            return state
    }
}

const setLoading = (isLoading: boolean) => {
    return { type: SET_LOADING, isLoading }
}

const setTitles = (payload: Title[]) => {
    return { type: SET_TITLES, payload }
}

const setTags = (payload: Tag[]) => {
    return {type: SET_TAGS, payload}
}

export const getTitles = (searchRequest: string) => async(dispatch: Dispatch) => {
    try {
        dispatch(setLoading(true));
        let response = await TitleApi.getTitleByName(searchRequest);    
        dispatch(setTitles(response.data.data));
        dispatch(setLoading(false));
    } catch(e) {
        console.error(e);
    }
}

export const getTags = () => async(dispatch: Dispatch) => {
    try {
        dispatch(setLoading(true));
        let response = await TitleApi.getTags();
        dispatch(setTags(response.data.data));
        dispatch(setLoading(false));
    } catch(e) {
        console.error(e);
    }
}