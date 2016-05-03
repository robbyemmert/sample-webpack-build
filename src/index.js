/**
 * Include CSS
 * -----------
 * We do this here so that we can hot-reload it later with webpack-dev-server, and for simplicity in development.
 * In production, however, this needs to be included from the HTML file as a separate css file.
 */
require('./styles/core.scss');

var person = require('./person.js');

console.log('Build loaded @ ', new Date());

console.log('hello ' + person);
