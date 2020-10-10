import React from 'react';
import { Fragment } from '../components';

const withFragment = ({ key, autoMount = false } = {}) => (Component) => props => {
  return (
    <Fragment key={key}>
      {autoMount ? <Component {...props} /> : null}
    </Fragment>
  )
};

export { withFragment };
