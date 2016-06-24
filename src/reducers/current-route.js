import { reduxActions } from '../constants';

export function currentRoute(state = '', action) {
    switch (action.type) {
        case reduxActions.SET_APP_ROUTE:
            return action.route;
        default:
            return state;
    }
}
