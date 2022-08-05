import { Dispatch } from "redux";
import { TitleApi } from "../../API/api";
import { Title, MainState, Action, actionTypes, setLoadingA, setTitlesA, setSearchValueA } from "../Interfaces/mainInterfaces"


let initialState:MainState = {
    titles: [],
    loading: true,
    total: 0,
    searchValue: ""
}

export function mainReducer(state = initialState, action: Action): MainState  {
    switch(action.type) {
        case actionTypes.SET_TITLES:
            return { titles: action.payload, loading: true, total: action.total, searchValue: state.searchValue}
        case actionTypes.SET_LOADING:
            return { titles: state.titles, loading: action.isLoading, total: state.total, searchValue: state.searchValue }
        case actionTypes.SET_SEARCH_VALUE: 
            return { titles: state.titles, loading: state.loading, total: state.total, searchValue: action.searchValue }
        default:
            return state
    }
}


export const setSearchValue = (searchValue: string): setSearchValueA => {
    return { type: actionTypes.SET_SEARCH_VALUE, searchValue }
}

const setLoading = (isLoading: boolean): setLoadingA => {
    return { type: actionTypes.SET_LOADING, isLoading }
}

const setTitles = (payload: Title[], total: number): setTitlesA => {
    return { type: actionTypes.SET_TITLES, payload, total }
}

export const getTitles = (searchRequest: string, page: number = 1) => async(dispatch: Dispatch) => {
    try {
        dispatch(setLoading(true));
        let response = await TitleApi.getTitleByName(searchRequest, ((page-1)*9));    
        dispatch(setTitles(response.data.data, response.data.total));
        dispatch(setLoading(false));
    } catch(e) {
        console.error(e);
    }
}

export const getTitlesByTags = (tags: string[], page: number = 1) => async(dispatch: Dispatch) => {
    let tagParameter: string = "";
    tags.forEach(tag => tagParameter += `includedTags[]=${tag}&`)
    tagParameter = tagParameter.slice(0, tagParameter.length-1);
    
    try {
        dispatch(setLoading(true));
        let response = await TitleApi.getTitleByTags(tagParameter, ((page-1)*9));
        dispatch(setTitles(response.data.data, response.data.total));
        dispatch(setLoading(false));
    }catch(e) {
        console.error(e);
    }
}
