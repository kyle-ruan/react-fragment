import React from 'react';
import { Fragment } from '../components';
import { registerFragment } from '../tools';

const makeFragment = ({
  key,
  forceMount = false,
  getFragmentNode = () => document.body
} = {}) => (Component) => {
  if (!forceMount) {
    registerFragment({
      key,
      app: Component,
      getFragmentNode
    })
  }

  const FragmentizedComponent = props => {
    return (
      <Fragment name={key}>
        {forceMount ? <Component {...props} /> : <React.Fragment />}
      </Fragment>
    )
  };

  return FragmentizedComponent;
};

export { makeFragment };
