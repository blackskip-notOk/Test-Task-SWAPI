import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { requestStarships } from '../../redux/reducers/Starships/StarshipsReducer';
import { getIsFetching, getStarships, getPagesInfo } from '../../redux/selectors/Starships/StarshipsSelectors';
import Preloader from '../Common/Preloader/Preloader';
import Starships from './Starships';

const StarshipsContainer = ({requestStarships, pagesInfo, isFetching,
    starships}) => {
    useEffect(() => {
        requestStarships(pagesInfo.currentPage)
    }, [requestStarships, pagesInfo.currentPage]);
    return (
        <>
        {isFetching ? <Preloader /> : null}
        <Starships currentPage={pagesInfo.currentPage}
            requestStarships={requestStarships}
            starships={starships}
            count={pagesInfo.count} />
        </>
    );
}

const mapStateToProps = state => {
    return {
        starships: getStarships(state),
        isFetching: getIsFetching(state),
        pagesInfo: getPagesInfo(state)
    }
}

export default connect(mapStateToProps, {requestStarships})(StarshipsContainer);