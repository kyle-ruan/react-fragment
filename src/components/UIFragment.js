import { useFragment } from "../hooks";

const UIFragment = ({
  key,
  id,
  html,
  uri,
  fragmentProps = {},
  onFragmentWillMount = () => {},
  onFragmentDidMount = () => {}
}) => {
  useFragment({
    key,
    uri,
    html,
    getFragmentContainer: () => document.getElementById("id"),
    onFragmentDidMount,
    onFragmentWillMount,
    fragmentProps
  });

  return <div id={id}></div>;
};

export { UIFragment };
