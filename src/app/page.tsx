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
  const lavender = "#C8A2C8";
  const carmine = "#960018";

  return (
    <div
      ref={containerRef}
      className="hero-fullheight"
      style={{
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
        fontFamily: `"Georgia", "Times New Roman", serif`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* === Full-Page Animated Gradient (fixed across mobile + desktop) === */}
      <div className="gradient-bg" />
<style>{`
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .gradient-bg,
  .hero-fullheight {
    min-height: 100vh;
    height: 100dvh;
    height: -webkit-fill-available;
  }

  .gradient-bg {
    position: fixed;
    inset: 0;
    width: 100%;
    background: linear-gradient(
      -30deg,
      ${ivory},
      #E6E6FA,       /* lavender */
      
      #014d4e,       /* deep teal */
      #E6E6FA,
      ${ivory}
    );
    background-size: 400% 400%;
    animation: gradientShift 40s ease-in-out infinite;
    z-index: 0;
    pointer-events: none;
    background-attachment: fixed;
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
      font-size: clamp(1rem, 3.5vw, 1.8rem) !important;
      letter-spacing: 0.04em !important;
      white-space: nowrap !important;   /* force single line */
      max-width: 95vw !important;       /* fit viewport */
      overflow: hidden !important;
      text-overflow: ellipsis !important;
    }
    .hero-lines div {
      height: clamp(60px, 14vw, 90px) !important;
      width: clamp(4px, 1vw, 8px) !important;
    }
    .hero-subtitle {
      font-size: clamp(0.75rem, 2.8vw, 1rem) !important;
      letter-spacing: 0.1em !important;
      line-height: 1.4 !important;
      margin-top: 0.5rem !important;
      text-align: center !important;
      white-space: normal !important;   /* allow wrapping */
      text-wrap: balance !important;
      hyphens: auto !important;
      max-width: 32ch !important;       /* keeps text readable */
    }
    .cta-button {
      margin-top: 1rem !important;
      font-size: clamp(0.9rem, 3.5vw, 1.1rem) !important;
      padding: 0.6rem 1rem !important;
    }
    .copyright {
      font-size: 0.6rem !important;
      padding: 0.3rem !important;
    }

    /* === MOBILE GRADIENT OVERRIDE === */
    .gradient-bg {
      background: linear-gradient(
        -65deg,
        ${ivory},
        #E6E6FA,       /* lavender */
      
        #014d4e,       /* deep teal */
        #E6E6FA,
        ${ivory}
      );
      background-size: 400% 400%;
    }
  }

  /* === ADDITIONS === */

  /* Fix Safari text auto-zoom */
  html { -webkit-text-size-adjust: 100%; }

  /* === TABLET ONLY (iPad Safari + similar widths) === */
  @media (min-width: 768px) and (max-width: 1180px) {
    .hero-title {
      white-space: normal !important;   /* allow wrapping */
      text-wrap: balance !important;
      font-size: clamp(1.6rem, 4vw, 3rem) !important;
      line-height: 1.15 !important;
      max-width: 92vw !important;
      margin: 0 auto !important;
      text-align: center !important;
    }

    .hero-lines div {
      height: clamp(80px, 14vh, 140px) !important;
      width: clamp(4px, 0.6vw, 8px) !important;
    }

    .hero-subtitle {
      font-size: clamp(0.9rem, 2.2vw, 1.2rem) !important;
      line-height: 1.4 !important;
      max-width: 40ch !important;
      margin: 0.5rem auto 0 auto !important;
      text-align: center !important;
      text-wrap: balance !important;
    }
  }

  /* === DESKTOP SUBTITLE FIX === */
  @media (min-width: 1181px) {
    .hero-subtitle {
      max-width: 42ch !important;
      margin: 0.5rem auto 0 auto !important;
      text-align: center !important;
      text-wrap: balance !important;
      line-height: 1.4 !important;
    }
      /* === MOBILE ONLY === */
@media (max-width: 768px) {
  .hero-subtitle {
    font-size: clamp(0.75rem, 2.8vw, 1rem) !important;
    letter-spacing: 0.1em !important;
    line-height: 1.4 !important;
    margin-top: 0.5rem !important;
    text-align: center !important;

    white-space: nowrap !important;
    text-wrap: unset !important;
    max-width: none !important;
    overflow: visible !important;
  }
}

/* === TABLET ONLY === */
@media (min-width: 768px) and (max-width: 1180px) {
  .hero-subtitle {
    font-size: clamp(0.9rem, 2.2vw, 1.2rem) !important;
    line-height: 1.4 !important;
    margin: 0.5rem auto 0 auto !important;
    text-align: center !important;

    white-space: nowrap !important;
    text-wrap: unset !important;
    max-width: none !important;
    overflow: visible !important;
  }
}

/* === DESKTOP === */
@media (min-width: 1181px) {
  .hero-subtitle {
    font-size: clamp(1rem, 2.2vw, 1.6rem) !important;
    line-height: 1.4 !important;
    margin: 0.5rem auto 0 auto !important;
    text-align: center !important;

    white-space: nowrap !important;
    text-wrap: unset !important;
    max-width: none !important;
    overflow: visible !important;
  }
}
  /* === TABLET ONLY === */
@media (min-width: 768px) and (max-width: 1180px) {
  .hero-subtitle {
    font-size: clamp(0.9rem, 2.2vw, 1.2rem) !important;
    line-height: 1.4 !important;
    margin: 0.5rem auto 0 auto !important;
    text-align: center !important;

    white-space: nowrap !important;   /* lock single line */
    text-wrap: unset !important;      /* disable balanced wrapping */
    max-width: none !important;       /* remove width limits */
    overflow: visible !important;     /* show full text */
  }
}

  }
`}</style>


      <Menu  />

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
function Menu() {
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState<{ [key: string]: boolean }>({});
  const menuRef = useRef<HTMLDivElement>(null);

  const yvesBlue = "#0018A8";

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
      <div style={{ position: "fixed", top: 8, left: 8, zIndex: 1100 }}>
        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          style={{
            width: 50,
            height: 50,
            background: "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            border: "none",
            padding: 0,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <span style={{ width: 22, height: 2, background: yvesBlue }} />
            <span style={{ width: 22, height: 2, background: yvesBlue }} />
            <span style={{ width: 22, height: 2, background: yvesBlue }} />
          </div>
        </button>
      </div>

      {open && (
        <div
          ref={menuRef}
          style={{
            position: "fixed",
            top: 60,
            left: 8,
            minWidth: "260px",
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
          <Link href="/" onClick={() => setOpen(false)} style={{ color: yvesBlue }}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)} style={{ color: yvesBlue }}>About</Link>
          <Link href="/noesis" onClick={() => setOpen(false)} style={{ color: yvesBlue }}>What Does Noesis Mean?</Link>
          <Link href="/services" onClick={() => setOpen(false)} style={{ color: yvesBlue }}>
  Services
</Link>
<Link href="/areas" onClick={() => setOpen(false)} style={{ color: yvesBlue }}>
  Transformation Pathways
</Link>
<Link href="/noesis-methods" onClick={() => setOpen(false)} style={{ color: yvesBlue }}>
  The Noesis Approach
</Link>

      

          <div>
            <div onClick={() => toggleSub("student")} style={{ cursor: "pointer", color: yvesBlue }}>
              Student Success Systems
            </div>
            {subOpen["student"] && (
              <div style={{ marginLeft: "1rem", marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                <Link href="/student-services" onClick={() => setOpen(false)} style={{ color: yvesBlue }}>Services</Link>
                <Link href="/student-areas" onClick={() => setOpen(false)} style={{ color: yvesBlue }}>Transformation Pathways</Link>
                <Link href="/student-methods" onClick={() => setOpen(false)} style={{ color: yvesBlue }}>The Noesis Method</Link>
              </div>
            )}
          </div>

          <Link href="/for-students" onClick={() => setOpen(false)} style={{ color: yvesBlue }}>Insights</Link>
          <Link href="/faq" onClick={() => setOpen(false)} style={{ color: yvesBlue }}>FAQ</Link>
          <Link href="/contact" onClick={() => setOpen(false)} style={{ color: yvesBlue }}>Contact</Link>
        </div>
      )}
    </>
  );
}


/* Hero with corrected bounding-box breathing */
function Hero({ ivory, setShowCalendly }: any) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="hero-fullheight"
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 4rem",
        position: "relative",
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
          NOESIS MENTAL HEALTH CARE
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
    whiteSpace: "nowrap",   // single line
    overflow: "visible",    // allow full render
    maxWidth: "none",       // prevent clipping
  }}
>
  When thoughts collide and emotions swell, here is calm.
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
        </div>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginLeft: "1rem" }}
        >
        </a>
      </div>
    </div>
  );
}
