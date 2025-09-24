"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { usePathname } from "next/navigation";

const areasIHelpWith = [
  "Burnout and occupational stress",
  "Indecision and cognitive overload",
  "Overwhelm and boundary setting",
  "Performance anxiety",
  "Attention and concentration support",
  "Procrastination and avoidance cycles",
  "Stress and coping skills",
  "Mental stamina and cognitive fatigue",
  "Sleep and circadian health",
  "Resilience and post-stress growth",
  "Fatigue and energy regulation",
  "Adjustment to change",
  "Role transitions and identity shifts",
  "Leadership stress and imposter feelings",
  "Communication under pressure",
  "Conflict resolution and repair",
  "Cognitive flexibility and problem-solving",
  "Motivation and task initiation",
  "Recovery after setbacks",
  "Overcommitment and people-pleasing patterns",
  "Public-performance anxiety",
  "Emotion regulation and distress tolerance",
  "Values-aligned decision making",
  "Executive functioning and planning",
  "Sustaining motivation",
  "Cognitive load management",
  "Work–life boundaries and balance",
  "Processing criticism and feedback",
  "Sustainable high performance",
  "Habit change and maintenance",
];

export default function AreasPage() {
  const [showCalendly, setShowCalendly] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor || "";
    setIsMobile(/android|iphone|ipad|mobile/i.test(ua));
  }, []);

   return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        padding: "4rem 2rem",
        fontFamily: "Georgia, 'Times New Roman', serif",
        overflow: "hidden",
        background: "#A8D5D7", // lighter teal background
      }}
    >
      {/* Animated Overlay */}
      <div
        className="liquid-overlay"
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(circle at 45% 45%, #F5F0FA80 0%, transparent 60%),
            radial-gradient(circle at 55% 55%, #FFFFFF80 0%, transparent 70%),
            radial-gradient(circle at 50% 60%, #7A6C6130, transparent 75%),
            radial-gradient(circle at 50% 50%, #96001815, transparent 90%)
          `,
          backgroundSize: "200% 200%",
          animation: "liquidMove 8s ease-in-out infinite alternate",
          zIndex: -1,
          pointerEvents: "none",
        }}
      />
      <style>{`
        @keyframes liquidMove {
          0% {
            background-position: 45% 45%, 55% 55%, 50% 60%, 50% 50%;
            opacity: 0.9;
          }
          100% {
            background-position: 55% 55%, 45% 45%, 52% 48%, 48% 52%;
            opacity: 1;
          }
        }
      `}</style>

      {/* Menu */}
      <Menu />

      {/* Headline */}
      <h1
  style={{
    fontSize: "2.5rem",
    textAlign: "center",
    maxWidth: "72ch",
    margin: "0 auto",
    lineHeight: 1.2,
    color: "#FFFFFF", // white
    fontWeight: 700,
  }}
>
 Pathways to Clarity, Balance, and Performance
</h1>

      {/* Areas Section */}
      <section
        style={{
          background: "#ffffffb3",
          borderRadius: "12px",
          padding: "2rem",
          marginTop: "4rem",
          marginBottom: "4rem",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            fontFamily: "Georgia, serif",
            color: "#111111",
            textAlign: "center",
            marginBottom: "2rem",
            fontWeight: 500,
            letterSpacing: "0.5px",
          }}
        >
          
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "0.75rem 2rem",
          }}
        >
          {areasIHelpWith.map((area, idx) => (
            <div
              key={idx}
              style={{
                fontSize: "16pt",
                color: "#222222",
                borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
                paddingBottom: "0.4rem",
                letterSpacing: "0.2px",
                lineHeight: 1.6,
              }}
            >
              {area}
            </div>
          ))}
        </div>
      </section>

      {/* Calendly Button */}
      <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
        <button
          onClick={() => {
            if (isMobile) {
              window.open(
                "https://calendly.com/tmcelrath26/noesis-consulting-1-1",
                "_blank"
              );
            } else {
              setShowCalendly(true);
            }
          }}
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
          Book Your Free First Session
        </button>
      </div>

      {/* Calendly Embed */}
      {showCalendly && !isMobile && (
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
                background: "#0018A8",
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

/* Menu */
/* Yves Blue Hamburger Menu (Always Yves Blue) */
function Menu() {
  const yvesBlue = "#0018A8";
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
                <Link
  href="/noesis"
  onClick={() => setOpen(false)}
  style={{ color: yvesBlue, fontWeight: 500, fontSize: "1.1rem" }}
>
  What Does Noesis Mean?
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
                   Transformation Pathways
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
                   Transformation Pathways
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
          Insights
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
         
        </div>
      )}
    </>
  );
}
