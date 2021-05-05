import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { requestPlanets } from '../../redux/reducers/Planets/PlanetsReducer';
import { getIsFetching, getPlanets, getPagesInfo } from '../../redux/selectors/Planets/PlanetsSelectors';
import Preloader from '../Common/Preloader/Preloader';
import Planets from './Planets';

const PlanetsContainer = ({requestPlanets, pagesInfo, isFetching,
    planets}) => {
    useEffect(() => {
        requestPlanets(pagesInfo.currentPage, pagesInfo.pageSize);
    }, [pagesInfo.currentPage, pagesInfo.pageSize, requestPlanets]);
    return (
        <>
        {isFetching ? <Preloader /> : null}
        <Planets currentPage={pagesInfo.currentPage}
            portionSize={pagesInfo.portionSize}
            requestPlanets={requestPlanets}
            pageSize={pagesInfo.pageSize}
            planets={planets}
            pages={pagesInfo.pages}
            portionCount={pagesInfo.portionCount}
            count={pagesInfo.count} />
        </>
    );
}

const mapStateToProps = state => {
    return {
        planets: getPlanets(state),
        isFetching: getIsFetching(state),
        pagesInfo: getPagesInfo(state)
    }
}

export default connect(mapStateToProps, {requestPlanets})(PlanetsContainer);