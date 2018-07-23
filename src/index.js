import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import './styles/css/style.css';
import App from './components/App';

ReactDOM.render(<App />, document.querySelector('#reactContainer'));
registerServiceWorker();
