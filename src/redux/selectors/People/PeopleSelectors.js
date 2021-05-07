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
            case 'hermaphrodite':
                return person.gender = <i className="fas fa-transgender"></i>;
            case 'none':
                return person.gender = <i className="fas fa-times"></i>;
            default: return person.gender;
        }
    });
    return state.people.people;
}
export const getIsFetching = state => state.people.isFetching;
export const getPagesInfo = state => {
    const count = state.people.count;
    const currentPage = state.people.currentPage;
    return {currentPage, count};
};