import { useEffect } from 'react';
import { buildEvent } from '../utils';

const useMountFragment = ({
  key,
  fragmentProps = {}
}) => {
  useEffect(() => {
    const render = document.body.addEventListener(buildEvent(key), ({ detail: { key } }) => {
      window.fragments[key](fragmentProps);
    });

    return () => {
      document.body.removeEventListener(buildEvent(key), render);
    };
  }, []);
};

export { useMountFragment };
