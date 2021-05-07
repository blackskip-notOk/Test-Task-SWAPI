import { homeAPI } from '../../../api/API';

const SET_STARSHIPS = 'test-task/starships/SET_STARSHIPS';
const TOGGLE_IS_FETCHING ='test-task/starships/TOGGLE_IS_FETCHING';
const SET_CURRENT_PAGE ='test-task/starships/SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'test-task/starships/SET_TOTAL_COUNT';

let initialState = {
    starships: [],
    isFetching: false,
    currentPage: 1,
    count: 0,
};

const starshipsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STARSHIPS:
            return {
                ...state,
                starships: action.starships
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_TOTAL_COUNT:
            return {
                ...state,
                count: action.count
            };
        default: return state;
    }
};
//action creators
export const setStarships = (starships) => ({type: SET_STARSHIPS, starships});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalCount = (count) => ({type: SET_TOTAL_COUNT, count});
//thunk creators
export const requestStarships  = (page) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

    const response = await homeAPI.getStarships(page);

    dispatch(toggleIsFetching(false));
    dispatch(setStarships(response.results));
    dispatch(setTotalCount(response.count));
};

export default starshipsReducer;