import * as Express from 'express';
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';

import routes from '../../client/routes';
import { getPosts } from '../../client/services/posts';
import createStore from '../../client/store/dev';

interface StaticRouterContext {
  status?: number;
}

export default async (req: Express.Request, res: Express.Response) => {
  const posts = await getPosts();
  const store = createStore({ posts });
  const context: StaticRouterContext = {};

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        {renderRoutes(routes)}
      </StaticRouter>
    </Provider>,
  );

  if (context.status === 404) {
    res.status(404);
  }

  res.render('index', { content, data: store.getState() });
};
