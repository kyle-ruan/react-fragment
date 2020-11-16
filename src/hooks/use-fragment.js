import { useCreateFragment } from "./use-create-fragment";
import { useMountFragment } from "./use-mount-fragment";

const useFragment = ({
  key,
  uri,
  html,
  getFragmentContainer = () => document.body,
  onFragmentWillMount = () => {},
  onFragmentDidMount = () => {},
  fragmentProps = {}
}) => {
  useMountFragment({
    key,
    fragmentProps,
    onFragmentWillMount,
    onFragmentDidMount
  });

  useCreateFragment({
    uri,
    html,
    getFragmentContainer
  });
};

export { useFragment };
