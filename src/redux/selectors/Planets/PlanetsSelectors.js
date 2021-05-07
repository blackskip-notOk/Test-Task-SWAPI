import moment from 'moment';

export const getPlanets = state => {
    state.planets.planets.forEach((planet, index) => {
        planet.key = index;
        planet.created = moment(planet.created).format('llll');
        planet.edited = moment(planet.edited).format('llll');
    });
    return state.planets.planets;
}
export const getIsFetching = state => state.planets.isFetching;
export const getPagesInfo = state => {
    const count = state.planets.count;
    const currentPage = state.planets.currentPage;
    return {currentPage, count};
};
export const getIsVisible = state => state.planets.isVisible;