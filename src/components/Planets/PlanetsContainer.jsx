import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { requestPlanets, getFiltredData, toggleIsVisible } from '../../redux/reducers/Planets/PlanetsReducer';
import { getIsFetching, getPlanets, getPagesInfo, getIsVisible } from '../../redux/selectors/Planets/PlanetsSelectors';
import Preloader from '../Common/Preloader/Preloader';
import Planets from './Planets';

const PlanetsContainer = ({requestPlanets, pagesInfo, isFetching,
    planets, isVisible, getFiltredData, toggleIsVisible}) => {
    useEffect(() => {
        requestPlanets(pagesInfo.currentPage);
    }, [pagesInfo.currentPage, requestPlanets]);
    return (
        <>
        {isFetching ? <Preloader /> : null}
        <Planets currentPage={pagesInfo.currentPage}
            requestPlanets={requestPlanets}
            planets={planets}
            count={pagesInfo.count}
            isVisible={isVisible}
            getFiltredData={getFiltredData}
            toggleIsVisible={toggleIsVisible}
            />
        </>
    );
}

const mapStateToProps = state => {
    return {
        planets: getPlanets(state),
        isFetching: getIsFetching(state),
        pagesInfo: getPagesInfo(state),
        isVisible: getIsVisible(state)
    }
}

export default connect(mapStateToProps, {requestPlanets, getFiltredData, toggleIsVisible})(PlanetsContainer);