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
        requestPeople(pagesInfo.currentPage, pagesInfo.pageSize);
    }, [pagesInfo.currentPage, pagesInfo.pageSize, requestPeople]);
    return (
        <>
        {isFetching ? <Preloader /> : null}
        <People currentPage={pagesInfo.currentPage}
            portionSize={pagesInfo.portionSize}
            requestPeople={requestPeople}
            pageSize={pagesInfo.pageSize}
            people={people}
            pages={pagesInfo.pages}
            portionCount={pagesInfo.portionCount} />
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