import axios from "axios";
import { useEffect } from "react";

const createFragment = (htmlContent, el) => {
  /* eslint-disable no-useless-escape */
  const parsedHtml = htmlContent.replace(
    new RegExp("</script>", "g"),
    "</script>"
  );
  const documentRange = document.createRange();
  documentRange.setStart(el, 0);

  return documentRange.createContextualFragment(parsedHtml);
};

const useCreateFragment = ({ uri, html, getFragmentContainer }) => {
  useEffect(() => {
    const getHtml = async () => {
      if (html) {
        return html;
      }

      const { data } = await axios.get(uri);

      return data;
    };

    const appendHtml = async () => {
      const body = await getHtml();
      const el = getFragmentContainer();
      const fragment = createFragment(body, el);
      el.appendChild(fragment);
    };

    appendHtml();
  }, []);
};

export { useCreateFragment };
