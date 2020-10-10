import { useEffect } from 'react';

const Fragment = ({ name, children }) => {
  useEffect(() => {
    const customEvent = new CustomEvent('fragment.loaded', {
      detail: { name }
    });

    document.body.dispatchEvent(customEvent);
  }, [name]);

  return process.env.NODE_ENV === 'development' ? children : null;
};

export { Fragment };
