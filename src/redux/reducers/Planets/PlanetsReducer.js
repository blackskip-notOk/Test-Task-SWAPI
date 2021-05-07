import { homeAPI } from '../../../api/API';

const SET_PLANETS = 'test-task/planets/SET_PLANETS';
const TOGGLE_IS_FETCHING ='test-task/planets/TOGGLE_IS_FETCHING';
const SET_CURRENT_PAGE ='test-task/planets/SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'test-task/planets/SET_TOTAL_COUNT';
const TOGGLE_IS_VISIBLE = 'test-task/planets/TOGGLE_IS_VISIBLE';

let initialState = {
    planets: [],
    isFetching: false,
    currentPage: 1,
    count: 0,
    isVisible: false
};

const planetsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PLANETS:
            return {
                ...state,
                planets: action.planets
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
        case TOGGLE_IS_VISIBLE:
            return {
                ...state,
                isVisible: action.isVisible
            }
        default: return state;
    }
};
//action creators
export const setPlanets = (planets) => ({type: SET_PLANETS, planets});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalCount = (count) => ({type: SET_TOTAL_COUNT, count});
export const toggleIsVisible = isVisible => ({type: TOGGLE_IS_VISIBLE, isVisible});
//thunk creators
export const requestPlanets  = (page) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

    const response = await homeAPI.getPlanets(page);

    dispatch(toggleIsFetching(false));
    dispatch(setPlanets(response.results));
    dispatch(setTotalCount(response.count));
};

export const getFiltredData = (filtredArray, filteredData) => dispatch => {
    if (filtredArray === 'planets') dispatch(setPlanets(filteredData));
};

export default planetsReducer;