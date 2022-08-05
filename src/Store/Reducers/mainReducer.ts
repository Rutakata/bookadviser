import { Dispatch } from "redux";
import { TitleApi } from "../../API/api";
import { Title, MainState, Action, actionTypes, setLoadingA, setTitlesA } from "../Interfaces/mainInterfaces"


let initialState:MainState = {
    titles: [],
    loading: true
}

export function mainReducer(state = initialState, action: Action): MainState  {
    switch(action.type) {
        case actionTypes.SET_TITLES:
            return { titles: action.payload, loading: true }
        case actionTypes.SET_LOADING:
            return { titles: state.titles, loading: action.isLoading }
        default:
            return state
    }
}

const setLoading = (isLoading: boolean): setLoadingA => {
    return { type: actionTypes.SET_LOADING, isLoading }
}

const setTitles = (payload: Title[]): setTitlesA => {
    return { type: actionTypes.SET_TITLES, payload }
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

export const getTitlesByTags = (tags: string[]) => async(dispatch: Dispatch) => {
    let tagParameter: string = "";
    tags.forEach(tag => tagParameter += `includedTags[]=${tag}&`)
    tagParameter = tagParameter.slice(0, tagParameter.length-1);
    
    try {
        dispatch(setLoading(true));
        let response = await TitleApi.getTitleByTags(tagParameter);
        dispatch(setTitles(response.data.data));
        dispatch(setLoading(false));
    }catch(e) {
        console.error(e);
    }
}
