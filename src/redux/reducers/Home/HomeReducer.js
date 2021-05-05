import { homeAPI } from "../../../api/API";

const SET_ROOT_DATA = 'test-task/home/SET_ROOT_DATA';
const TOGGLE_IS_FETCHING = 'test-task/home/SET_IS_FETCHING';

const initialState = {
    rootdata: null,
    titles: [],
    api: [],
    isFetching: false
}
//reducer
const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ROOT_DATA: {
            return {
                ...state,
                rootdata: action.rootdata,
                titles: Object.keys(action.rootdata),
                api: Object.values(action.rootdata)
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default: return state;
    }
};
//action creator
const setRootData = (rootdata) => ({type: SET_ROOT_DATA, rootdata});
const toggleIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching});
//thunk creator
export const getRootData = () => async dispatch => {
    dispatch(toggleIsFetching(true));
    const response = await homeAPI.getRoot();
    dispatch(toggleIsFetching(false));
    dispatch(setRootData(response));
}

export default homeReducer;