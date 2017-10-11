import { State } from 'common';
import {
  applyMiddleware,
  compose,
  createStore,
  GenericStoreEnhancer,
} from 'redux';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';

import { ExtendedWindow } from '../../../definitions/global';
import rootEpic from '../epics';
import reducer from '../reducers';

let enhancer: GenericStoreEnhancer;
const epicMiddleware = createEpicMiddleware(rootEpic);

const hasDevtools = Boolean(
  typeof window !== 'undefined' &&
  (window as ExtendedWindow).__REDUX_DEVTOOLS_EXTENSION__ &&
  (window as ExtendedWindow).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
);

if (hasDevtools) {
  enhancer = (window as ExtendedWindow).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
    compose(applyMiddleware(epicMiddleware, createLogger())),
  );
} else {
  enhancer = compose(applyMiddleware(epicMiddleware, createLogger()));
}

export default (initialState: State) => (
  createStore<State>(reducer, initialState, enhancer)
);
