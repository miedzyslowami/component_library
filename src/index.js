import React from 'react';
import ReactDOM from 'react-dom';
import './../node_modules/highlight.js/styles/atom-one-dark.css';
import Docs from './docs/Docs';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Docs />, document.getElementById('root'));
registerServiceWorker();
