import { homeAPI } from '../../../api/API';

const SET_VEHICLES = 'test-task/vehicles/SET_VEHICLES';
const TOGGLE_IS_FETCHING ='test-task/vehicles/TOGGLE_IS_FETCHING';
const SET_CURRENT_PAGE ='test-task/vehicles/SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'test-task/vehicles/SET_TOTAL_COUNT';

let initialState = {
    vehicles: [],
    isFetching: false,
    currentPage: 1,
    next: null,
    previous: null,
    count: 0,
};

const vehiclesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VEHICLES:
            return {
                ...state,
                vehicles: action.vehicles
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
export const setVehicles = (vehicles) => ({type: SET_VEHICLES, vehicles});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalCount = (count) => ({type: SET_TOTAL_COUNT, count});
//thunk creators
export const requestVehicles  = (page) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

    const response = await homeAPI.getVehicles(page);

    dispatch(toggleIsFetching(false));
    dispatch(setVehicles(response.results));
    dispatch(setTotalCount(response.count));
};

export default vehiclesReducer;