import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import reducers from '../reducers';

let store = applyMiddleware(thunkMiddleware)(createStore)(reducers);

export default store;
