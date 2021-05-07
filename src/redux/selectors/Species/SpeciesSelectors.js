import moment from "moment";

export const getSpecies = state => {
    state.species.species.forEach((specie, index) => {
        specie.key = index;
        specie.created = moment(specie.created).format('llll');
        specie.edited = moment(specie.edited).format('llll');
    });
    return state.species.species;
}
export const getIsFetching = state => state.species.isFetching;
export const getPagesInfo = state => {
    const count = state.species.count;
    const currentPage = state.species.currentPage;
    return {currentPage, count};
};