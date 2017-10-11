import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';

import { ExtendedWindow } from '../../definitions/global';
import { INITIAL_STATE } from './constants';
import routes from './routes';
import createStore from './store/prod';

const win: ExtendedWindow = window as ExtendedWindow;
const state = win && win.__INITIAL_STATE__ ? win.__INITIAL_STATE__ : INITIAL_STATE;
const store = createStore(state);

render(
  <Provider store={store}>
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
