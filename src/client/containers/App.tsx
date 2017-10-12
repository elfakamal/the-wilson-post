import * as React from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';

import Header from '../components/Header';

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
