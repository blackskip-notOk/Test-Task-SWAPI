import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getRoots, getIsFetching } from '../../redux/selectors/Home/HomeSelectors';
import { getRootData } from '../../redux/reducers/Home/HomeReducer';
import Home from './Home';
import { withRouter } from 'react-router';
import Preloader from '../Common/Preloader/Preloader';

const HomeContainer = ({getRootData, isFetching, ...props}) => {
    useEffect(() => {
        getRootData();
    }, [getRootData]);
    return (
        <>
        {isFetching ? <Preloader /> : null}
        <Home {...props} />

        </>
    );
}

const mapStateToProps = state => {
    return {
        titles: getRoots(state).titles,
        api: getRoots(state).api,
        isFetching: getIsFetching(state)
    };
}

export default compose(connect(mapStateToProps, {getRootData}),
    withRouter)(HomeContainer);