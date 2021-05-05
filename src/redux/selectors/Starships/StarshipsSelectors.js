export const getStarships = state => {
    state.starships.starships.forEach((starship, index) => {
        starship.key = index;
    });
    return state.starships.starships;
}
export const getIsFetching = state => state.starships.isFetching;
export const getPagesInfo = state => {
    const count = state.starships.count;
    const currentPage = state.starships.currentPage;
    return {currentPage, count};
};