import { useEffect } from "react";
import { buildEvent } from "../utils";

const Fragment = ({ name, onFragmentReady, children }) => {
  useEffect(() => {
    const customEvent = new CustomEvent(buildEvent(name));
    document.body.dispatchEvent(customEvent);
    onFragmentReady();
  }, [name]);

  return children;
};

export { Fragment };
