import { combineReducers } from 'redux';

import { currentRoute } from './current-route';

const rootReducer = combineReducers({
    currentRoute
});

export default rootReducer;
