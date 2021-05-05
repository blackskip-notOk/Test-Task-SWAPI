import { homeAPI } from '../../../api/API';

const SET_FILMS = 'test-task/films/SET_films';
const TOGGLE_IS_FETCHING ='test-task/films/TOGGLE_IS_FETCHING';

let initialState = {
    films: [],
    isFetching: false,
};

const filmsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILMS:
            return {
                ...state,
                films: action.films
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            };
        default: return state;
    }
};
//action creators
export const setFilms = (films) => ({type: SET_FILMS, films});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

//thunk creators
export const requestFilms  = (page) => async (dispatch) => {
    dispatch(toggleIsFetching(true));

    const response = await homeAPI.getFilms(page);

    dispatch(toggleIsFetching(false));
    dispatch(setFilms(response.results));
};

export default filmsReducer;