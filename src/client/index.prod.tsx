import * as React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';

import { ExtendedWindow } from '../../definitions/global';
import { INITIAL_STATE } from './constants';
import routes from './routes';
import createStore from './store/prod';

import 'react-infinite-calendar/styles.css';
import './assets/scss/main.scss';

const win: ExtendedWindow = window as ExtendedWindow;
const state = win && win.__INITIAL_STATE__ ? win.__INITIAL_STATE__ : INITIAL_STATE;
const store = createStore(state);

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
