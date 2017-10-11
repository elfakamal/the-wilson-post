import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as morgan from 'morgan';
import * as path from 'path';
import * as serveStatic from 'serve-static';

import api from './api';
import handler404 from './middlewares/404';
import handler500 from './middlewares/500';
import routes from './routes';

const publicPath = path.join(__dirname, '..', '..', 'public');
const templatesPath = path.join(__dirname, 'templates');
const port = 9001;
const app = express();

app.set('views', templatesPath);
app.set('view engine', 'ejs');
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/static', serveStatic(publicPath));
app.use('/api', api);
app.use('/', routes);

// error handlers
app.use(handler500(app.get('env')));
app.use(handler404);

app.listen(port, (error: any) => {
  if (error) {
    console.error(error);
  } else {
    // tslint:disable-next-line:max-line-length
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
  }
});
