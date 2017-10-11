import * as React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';

interface Props {
  status?: number;
  children?: React.ReactNode;
}

export default ({ status, children }: Props) => (
  <Route render={({ staticContext }: RouteComponentProps<any>) => {
    if (staticContext) {
      staticContext.status = status;
    }

    return children;
  }} />
);
