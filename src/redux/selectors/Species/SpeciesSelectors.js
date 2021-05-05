export const getSpecies = state => {
    state.species.species.forEach((specie, index) => {
        specie.key = index;
    });
    return state.species.species;
}
export const getIsFetching = state => state.species.isFetching;
export const getPagesInfo = state => {
    const count = state.species.count;
    const currentPage = state.species.currentPage;
    return {currentPage, count};
};