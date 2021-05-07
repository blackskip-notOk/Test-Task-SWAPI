import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { requestFilms } from '../../redux/reducers/Films/FilmsReducer';
import { getIsFetching, getFilms } from '../../redux/selectors/Films/FilmsSelector';
import Preloader from '../Common/Preloader/Preloader';
import Films from './Films';

const FilmsContainer = ({requestFilms, isFetching, films}) => {
    useEffect(() => {requestFilms()}, [requestFilms]);
    return (
        <>
        {isFetching ? <Preloader /> : null}
        <Films requestFilms={requestFilms}
            films={films} />
        </>
    );
}

const mapStateToProps = state => {
    return {
        films: getFilms(state),
        isFetching: getIsFetching(state),
    }
}

export default connect(mapStateToProps, {requestFilms})(FilmsContainer);