import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import filmsReducer from "./reducers/Films/FilmsReducer";
import homeReducer from './reducers/Home/HomeReducer';
import peopleReducer from "./reducers/People/PeopleReducer";
import planetsReducer from "./reducers/Planets/PlanetsReducer";
import starshipsReducer from "./reducers/Starships/StarshipsReducer";
import vehiclesReducer from "./reducers/Vehicles/VehiclesReducer";
import speciesReducer from './reducers/Species/SpeciesReducer';

const reducers = combineReducers({
    home: homeReducer,
    people: peopleReducer,
    planets: planetsReducer,
    films: filmsReducer,
    starships: starshipsReducer,
    vehicles: vehiclesReducer,
    species: speciesReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;