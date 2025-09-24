"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FaInstagram } from "react-icons/fa";

import { HEADER_HEIGHT } from "@/lib/constants";

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showCalendly, setShowCalendly] = useState(false);

  const ivory = "#FFFFF0";
  const deepTeal = "#014D4E";
  const lavender = "#C8A2C8";
  const carmine = "#960018";

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
      {/* === Full-Page Animated Gradient === */}
      <div
  style={{
    position: "absolute",
    inset: 0,
    background: `linear-gradient(-45deg, ${ivory}, ${deepTeal}, forestgreen, ${ivory})`,
    backgroundSize: "400% 400%",
    animation: "gradientShift 18s ease-in-out infinite",
    zIndex: 0,
    pointerEvents: "none",
  }}
/>

      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* === MOBILE ONLY === */
        @media (max-width: 768px) {
          .hero-wrapper {
            justify-content: center !important;
            align-items: center !important;
            gap: 0.5rem !important;
            margin-top: 0 !important;
            margin-bottom: 0.5rem !important;
          }
          .hero-title {
            font-size: clamp(1.8rem, 6vw, 2.5rem) !important;
            letter-spacing: 0.06em !important;
            white-space: nowrap !important;
          }
          .hero-lines div {
            height: clamp(60px, 14vw, 90px) !important;
            width: clamp(4px, 1vw, 8px) !important;
          }
          .hero-subtitle {
            font-size: clamp(0.8rem, 3.5vw, 1rem) !important;
            letter-spacing: 0.12em !important;
            line-height: 1.5 !important;
            margin-top: 0.5rem !important;
            text-align: center !important;
            max-width: 40ch !important;
            white-space: normal !important;
            overflow-wrap: break-word !important;
          }
          .cta-button {
            margin-top: 1rem !important;
            font-size: clamp(0.9rem, 3.5vw, 1.1rem) !important;
            padding: 0.6rem 1rem !important; /* 75% shrink */
          }
          .copyright {
            font-size: 0.6rem !important;
            padding: 0.3rem !important;
          }
        }
      `}</style>

      <Menu ivory={ivory} />

      <main
        className="stage"
        style={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          overflow: "hidden",
        }}
      >
        <Hero ivory={ivory} setShowCalendly={setShowCalendly} />
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
        © {new Date().getFullYear()} Noesis Systems LLC. All rights reserved.
      </footer>
    </div>
  );
}

/* Hamburger Menu */
function Menu({ ivory }: any) {
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState<{ [key: string]: boolean }>({});
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleSub = (key: string) => {
    setSubOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

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
            <span style={{ width: 24, height: 2, background: "#FFFFFF" }} />
            <span style={{ width: 24, height: 2, background: "#FFFFFF" }} />
            <span style={{ width: 24, height: 2, background: "#FFFFFF" }} />
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
          <Link href="/" onClick={() => setOpen(false)} style={{ color: ivory }}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)} style={{ color: ivory }}>About</Link>
          <Link href="/noesis" onClick={() => setOpen(false)} style={{ color: ivory }}>What Does Noesis Mean?</Link>

          <div>
            <div onClick={() => toggleSub("cognitive")} style={{ cursor: "pointer", color: ivory }}>
              Cognitive Performance Coaching
            </div>
            {subOpen["cognitive"] && (
              <div style={{ marginLeft: "1rem", marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                <Link href="/services" onClick={() => setOpen(false)} style={{ color: ivory }}>Services</Link>
                <Link href="/areas" onClick={() => setOpen(false)} style={{ color: ivory }}>Transformation Pathways</Link>
                <Link href="/noesis-methods" onClick={() => setOpen(false)} style={{ color: ivory }}>The Noesis Approach</Link>
              </div>
            )}
          </div>

          <div>
            <div onClick={() => toggleSub("student")} style={{ cursor: "pointer", color: ivory }}>
              Student Success Systems
            </div>
            {subOpen["student"] && (
              <div style={{ marginLeft: "1rem", marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                <Link href="/student-services" onClick={() => setOpen(false)} style={{ color: ivory }}>Services</Link>
                <Link href="/student-areas" onClick={() => setOpen(false)} style={{ color: ivory }}>Transformation Pathways</Link>
                <Link href="/student-methods" onClick={() => setOpen(false)} style={{ color: ivory }}>The Noesis Method</Link>
              </div>
            )}
          </div>

          <Link href="/for-students" onClick={() => setOpen(false)} style={{ color: ivory }}>Insights</Link>
          <Link href="/faq" onClick={() => setOpen(false)} style={{ color: ivory }}>FAQ</Link>
          <Link href="/contact" onClick={() => setOpen(false)} style={{ color: ivory }}>Contact</Link>
        </div>
      )}
    </>
  );
}

/* Hero with corrected bounding-box breathing */
function Hero({ ivory, setShowCalendly }: any) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current && lineRef.current) {
      const title = titleRef.current;
      const line = lineRef.current;

      requestAnimationFrame(() => {
        const lineBox = line.getBoundingClientRect();
        const titleBox = title.getBoundingClientRect();

        const lineHeight = lineBox.height;
        const titleHeight = titleBox.height;

        // Travel distance = 25% of the full possible range
        const travel = (lineHeight - titleHeight) * 0.25;

        gsap.fromTo(
          title,
          { y: 0 },
          {
            y: travel,
            duration: 6,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          }
        );
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
          gap: "1rem",
          marginBottom: "2.5rem",
          marginTop: "100px",
        }}
      >
        <div
          className="hero-lines"
          style={{ display: "flex", gap: "0.3rem", alignItems: "center" }}
        >
          <div
            ref={lineRef}
            style={{
              width: "clamp(6px, 1vw, 12px)",
              height: "clamp(100px, 22vh, 200px)",
              backgroundColor: ivory,
            }}
          />
          <div
            style={{
              width: "clamp(6px, 1vw, 12px)",
              height: "clamp(100px, 22vh, 200px)",
              backgroundColor: ivory,
            }}
          />
        </div>
        <h1
          ref={titleRef}
          className="hero-title"
          style={{
            fontSize: "clamp(2rem, 6vw, 5rem)",
            fontWeight: 700,
            letterSpacing: "0.1em",
            whiteSpace: "nowrap",
            color: ivory,
          }}
        >
          NOESIS SYSTEMS
        </h1>
      </div>

      <p
        className="hero-subtitle"
        style={{
          fontSize: "clamp(1rem, 2.2vw, 1.6rem)",
          textTransform: "uppercase",
          letterSpacing: "0.18em",
          lineHeight: 1.6,
          margin: "0 auto",
          textAlign: "center",
          color: ivory,
          maxWidth: "65ch",
          overflowWrap: "break-word",
          whiteSpace: "normal",
        }}
      >
        Transform your anxieties into creative and generative energy.
      </p>

      <div style={{ marginTop: "2rem" }}>
        <button
          onClick={() => setShowCalendly(true)}
          className="cta-button"
          style={{
            display: "inline-block",
            padding: "0.9rem 1.6rem",
            borderRadius: "14px",
            background: "rgba(255, 255, 255, 0.25)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            color: "#000",
            fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
            fontFamily: "Georgia, serif",
            fontWeight: 600,
            letterSpacing: "0.05em",
            border: "none",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        >
          Book Your Free First Session
        </button>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "35px",
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            fontSize: "clamp(0.7rem, 1.2vw, 1rem)",
            letterSpacing: "0.1em",
            color: "#FFFFFF",
            fontFamily: `"Georgia", "Times New Roman", serif`,
            textAlign: "left",
          }}
        >
          Anthoni McElrath, M.A. & License in Integrative Mental Health Care.
        </div>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginLeft: "1rem" }}
        >
          <FaInstagram size={28} color={ivory} />
        </a>
      </div>
    </div>
  );
}
