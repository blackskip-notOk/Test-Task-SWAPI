import { homeAPI } from '../../../api/API';

const SET_PLANETS = 'test-task/planets/SET_PLANETS';
const TOGGLE_IS_FETCHING ='test-task/planets/TOGGLE_IS_FETCHING';
const SET_CURRENT_PAGE ='test-task/planets/SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'test-task/planets/SET_TOTAL_COUNT';

let initialState = {
    planets: [],
    isFetching: false,
    currentPage: 1,
    pageSize: 10,
    portionSize: 5,
    next: null,
    previous: null,
    count: 0,
    columns: [
        {title: 'Имя', dataIndex: 'name', key: 'name',
            align: 'center',
            render: text => <span>{text}</span>
        },
        {
            title: 'Период вращения',
            dataIndex: "rotation_period",
            key: 'rotation_period',
        },
        {
            title: 'Орбитальный период',
            dataIndex: 'orbital_period',
            key: 'orbital_period',
        },
        {
            title: 'Диаметр',
            dataIndex: 'diameter',
            key: 'diameter',
        },
        {
            title: 'Климат',
            dataIndex: 'climate',
            key: 'climate',
        },
        {
            title: 'Граыитация',
            dataIndex: 'gravity',
            key: 'gravity',
        },
        {
            title: 'Местность',
            dataIndex: 'terrain',
            key: 'terrain',
        },
        {
            title: 'Поверхность воды',
            dataIndex: 'surface_water',
            key: 'surface_water',
        },
        {
            title: 'Популяция',
            dataIndex: 'population',
            key: 'population',
        },
        {
            title: 'Резиденты',
            dataIndex: 'residents',
            key: 'residents',
        },
        {
            title: 'Фильмы',
            dataIndex: 'films',
            key: 'films',
        },
        {
            title: 'Создан',
            dataIndex: 'created',
            key: 'created',
        },
        {
            title: 'Отредактирован',
            dataIndex: 'edited',
            key: 'editer',
        },
        {
            title: 'URL',
            dataIndex: 'url',
            key: 'url',
        }
    ]
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
        default: return state;
    }
};
//action creators
export const setPlanets = (planets) => ({type: SET_PLANETS, planets});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalCount = (count) => ({type: SET_TOTAL_COUNT, count});
//thunk creators
export const requestPlanets  = (page) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

    const response = await homeAPI.getPlanets(page);

    dispatch(toggleIsFetching(false));
    dispatch(setPlanets(response.results));
    dispatch(setTotalCount(response.count));
};

export default planetsReducer;