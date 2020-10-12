import React from "react";
import { Fragment } from "../components";
import { registerFragment } from "../tools";

const makeFragment = ({
  key,
  forceMount = false,
  getFragmentNode = () => document.body,
  onFragmentReady = () => {}
} = {}) => Component => {
  if (!forceMount) {
    registerFragment({
      key,
      app: Component,
      getFragmentNode
    });
  }

  const FragmentizedComponent = props => {
    return (
      <Fragment name={key} onFragmentReady={onFragmentReady}>
        {forceMount ? <Component {...props} /> : <React.Fragment />}
      </Fragment>
    );
  };

  return FragmentizedComponent;
};

export { makeFragment };
