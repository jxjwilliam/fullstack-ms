import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'
import './index.scss';
import './vendors/material-design-icons/iconfont/material-icons.css';
import './vendors/typeface-roboto/index.css';
import App from './App';
import configureStore from './state/configureStore'
import * as serviceWorker from './serviceWorker';

const store = configureStore();
const rootElement = document.getElementById('root');

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement
  );
});

serviceWorker.unregister();
