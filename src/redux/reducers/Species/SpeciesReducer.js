import { homeAPI } from '../../../api/API';

const SET_SPECIES = 'test-task/species/SET_SPECIES';
const TOGGLE_IS_FETCHING ='test-task/species/TOGGLE_IS_FETCHING';
const SET_CURRENT_PAGE ='test-task/species/SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'test-task/species/SET_TOTAL_COUNT';

let initialState = {
    species: [],
    isFetching: false,
    currentPage: 1,
    count: 0,
};

const speciesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SPECIES:
            return {
                ...state,
                species: action.species
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
export const setSpecies = (species) => ({type: SET_SPECIES, species});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalCount = (count) => ({type: SET_TOTAL_COUNT, count});
//thunk creators
export const requestSpecies  = (page) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

    const response = await homeAPI.getSpecies(page);

    dispatch(toggleIsFetching(false));
    dispatch(setSpecies(response.results));
    dispatch(setTotalCount(response.count));
};

export default speciesReducer;