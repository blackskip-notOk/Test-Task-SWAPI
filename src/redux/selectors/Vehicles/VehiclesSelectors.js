import moment from "moment";

export const getVehicles = state => {
    state.vehicles.vehicles.forEach((vehicle, index) => {
        vehicle.key = index;
        vehicle.created = moment(vehicle.created).format('llll');
        vehicle.edited = moment(vehicle.edited).format('llll');

    });
    return state.vehicles.vehicles;
}
export const getIsFetching = state => state.vehicles.isFetching;
export const getPagesInfo = state => {
    const count = state.vehicles.count;
    const currentPage = state.vehicles.currentPage;
    return {currentPage, count};
};