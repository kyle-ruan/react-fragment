import React, { useEffect } from 'react';
import { Fragment } from '../components';
import { registerFragment } from '../tools';

const makeFragment = ({
  key,
  forceMount = false,
  getFragmentNode = () => document.body
} = {}) => (Component) => {
  const FragmentizedComponent = props => {
    useEffect(() => {
      if (!forceMount) {
        registerFragment({
          key,
          app: Component,
          props,
          getFragmentNode
        })
      }
    }, [forceMount]);

    return (
      <Fragment name={key}>
        {forceMount ? <Component {...props} /> : <React.Fragment />}
      </Fragment>
    )
  };

  return FragmentizedComponent;
};

export { makeFragment };
