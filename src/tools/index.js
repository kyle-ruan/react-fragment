import React from 'react';
import ReactDOM from 'react-dom';

const registerFragment = ({
  key,
  app,
  props = {},
  getFragmentNode = () => document.body
}) => {
  if (!window.fragments) {
    window.fragments = {};
  }

  if (window.fragments[key]) {
    return;
  }

  window.fragments[key] = (injectedProps = {}) => {
    const element = getFragmentNode();

    ReactDOM.render(React.createElement(app, { ...props, ...injectedProps }), element)

    return () => ReactDOM.unmountComponentAtNode(element)
  };
}

export { registerFragment };
