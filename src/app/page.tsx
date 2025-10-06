"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FaInstagram } from "react-icons/fa";

export default function Page() {
  const [showCalendly, setShowCalendly] = useState(false);
  const mocha = "#3B2F2F"; // Mocha tone
  const ivory = "#FFFFF0";
  const carmine = "#960018";

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        fontFamily: `"Georgia", "Times New Roman", serif`,
        color: mocha,
      }}
    >
      {/* Background Overlay */}
      <div
        className="liquid-overlay"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/home.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          zIndex: -1,
          pointerEvents: "none",
          transform: "none",
          imageRendering: "auto",
          WebkitTransform: "translateZ(0)",
        }}
      />

      <Menu mocha={mocha} />

      <Hero mocha={mocha} setShowCalendly={setShowCalendly} />

      {showCalendly && (
        <section
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.65)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 2000,
          }}
        >
          <div
            style={{
              width: "90%",
              maxWidth: "960px",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 6px 24px rgba(0, 0, 0, 0.2)",
              background: "#fff",
              position: "relative",
            }}
          >
            <iframe
              src="https://calendly.com/tmcelrath26/noesis-consulting-1-1"
              width="100%"
              height="800"
              frameBorder="0"
              scrolling="no"
              style={{ border: "none" }}
            />
            <button
              onClick={() => setShowCalendly(false)}
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                padding: "0.6rem 1.2rem",
                fontSize: "1rem",
                fontWeight: 600,
                background: carmine,
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </section>
      )}
    </div>
  );
}

/* Menu with Mocha */
function Menu({ mocha }: any) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuRef.current) {
      if (open) {
        gsap.fromTo(
          menuRef.current,
          { y: -10, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
        );
      } else {
        gsap.to(menuRef.current, {
          y: -10,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        });
      }
    }
  }, [open]);

  return (
    <>
      <div style={{ position: "fixed", top: 10, left: 12, zIndex: 1100 }}>
        <button
          onClick={() => setOpen(!open)}
          style={{
            width: 70,
            height: 70,
            background: "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            border: "none",
            padding: 0,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
            <span style={{ width: 32, height: 3, background: mocha, borderRadius: 2 }} />
            <span style={{ width: 32, height: 3, background: mocha, borderRadius: 2 }} />
            <span style={{ width: 32, height: 3, background: mocha, borderRadius: 2 }} />
          </div>
        </button>
      </div>

      {open && (
        <div
          ref={menuRef}
          style={{
            position: "fixed",
            top: 80,
            left: 12,
            minWidth: "260px",
            background: "rgba(255,255,240,0.95)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            padding: "1.5rem 2rem",
            borderRadius: "14px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem",
            alignItems: "center",
          }}
        >
          <h3
            style={{
              color: mocha,
              fontSize: "1.4rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              marginBottom: "0.8rem",
            }}
          >
            Noesis Systems LLC
          </h3>

          <div
            style={{
              width: "100%",
              height: "1px",
              background: "rgba(0,0,0,0.15)",
              marginBottom: "1rem",
            }}
          />

          {[
            { href: "/", label: "Home" },
            { href: "/services", label: "Mental Health Services" },
            { href: "/areas", label: "Areas I Help You Overcome" },
            { href: "/noesis-methods", label: "The Noesis Approach" },
            { href: "/about", label: "About Anthoni" },
            { href: "/for-students", label: "Insights" },
            { href: "/faq", label: "FAQ" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} style={{ color: mocha }}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

/* Hero with Mocha Text */
function Hero({ mocha, setShowCalendly }: any) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(1.6rem, 6vw, 4rem)",
          fontWeight: 700,
          letterSpacing: "0.08em",
          color: mocha,
          lineHeight: 1.2,
          marginBottom: "1.2rem",
          wordBreak: "break-word",
        }}
      >
        NOESIS MENTAL HEALTH CARE
      </h1>

      <p
        style={{
          fontSize: "clamp(0.9rem, 3.5vw, 1.3rem)",
          letterSpacing: "0.12em",
          lineHeight: 1.5,
          margin: "0 auto 1.8rem",
          color: mocha,
          maxWidth: "90%",
        }}
      >
        Transform anxiety into creative and generative clarity.
      </p>

      <button
        onClick={() => setShowCalendly(true)}
        style={{
          padding: "0.8rem 1.4rem",
          borderRadius: "12px",
          background: "rgba(255,255,255,0.25)",
          backdropFilter: "blur(8px)",
          color: mocha,
          fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
          fontWeight: 600,
          border: "none",
          cursor: "pointer",
          transition: "0.3s",
        }}
      >
        Book Your Free Consultation
      </button>

      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "absolute",
          bottom: "48px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <FaInstagram size={22} color={mocha} style={{ opacity: 0.85 }} />
      </a>

      <div
        style={{
          position: "absolute",
          bottom: "16px",
          left: 0,
          right: 0,
          color: mocha,
          fontSize: "0.7rem",
          letterSpacing: "0.04em",
          textAlign: "center",
          opacity: 0.9,
        }}
      >
        © {new Date().getFullYear()} Noesis Systems LLC. All rights reserved.
      </div>
    </div>
  );
}
