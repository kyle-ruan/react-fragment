import { useCreateFragment } from './use-create-fragment';
import { useMountFragment } from './use-mount-fragment';

const useFragment = ({
  key,
  uri,
  html,
  getFragmentContainer = () => document.body,
  onFragmentWillMount = () => {},
  onFragmentDidMount = () => {},
  fragmentProps = {}
}) => {
  useCreateFragment({
    uri,
    html,
    getFragmentContainer
  });

  useMountFragment({
    key,
    fragmentProps,
    onFragmentWillMount,
    onFragmentDidMount
  });
};

export { useFragment };
