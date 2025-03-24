import { useEffect } from "react";

const TawkToChat = () => {
  useEffect(() => {
    //var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/5e0843e027773e0d832b0ce7/default"; // Replace with your actual Tawk.to widget script
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  return null; // No visible UI element, it's injected into the page
};

export default TawkToChat;
