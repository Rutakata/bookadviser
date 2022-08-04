import { Dispatch } from "redux";
import { TitleApi } from "../../API/api";
import { Title, MainState, Action, Tag, actionTypes, setLoadingA, setTitlesA, setTagsA} from "../Interfaces/MainInterfaces/mainInterfaces"


let initialState:MainState = {
    titles: [],
    loading: true,
    tags: []
}

export function mainReducer(state = initialState, action: Action): MainState  {
    switch(action.type) {
        case actionTypes.SET_TITLES:
            return { titles: action.payload, loading: true, tags: state.tags }
        case actionTypes.SET_LOADING:
            return { titles: state.titles, loading: action.isLoading, tags: state.tags}
        case actionTypes.SET_TAGS:
            return { titles: state.titles, loading: state.loading, tags: [...action.payload] }
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

const setTags = (payload: Tag[]): setTagsA => {
    return { type: actionTypes.SET_TAGS, payload }
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