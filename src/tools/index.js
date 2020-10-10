import React from 'react';
import ReactDOM from 'react-dom';

const registerFragment = ({
  key,
  app,
  props = {},
  getFragmentContainer = () => document.getElementById('root')
}) => {
  window.fragments = {
    ...(window.fragments || {}),
    [key]: (injectedProps = {}) => {
      const element = getFragmentContainer();

      ReactDOM.render(React.createElement(app, { ...props, ...injectedProps }), element)

      return () => ReactDOM.unmountComponentAtNode(element)
    }
  }
}

export { registerFragment };
