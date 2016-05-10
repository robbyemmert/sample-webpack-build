/**
 * Include CSS
 * -----------
 * We do this here so that we can hot-reload it later with webpack-dev-server, and for simplicity in development.
 * In production, however, this needs to be included from the HTML file as a separate css file.
 */
require('./styles/core.scss');

import Person from './person';
import ReactDOM from 'react-dom';
import React from 'react';

console.log('Build loaded @ ', new Date());

let node = document.getElementById('react-mount');
ReactDOM.render(<Person name="Robby"></Person>, node);
