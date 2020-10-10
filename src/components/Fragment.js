import { useEffect } from 'react';
import { buildEvent } from '../utils';

const Fragment = ({ key, children }) => {
  useEffect(() => {
    const customEvent = new CustomEvent(buildEvent(key), {
      detail: { key }
    });

    document.body.dispatchEvent(customEvent);
  }, [key]);

  return process.env.NODE_ENV === 'development' ? children : null;
};

export { Fragment };
