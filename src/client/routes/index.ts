import App from '../containers/App';
import Home from '../containers/Home';
import Scheduler from '../containers/Scheduler';
import NotFound from './NotFound';

export default [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        path: '/schedule-post',
        exact: true,
        component: Scheduler,
      },
      {
        path: '*',
        component: NotFound,
      },
    ],
  },
];
