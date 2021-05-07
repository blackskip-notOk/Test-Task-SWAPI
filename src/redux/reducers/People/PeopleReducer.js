import { homeAPI } from '../../../api/API';

const SET_PEOPLE = 'test-task/people/SET_PEOPLE';
const TOGGLE_IS_FETCHING ='test-task/people/TOGGLE_IS_FETCHING';
const SET_CURRENT_PAGE ='test-task/people/SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'test-task/people/SET_TOTAL_COUNT';

let initialState = {
    people: [],
    isFetching: false,
    currentPage: 1,
    count: 0
};

const peopleReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PEOPLE:
            return {
                ...state,
                people: action.people
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
export const setPeople = (people) => ({type: SET_PEOPLE, people});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalCount = (count) => ({type: SET_TOTAL_COUNT, count});

//thunk creators
export const requestPeople  = (page) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

    const response = await homeAPI.getPeople(page);

    dispatch(toggleIsFetching(false));
    dispatch(setPeople(response.results));
    dispatch(setTotalCount(response.count));
};

export default peopleReducer;