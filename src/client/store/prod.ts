import { State } from 'common';
import {
  applyMiddleware,
  compose,
  createStore,
  GenericStoreEnhancer,
} from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import rootEpic from '../epics';
import reducer from '../reducers';

const epicMiddleware = createEpicMiddleware(rootEpic);
const enhancer: GenericStoreEnhancer = compose(applyMiddleware(epicMiddleware));

export default (initialState: State) =>
  createStore<State>(reducer, initialState, enhancer);
