import 'react-dates/initialize';

import * as React from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';

import Header from '../components/Header';

import DefaultTheme from 'react-dates/lib/theme/DefaultTheme';
import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';

ThemedStyleSheet.registerTheme({
  ...DefaultTheme,
  color: {
    ...DefaultTheme.color,
    highlighted: {
      backgroundColor: '#82E0AA',
      backgroundColor_active: '#58D68D',
      backgroundColor_hover: '#58D68D',
      color: '#186A3B',
      color_active: '#186A3B',
      color_hover: '#186A3B',
    },
  },
});

interface Props {
  route?: RouteConfig;
}

export default class App extends React.Component<Props, object> {
  render() {
    const { route } = this.props;

    return (
      <div className="wilson-post-app">
        <Header />
        {route && renderRoutes(route.routes)}
      </div>
    );
  }
}
