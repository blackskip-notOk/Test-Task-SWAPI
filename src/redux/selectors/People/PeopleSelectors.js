import React from 'react';
import moment from 'moment';

export const getPeople = state => {
    state.people.people.forEach((person, index) => {
        person.key = index;
        person.created = moment(person.created).format('llll');
        person.edited = moment(person.edited).format('llll');
        switch(person.gender) {
            case 'male':
                return person.gender = <i className = "fas fa-mars"></i>;
            case 'female':
                return person.gender = <i className = "fas fa-venus"></i>;
            case 'n/a':
                return person.gender = <i className = "fas fa-genderless"></i>;
            default: return person.gender;
        }
    });
    return state.people.people;
}
export const getIsFetching = state => state.people.isFetching;
export const getPagesInfo = state => {
    const pageSize = state.people.pageSize;
    const count = state.people.count;
    const currentPage = state.people.currentPage;
    const pages = [];
    const pagesCount = Math.ceil(count / pageSize);
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    const portionSize = state.people.portionSize
    const portionCount = Math.ceil(pagesCount / portionSize);
    return {pageSize, currentPage, pages, portionCount, portionSize};
};