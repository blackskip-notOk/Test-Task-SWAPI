export const getFilms = state => {
    state.films.films.forEach((film, index) => {
        film.key = index;
    });
    return state.films.films;
}
export const getIsFetching = state => state.films.isFetching;