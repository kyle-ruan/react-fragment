import { useCreateFragment } from './use-create-fragment';
import { useMountFragment } from './use-mount-fragment';

const useFragment = ({
  key,
  uri,
  html,
  getFragmentContainer = () => document.body,
  fragmentProps = {}
}) => {
  useCreateFragment({
    uri,
    html,
    getFragmentContainer
  });

  useMountFragment({
    key,
    fragmentProps
  });
};

export { useFragment };
