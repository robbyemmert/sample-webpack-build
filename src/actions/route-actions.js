import { reduxActions } from '../constants';

export default class RouteActions {
    static setAppRoute(route) {
        return {
            type: reduxActions.SET_APP_ROUTE,
            route
        }
    }
}
