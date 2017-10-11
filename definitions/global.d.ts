import { State } from 'common';
import * as moment from 'moment';

interface ExtendedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION__: any;
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  __INITIAL_STATE__: State;
  moment: moment.Moment;
}

export interface Error {
  status?: number;
  message?: any;
}
