"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FaInstagram } from "react-icons/fa";

import { HEADER_HEIGHT } from "@/lib/constants";

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showCalendly, setShowCalendly] = useState(false);

  const taupe = "#7A6C61";
  const yvesBlue = "#0018A8";
  const carmine = "#960018";
  const ivory = "#FFFFF0";
  const saffron = "#F4C430";

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
             radial-gradient(circle at 50% 80%, #FFFFFF40, transparent 70%),
             radial-gradient(circle at 50% 100%, ${saffron}40, transparent 70%)`,
          backgroundSize: "200% 200%",
          animation: "liquidMove 5s ease-in-out infinite alternate",
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
            font-size: clamp(1.8rem, 6vw, 2.5rem) !important;
            letter-spacing: 0.06em !important;
            white-space: nowrap !important;
          }
          .hero-lines div {
            height: clamp(60px, 14vw, 90px) !important;
            width: clamp(4px, 1vw, 8px) !important;
          }
          @media (max-width: 768px) {
  .hero-subtitle {
    font-size: clamp(0.8rem, 3.5vw, 1rem) !important;
    letter-spacing: 0.12em !important;
    line-height: 1.5 !important;
    margin-top: 0.5rem !important;
    text-align: center !important;
    max-width: 40ch !important;   /* ✅ cap it */
    min-width: unset !important;  /* ✅ let it shrink */
    white-space: normal !important;
    overflow-wrap: break-word !important;
  }
}

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
        © {new Date().getFullYear()} Noesis Systems LLC. All rights reserved.
      </footer>
    </div>
  );
}

/* Yves Blue Hamburger Menu */
function Menu({ yvesBlue, ivory }: any) {
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
            <span style={{ width: 24, height: 2, background: yvesBlue }} />
            <span style={{ width: 24, height: 2, background: yvesBlue }} />
            <span style={{ width: 24, height: 2, background: yvesBlue }} />
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
          {/* Static */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            style={{ color: yvesBlue, fontWeight: 500, fontSize: "1.1rem" }}
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            style={{ color: yvesBlue, fontWeight: 500, fontSize: "1.1rem" }}
          >
            About
          </Link>

          {/* Cognitive Performance Coaching */}
          <div>
            <div
              onClick={() => toggleSub("cognitive")}
              style={{
                cursor: "pointer",
                color: yvesBlue,
                fontWeight: 500,
                fontSize: "1.1rem",
              }}
            >
              Cognitive Performance Coaching
            </div>
            {subOpen["cognitive"] && (
              <div
                style={{
                  marginLeft: "1rem",
                  marginTop: "0.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.8rem",
                }}
              >
                <Link
                  href="/services"
                  onClick={() => setOpen(false)}
                  style={{ color: yvesBlue, fontSize: "1rem" }}
                >
                  Services
                </Link>
                <Link
                  href="/areas"
                  onClick={() => setOpen(false)}
                  style={{ color: yvesBlue, fontSize: "1rem" }}
                >
                  Areas I Help With
                </Link>
                <Link
                  href="/noesis-methods"
                  onClick={() => setOpen(false)}
                  style={{ color: yvesBlue, fontSize: "1rem" }}
                >
                  The Noesis Approach
                </Link>
              </div>
            )}
          </div>

          {/* Student Success Systems */}
          <div>
            <div
              onClick={() => toggleSub("student")}
              style={{
                cursor: "pointer",
                color: yvesBlue,
                fontWeight: 500,
                fontSize: "1.1rem",
              }}
            >
              Student Success Systems
            </div>
            {subOpen["student"] && (
              <div
                style={{
                  marginLeft: "1rem",
                  marginTop: "0.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.8rem",
                }}
              >
                <Link
                  href="/student-services"
                  onClick={() => setOpen(false)}
                  style={{ color: yvesBlue, fontSize: "1rem" }}
                >
                  Services
                </Link>
                <Link
                  href="/student-areas"
                  onClick={() => setOpen(false)}
                  style={{ color: yvesBlue, fontSize: "1rem" }}
                >
                  Areas I Help With
                </Link>
                <Link
                  href="/student-methods"
                  onClick={() => setOpen(false)}
                  style={{ color: yvesBlue, fontSize: "1rem" }}
                >
                  The Noesis Method
                </Link>
              </div>
            )}
          </div>

          {/* Other */}
          <Link
            href="/for-students"
            onClick={() => setOpen(false)}
            style={{ color: yvesBlue, fontWeight: 500, fontSize: "1.1rem" }}
          >
            Newsletters
          </Link>
          <Link
            href="/faq"
            onClick={() => setOpen(false)}
            style={{ color: yvesBlue, fontWeight: 500, fontSize: "1.1rem" }}
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            style={{ color: yvesBlue, fontWeight: 500, fontSize: "1.1rem" }}
          >
            Contact
          </Link>
          <Link
            href="/privacy"
            onClick={() => setOpen(false)}
            style={{ color: yvesBlue, fontWeight: 500, fontSize: "1.1rem" }}
          >
            Privacy &amp; Confidentiality
          </Link>
        </div>
      )}
    </>
  );
}




function Hero({ taupe, yvesBlue, ivory, setShowCalendly }: any) {
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
      {/* Title + vertical lines */}
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
            style={{
              width: "clamp(6px, 1vw, 12px)",
              height: "clamp(100px, 22vh, 200px)",
              backgroundColor: yvesBlue,
            }}
          />
          <div
            style={{
              width: "clamp(6px, 1vw, 12px)",
              height: "clamp(100px, 22vh, 200px)",
              backgroundColor: yvesBlue,
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
          }}
        >
          NOESIS SYSTEMS
        </h1>
      </div>

      {/* Subtitle */}
      <p
        ref={subtitleRef}
        className="hero-subtitle"
        style={{
          fontSize: "clamp(1rem, 2.2vw, 1.6rem)",
          textTransform: "uppercase",
          letterSpacing: "0.18em",
          lineHeight: 1.6,
          margin: "0 auto",
          textAlign: "center",
          color: taupe,
          maxWidth: "65ch",         // desktop width cap
          overflowWrap: "break-word",
          whiteSpace: "normal",     // allow wrapping
        }}
      >
        TRANSFORM ANXIETY INTO CLARITY, CREATIVITY, AND MOMENTUM WITH AN INTEGRATIVE
        MENTAL HEALTH COACH.
      </p>

      {/* CTA */}
      <div style={{ marginTop: "2rem" }}>
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
            fontSize: "clamp(1rem, 2vw, 1.4rem)",
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
          Book Your Free First Session
        </button>
      </div>

      {/* Bottom */}
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
            color: taupe,
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
