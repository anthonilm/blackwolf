"use client";

import { useEffect, useState } from "react";

export default function CalendlyLink() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor || "";
    setIsMobile(/android|iphone|ipad|mobile/i.test(ua));
  }, []);

  const calendlyUrl = "https://calendly.com/YOUR-USERNAME/your-event";

  return isMobile ? (
    // Mobile → open Calendly in new browser tab
    <a
      href={calendlyUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-block",
        padding: "0.8rem 1.5rem",
        borderRadius: "6px",
        background: "#0018A8",
        color: "#fff",
        fontWeight: 600,
        textDecoration: "none",
        textAlign: "center",
      }}
    >
      Book a Session
    </a>
  ) : (
    // Desktop → open Calendly modal
    <button
      onClick={() => {
        // @ts-ignore
        Calendly.initPopupWidget({ url: calendlyUrl });
      }}
      style={{
        padding: "0.8rem 1.5rem",
        borderRadius: "6px",
        background: "#0018A8",
        color: "#fff",
        fontWeight: 600,
        border: "none",
        cursor: "pointer",
      }}
    >
      Book a Session
    </button>
  );
}
