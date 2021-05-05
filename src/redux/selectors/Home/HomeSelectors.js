export const getRoots = state => {
    const titles = state.home.titles;
    const api = state.home.api;
    return {titles, api}
}

export const getIsFetching = state => state.home.isFetching;