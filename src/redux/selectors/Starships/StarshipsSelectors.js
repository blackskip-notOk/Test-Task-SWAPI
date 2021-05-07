import moment from "moment";

export const getStarships = state => {
    state.starships.starships.forEach((starship, index) => {
        starship.key = index;
        starship.created = moment(starship.created).format('llll');
        starship.edited = moment(starship.edited).format('llll');
    });
    return state.starships.starships;
}
export const getIsFetching = state => state.starships.isFetching;
export const getPagesInfo = state => {
    const count = state.starships.count;
    const currentPage = state.starships.currentPage;
    return {currentPage, count};
};