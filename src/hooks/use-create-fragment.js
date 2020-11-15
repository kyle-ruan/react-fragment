import axios from "axios";
import { useEffect, useRef } from "react";

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

const useCreateFragment = ({ uri, html }) => {
  const ref = useRef(null);

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
      const el = ref.current;
      const fragment = createFragment(body, el);
      el.appendChild(fragment);
    };

    if (ref.current) {
      appendHtml();
    }
  }, [ref.current]);

  return ref;
};

export { useCreateFragment };
