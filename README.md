# 🎁  React UI Fragment

A set of hoc and hook utilities to implement Micro Frontend in React.

## Installation
```
# via yarn
$ yarn add react-ui-fragment

# via npm
$ npm install react-ui-fragment --save
```

## Usage

### Fragment App
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { makeFragment } from 'react-ui-fragment';
import App from './App';

const FragmentizedApp = makeFragment({
  key: '[fragment-name]',
  forceMount: true | false, // set to true if fragment doesn't live under a shell app
  getFragmentNode: () => document.getElementById('root')
})(App);

ReactDOM.render(<FragmentizedApp />, document.getElementById('root'));
```

### Shell App
```javascript
import React from 'react';
import { useFragment } from 'react-ui-fragment';

const Fragment = () => {
  useFragment({
    key: '[fragment-name]',
    html: '[raw html snippet of fragment app]',
    uri: '[url of fragment app, required if html is not provided]',
    getFragmentContainer: () => document.getElementById('fragment-container'),
    fragmentProps: {
      header: 'Fragment App',
      // other props
    }
  });
  return <div id="fragment-container"></div>;
};
```