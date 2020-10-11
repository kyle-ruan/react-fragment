import get from 'lodash/get';
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
      const mount = get(window, `fragments.${key}`);

      if (!mount) {
        return;
      }

      onFragmentWillMount();
      mount(fragmentProps);
      onFragmentDidMount();
    });

    return () => {
      document.body.removeEventListener(buildEvent(key), render);
    };
  }, []);
};

export { useMountFragment };
