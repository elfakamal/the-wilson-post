import * as React from 'react';

import Status from './Status';

export default (): JSX.Element => (
  <Status status={404}>
    <div>Not found</div>
  </Status>
);
