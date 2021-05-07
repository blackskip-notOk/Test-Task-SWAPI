import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { requestPeople } from '../../redux/reducers/People/PeopleReducer';
import { getIsFetching } from '../../redux/selectors/People/PeopleSelectors';
import { getPeople, getPagesInfo } from '../../redux/selectors/People/PeopleSelectors';
import Preloader from '../Common/Preloader/Preloader';
import People from './People';

const PeopleContainer = ({requestPeople, pagesInfo, isFetching,
    people}) => {
    useEffect(() => {
        requestPeople(pagesInfo.currentPage);
    }, [pagesInfo.currentPage, requestPeople]);
    return (
        <>
        {isFetching ? <Preloader /> : null}
        <People currentPage={pagesInfo.currentPage}
            requestPeople={requestPeople}
            people={people}
            count={pagesInfo.count} />
        </>
    );
}

const mapStateToProps = state => {
    return {
        people: getPeople(state),
        isFetching: getIsFetching(state),
        pagesInfo: getPagesInfo(state)
    }
}

export default connect(mapStateToProps, {requestPeople})(PeopleContainer);