import * as React from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';
import { Link } from 'react-router-dom';

interface Props {
  route?: RouteConfig;
}

export default class App extends React.Component<Props, object> {
  render() {
    const { route } = this.props;

    return (
      <div className="wilson-post-app">
        <nav>
          <h1>The Wilson Post</h1>
          <div className="wilson-post-app-navigation">
            <Link to="/">Home</Link>
            {' '}
            <Link to="/schedule-post">Schedule a post</Link>
          </div>
        </nav>
        {route && renderRoutes(route.routes)}
      </div>
    );
  }
}
