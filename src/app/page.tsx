"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FaInstagram, FaTwitter } from "react-icons/fa";

export const HEADER_HEIGHT = 80;

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);

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
        gridTemplateRows: "auto 1fr",
        fontFamily: `"Georgia", "Times New Roman", serif`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Liquid overlay */}
      <div
  className="liquid-overlay"
  style={{
    position: "absolute",   // instead of fixed
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
        <Hero taupe={taupe} carmine={carmine} yvesBlue={yvesBlue} ivory={ivory} />
      </main>
    </div>
  );
}

/* Enlarged, Softer Dropdown Menu */
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
      {/* Hamburger Button */}
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

      {/* Dropdown Menu */}
      {open && (
        <div
          ref={menuRef}
          style={{
            position: "fixed",
            top: 70,
            left: 20,
            minWidth: "240px", // wider menu
            background: "rgba(223, 245, 225, 0.25)", // soft transparent green
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            padding: "1.5rem 2rem",
            borderRadius: "14px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem", // more breathing space
          }}
        >
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/newsletter", label: "Insights" },
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
                fontWeight: 500, // softer
                fontSize: "1.1rem", // slightly larger
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

function Hero({ taupe, carmine, yvesBlue, ivory }: any) {
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
      {/* Hero content */}
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "2rem", marginTop: "80px" }}>
        <div style={{ display: "flex", gap: "0.4rem" }}>
          <div style={{ width: "15px", height: "140px", backgroundColor: yvesBlue }} />
          <div style={{ width: "15px", height: "140px", backgroundColor: yvesBlue }} />
        </div>
        <h1
          ref={titleRef}
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
        style={{
          fontSize: "1.4rem",
          textTransform: "uppercase",
          letterSpacing: "0.2em",
          lineHeight: 1.6,
          maxWidth: "700px",
          color: taupe,
        }}
      >
        Transforming anxities into clarity, momentum, and creative flow.
      </p>

      {/* Social icons bottom-right */}
      <div style={{ position: "absolute", bottom: 20, right: 20, display: "flex", gap: "1rem" }}>
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
