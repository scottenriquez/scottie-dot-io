import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import './styles/styles.css';
var $ = require('jquery');
window.jQuery = $;
window.$ = $;
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';

render(
	<Router history={browserHistory} routes={routes} />,
	document.getElementById('app')
);