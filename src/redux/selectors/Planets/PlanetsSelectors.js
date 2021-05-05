export const getPlanets = state => {
    state.planets.planets.forEach((planet, index) => {
        planet.key = index;
        // planet.residents = planet.residents.map((resident, indx) => {
        //     resident.key = indx;
        // });
        // planet.films = planet.films.map((film, ind) => {
        //     film.key = ind;
        // })
    });
    return state.planets.planets;
}
export const getIsFetching = state => state.planets.isFetching;
export const getPagesInfo = state => {
    const pageSize = state.planets.pageSize;
    const count = state.planets.count;
    const currentPage = state.planets.currentPage;
    const pages = [];
    const pagesCount = Math.ceil(count / pageSize);
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    const portionSize = state.planets.portionSize
    const portionCount = Math.ceil(pagesCount / portionSize);
    return {pageSize, currentPage, pages, portionCount, portionSize, count};
};