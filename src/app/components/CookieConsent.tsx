"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const CLARITY_ID = "xpz48igvtn";
const STORAGE_KEY = "shootscan_cookie_consent";

export default function CookieConsent() {
  const [consent, setConsent] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(function () {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "accepted" || stored === "refused") {
      setConsent(stored);
    } else {
      setVisible(true);
    }
  }, []);

  function handleChoice(choice: string) {
    localStorage.setItem(STORAGE_KEY, choice);
    setConsent(choice);
    setVisible(false);
  }

  const bannerStyle = {
    position: "fixed" as const,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
    background: "#0e1713",
    borderTop: "1px solid #1e2f27",
    padding: "16px",
    display: "flex",
    flexWrap: "wrap" as const,
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    fontFamily: "Inter, sans-serif",
  };

  const textStyle = {
    color: "#8ea299",
    fontSize: "13.5px",
    margin: 0,
    maxWidth: "480px",
    lineHeight: 1.5,
  };

  const refuseStyle = {
    background: "transparent",
    border: "1px solid #1e2f27",
    color: "#8ea299",
    borderRadius: "100px",
    padding: "9px 18px",
    fontSize: "13.5px",
    fontWeight: 600,
    cursor: "pointer",
  };

  const acceptStyle = {
    background: "#00B874",
    border: "none",
    color: "#04120c",
    borderRadius: "100px",
    padding: "9px 18px",
    fontSize: "13.5px",
    fontWeight: 700,
    cursor: "pointer",
  };

  const scriptCode = "(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/'+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,'clarity','script','" + CLARITY_ID + "');";

  return (
    <div>
      {consent === "accepted" ? (
        <Script id="ms-clarity" strategy="afterInteractive">
          {scriptCode}
        </Script>
      ) : null}

      {visible ? (
        <div style={bannerStyle}>
          <p style={textStyle}>
            Ce site utilise des cookies pour ameliorer l experience utilisateur. Consulte la page confidentialite pour en savoir plus.
          </p>
          <div style={{ display: "flex", gap: "8px", flexShrink: 0 }}>
            <button style={refuseStyle} onClick={function () { handleChoice("refused"); }}>
              Refuser
            </button>
            <button style={acceptStyle} onClick={function () { handleChoice("accepted"); }}>
              Accepter
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}