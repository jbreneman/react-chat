import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { changeFavicon } from './util/change-favicon';
import 'normalize.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

changeFavicon('icons/blue-icon.png');
document.addEventListener('visibilitychange', (e) => {
	if (!document.hidden) {
		changeFavicon('icons/blue-icon.png');
	}
}, false);
