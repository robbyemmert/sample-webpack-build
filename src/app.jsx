/**
 * Include CSS
 * -----------
 * We do this here so that we can hot-reload it later with webpack-dev-server, and for simplicity in development.
 * In production, however, this needs to be included from the HTML file as a separate css file.
 */
import styles from './styles';

// JavaScript dependencies
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import store from './store';
import { routes } from './constants';
import {
    Navigator,
    HomePage
} from './containers';

render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path={routes.HOME} component={Navigator}>
                <IndexRoute component={HomePage} />
            </Route>
        </Router>
    </Provider>
), document.getElementById('react-wrapper'))
