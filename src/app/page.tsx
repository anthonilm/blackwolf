"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FaInstagram, FaTwitter } from "react-icons/fa";

export const HEADER_HEIGHT = 80;

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showCalendly, setShowCalendly] = useState(false);

  const taupe = "#7A6C61";
  const yvesBlue = "#0018A8";
  const carmine = "#960018";
  const ivory = "#FFFFF0";

  return (
    <div
      ref={containerRef}
      style={{
        height: "100vh",
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
        fontFamily: `"Georgia", "Times New Roman", serif`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Liquid overlay */}
      <div
        className="liquid-overlay"
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at 20% 20%, ${yvesBlue}30, transparent 70%),
                       radial-gradient(circle at 80% 40%, ${carmine}30, transparent 70%),
                       radial-gradient(circle at 50% 80%, #FFFFFF40, transparent 70%)`,
          backgroundSize: "200% 200%",
          animation: "liquidMove 4s ease-in-out infinite alternate",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <style>{`
        @keyframes liquidMove {
          0% { background-position: 0% 0%, 100% 50%, 50% 100%; opacity: 0.9; }
          100% { background-position: 100% 100%, 0% 50%, 50% 0%; opacity: 1; }
        }

        /* === MOBILE ONLY === */
        @media (max-width: 768px) {
          .hero-wrapper {
            justify-content: center !important;
            align-items: center !important;
            gap: 0.5rem !important;
            margin-bottom: 1rem !important;
          }
          .hero-title {
            font-size: clamp(1rem, 4.2vw, 1.8rem) !important;
            letter-spacing: 0.06em !important;
            white-space: nowrap !important;
          }
          .hero-lines div {
            height: clamp(60px, 14vw, 90px) !important;
            width: clamp(5px, 1vw, 7px) !important;
          }
          .hero-subtitle {
            font-size: clamp(0.7rem, 3vw, 0.9rem) !important;
            letter-spacing: 0.12em !important;
            line-height: 1.3 !important;
            max-width: 90% !important;
            margin-top: 0.5rem !important;
            white-space: normal !important;
          }
          .cta-button {
            margin-top: 1rem !important;
            font-size: clamp(0.9rem, 3.5vw, 1.1rem) !important;
            padding: 0.8rem 1.4rem !important;
          }
          .copyright {
            font-size: 0.6rem !important;
            padding: 0.3rem !important;
          }
        }
      `}</style>

      <Menu yvesBlue={yvesBlue} ivory={ivory} />

      <main
        className="stage"
        style={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          overflow: "hidden",
        }}
      >
        <Hero
          taupe={taupe}
          carmine={carmine}
          yvesBlue={yvesBlue}
          ivory={ivory}
          setShowCalendly={setShowCalendly}
        />
      </main>

      {showCalendly && (
        <section
          style={{
            position: "absolute",
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
                background: yvesBlue,
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

      <footer
        className="copyright"
        style={{
          background: "rgba(0,0,0,0.2)",
          color: ivory,
          textAlign: "center",
          padding: "0.4rem",
          fontSize: "0.7rem",
          letterSpacing: "0.05em",
          zIndex: 1500,
          position: "relative",
        }}
      >
        © {new Date().getFullYear()} Noesis Mental Health Care. All rights reserved.
      </footer>
    </div>
  );
}

function Menu({ yvesBlue, ivory }: any) {
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
      <div style={{ position: "fixed", top: 20, left: 20, zIndex: 1100 }}>
        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          style={{
            width: 40,
            height: 40,
            background: "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            border: "none",
            padding: 0,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ width: 24, height: 2, background: ivory }} />
            <span style={{ width: 24, height: 2, background: ivory }} />
            <span style={{ width: 24, height: 2, background: ivory }} />
          </div>
        </button>
      </div>

      {open && (
        <div
          ref={menuRef}
          style={{
            position: "fixed",
            top: 70,
            left: 20,
            minWidth: "240px",
            background: "rgba(223, 245, 225, 0.25)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            padding: "1.5rem 2rem",
            borderRadius: "14px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem",
          }}
        >
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/noesis-methods", label: "How I Work" },
            { href: "/areas", label: "Areas I Help With" },
            { href: "/services", label: "Services" },
            { href: "/for-students", label: "Resources" },
            { href: "/contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                color: yvesBlue,
                fontWeight: 500,
                fontSize: "1.1rem",
                letterSpacing: "0.05em",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

function Hero({ taupe, carmine, yvesBlue, ivory, setShowCalendly }: any) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (titleRef.current && subtitleRef.current) {
      gsap.to([titleRef.current, subtitleRef.current], {
        y: -10,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }
  }, []);

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 4rem",
        color: "#333",
        position: "relative",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <div
        className="hero-wrapper"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.8rem",
          marginBottom: "2rem",
          marginTop: "80px",
        }}
      >
        <div className="hero-lines" style={{ display: "flex", gap: "0.25rem", alignItems: "center" }}>
          <div style={{ width: "8px", height: "120px", backgroundColor: yvesBlue }} />
          <div style={{ width: "8px", height: "120px", backgroundColor: yvesBlue }} />
        </div>
        <h1
          ref={titleRef}
          className="hero-title"
          style={{
            fontSize: "3.2rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            whiteSpace: "nowrap",
          }}
        >
          NOESIS MENTAL HEALTH CARE
        </h1>
      </div>
      <p
        ref={subtitleRef}
        className="hero-subtitle"
        style={{
          fontSize: "1.4rem",
          textTransform: "uppercase",
          letterSpacing: "0.2em",
          lineHeight: 1.6,
          maxWidth: "700px",
          color: taupe,
        }}
      >
        Transforming anxieties into clarity, momentum, and creative flow.
      </p>

      <div style={{ marginTop: "1.5rem" }}>
        <button
          onClick={() => setShowCalendly(true)}
          className="cta-button"
          style={{
            display: "inline-block",
            padding: "1.2rem 2.4rem",
            borderRadius: "14px",
            background: "rgba(255, 255, 255, 0.25)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            color: "#000",
            fontSize: "1.3rem",
            fontFamily: "Georgia, serif",
            fontWeight: 600,
            letterSpacing: "0.05em",
            border: "none",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.background = "rgba(255, 255, 255, 0.45)")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.background = "rgba(255, 255, 255, 0.25)")
          }
        >
          Book Free First 1:1 Session
        </button>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "35px", // moved up ~5mm
          right: 20,
          display: "flex",
          gap: "1rem",
        }}
      >
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={28} color={ivory} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={28} color={ivory} />
        </a>
      </div>
    </div>
  );
}
