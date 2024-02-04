"use client";

import Script from "next/script";

const MicrosoftClarity = () => {
  // Check if the window object is available (running in the browser)
  if (typeof window !== "undefined") {
    // Execute the Clarity script
    (function (c, l, a, r, i, t, y) {
      c[a] =
        c[a] ||
        function () {
          (c[a].q = c[a].q || []).push(arguments);
        };
      t = l.createElement(r);
      t.async = 1;
      t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", "kwlbduguj4");
  }

  // Return null (or any other component structure) since you are not rendering anything
  return null;
};

export default MicrosoftClarity;
