import { useEffect } from 'react';

const useMountFragment = props => {
  useEffect(() => {
    const render = document.body.addEventListener('fragment.loaded', ({ detail: { name } }) => {
      window.fragments[name](props);
    });

    return () => {
      document.body.removeEventListener('fragment.loaded', render);
    };
  }, []);
};

export { useMountFragment };
