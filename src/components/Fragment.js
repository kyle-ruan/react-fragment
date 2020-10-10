import { useEffect } from 'react';
import { buildEvent } from '../utils';

const Fragment = ({ name, children }) => {
  useEffect(() => {
    const customEvent = new CustomEvent(buildEvent(name));

    document.body.dispatchEvent(customEvent);
  }, [name]);

  return children;
};

export { Fragment };
