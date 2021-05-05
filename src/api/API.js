import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://swapi.dev/api/'
});

export const homeAPI = {
    async getRoot() {
        const response = await instance.get();
        return response.data;
    },
    async getPeople(currentPage) {
        const response = await instance.get(`/people/?page=${currentPage}`);
        return response.data;
    },
    async getPlanets(currentPage) {
        const response = await instance.get(`/planets/?page=${currentPage}`);
        return response.data;
    },
    async getFilms() {
        const response = await instance.get('/films/');
        return response.data;
    },
    async getStarships(currentPage) {
        const response = await instance.get(`/starships/?page=${currentPage}`);
        return response.data;
    },
    async getVehicles(currentPage) {
        const response = await instance.get(`/vehicles/?page=${currentPage}`);
        return response.data;
    },
    async getSpecies(currentPage) {
        const response = await instance.get(`/species/?page=${currentPage}`);
        return response.data;
    },
};