import { useEffect } from 'react';
import { buildEvent } from '../utils';

const useMountFragment = ({
  key,
  fragmentProps = {},
  onFragmentWillMount = () => {},
  onFragmentDidMount = () => {}
}) => {
  useEffect(() => {
    const render = document.body.addEventListener(buildEvent(key), () => {
      onFragmentWillMount();
      window.fragments[key](fragmentProps);
      onFragmentDidMount();
    });

    return () => {
      document.body.removeEventListener(buildEvent(key), render);
    };
  }, []);
};

export { useMountFragment };
