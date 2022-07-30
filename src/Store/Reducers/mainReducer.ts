import { Dispatch } from "redux";
import { MainApi } from "../../API/api";
import { Title, MainState, Action } from "../Interfaces/MainInterfaces/mainInterfaces"


const SET_TITLES = "SET_TITLES";
const SET_LOADING = "SET_LOADING";


let initialState:MainState = {
    titles: [],
    loading: true,
}

export function mainReducer(state = initialState, action: Action<Title[]>): MainState  {
    switch(action.type) {
        case SET_TITLES:
            return { titles: action.payload, loading: false }

        case SET_LOADING:
            return { titles: state.titles, loading: true }
        default:
            return state
    }
}

const setLoading = () => {
    return { type: SET_LOADING, payload: [] }
}

const setTitles = (payload: Title[]) => {
    return { type: SET_TITLES, payload }
}

export const getTitles = () => async(dispatch: Dispatch) => {
    try {
        dispatch(setLoading())
        let response = await MainApi.getTitleByName();
        dispatch(setTitles(response.data.data))
    } catch(e) {
        console.error(e);
    }
}
