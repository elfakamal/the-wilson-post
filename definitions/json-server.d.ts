declare module 'json-server' {
  import * as Express from 'express';

  export function defaults(opts: any): Express.RequestHandler[];
  export function router(source: any, ...args: any[]): Express.Router;
  export function create(): Express.Application;
  export function rewriter(routes: any): Express.Router;
  export const bodyParser: Express.RequestHandler[];
}
