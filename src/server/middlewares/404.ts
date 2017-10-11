import * as Express from 'express';

/**
 * Catch 404 and forward to error handler
 */
// tslint:disable-next-line:variable-name
export default (_req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
  const err: any = new Error('Not Found');
  err.status = 404;
  res.status(404);
  next(err);
};
