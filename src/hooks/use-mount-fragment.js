import { get } from 'lodash/get';
import { useEffect } from 'react';
import { buildEvent } from '../utils';

const useMountFragment = ({
  key,
  fragmentProps = {},
  onFragmentWillMount = () => {},
  onFragmentDidMount = () => {}
}) => {
  const mount = get(window, `fragments.${key}`);

  useEffect(() => {
    if (!mount) {
      return;
    }
    const render = document.body.addEventListener(buildEvent(key), () => {
      onFragmentWillMount();
      mount(fragmentProps);
      onFragmentDidMount();
    });

    return () => {
      document.body.removeEventListener(buildEvent(key), render);
    };
  }, [!!mount]);
};

export { useMountFragment };
