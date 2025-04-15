"use client";
import { useEffect } from "react";

const CookieConsent = () => {
  useEffect(() => {
    const cookieBotWrapper = document.getElementById("CookiebotWrapper");
    if (cookieBotWrapper) {
      const script = document.createElement("script");
      script.id = "CookieDeclaration";
      script.type = "text/javascript";
      script.async = true;
      script.src =
        "https://consent.cookiebot.com/f0b408f9-fc36-4ef5-8a70-d0b6aad1b45f/cd.js";

      cookieBotWrapper.appendChild(script);
    }
  }, []);

  return (
    <div id="CookiebotWrapper" className="container px-4 pt-10 py-8"></div>
  );
};

export default CookieConsent;
