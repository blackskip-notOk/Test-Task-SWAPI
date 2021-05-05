import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { requestVehicles } from '../../redux/reducers/Vehicles/VehiclesReducer';
import { getIsFetching, getVehicles, getPagesInfo } from '../../redux/selectors/Vehicles/VehiclesSelectors';
import Preloader from '../Common/Preloader/Preloader';
import Vehicles from './Vehicles';

const VehiclesContainer = ({requestVehicles, pagesInfo, isFetching,
    vehicles}) => {
    useEffect(() => {
        requestVehicles(pagesInfo.currentPage)
    }, [requestVehicles, pagesInfo.currentPage]);
    return (
        <>
        {isFetching ? <Preloader /> : null}
        <Vehicles currentPage={pagesInfo.currentPage}
            requestVehicles={requestVehicles}
            vehicles={vehicles}
            count={pagesInfo.count} />
        </>
    );
}

const mapStateToProps = state => {
    return {
        vehicles: getVehicles(state),
        isFetching: getIsFetching(state),
        pagesInfo: getPagesInfo(state)
    }
}

export default connect(mapStateToProps, {requestVehicles})(VehiclesContainer);