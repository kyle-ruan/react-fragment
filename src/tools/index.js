import React from 'react';
import ReactDOM from 'react-dom';

const registerFragment = ({
  key,
  app,
  props = {},
  getFragmentNode = () => document.body
}) => {
  window.fragments = {
    ...(window.fragments || {}),
    [key]: (injectedProps = {}) => {
      const element = getFragmentNode();

      ReactDOM.render(React.createElement(app, { ...props, ...injectedProps }), element)

      return () => ReactDOM.unmountComponentAtNode(element)
    }
  }
}

export { registerFragment };
