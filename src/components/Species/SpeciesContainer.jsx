import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { requestSpecies } from '../../redux/reducers/Species/SpeciesReducer';
import { getIsFetching, getSpecies, getPagesInfo } from '../../redux/selectors/Species/SpeciesSelectors';
import Preloader from '../Common/Preloader/Preloader';
import Species from './Species';

const SpeciesContainer = ({requestSpecies, pagesInfo, isFetching,
    species}) => {
    useEffect(() => {
        requestSpecies(pagesInfo.currentPage)
    }, [requestSpecies, pagesInfo.currentPage]);
    return (
        <>
        {isFetching ? <Preloader /> : null}
        <Species currentPage={pagesInfo.currentPage}
            requestSpecies={requestSpecies}
            species={species}
            count={pagesInfo.count} />
        </>
    );
}

const mapStateToProps = state => {
    return {
        species: getSpecies(state),
        isFetching: getIsFetching(state),
        pagesInfo: getPagesInfo(state)
    }
}

export default connect(mapStateToProps, {requestSpecies})(SpeciesContainer);