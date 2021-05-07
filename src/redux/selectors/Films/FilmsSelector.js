import moment from "moment";

export const getFilms = state => {
    state.films.films.forEach((film, index) => {
        film.key = index;
        film.created = moment(film.created).format('llll');
        film.edited = moment(film.edited).format('llll');
        film.release_date = moment(film.release_date).format('ll');
    });
    return state.films.films;
}
export const getIsFetching = state => state.films.isFetching;