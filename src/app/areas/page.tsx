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
      background: "#1F0E0C", // Conac background
    }}
  >
    <style>{`
      @keyframes warpFlow {
        0% {
          transform: scale(1.02) skew(0deg, 0deg);
          background-position: 25% 25%, 75% 75%, 50% 50%;
          opacity: 0.9;
        }
        50% {
          transform: scale(1.05) skew(2deg, -2deg);
          background-position: 60% 40%, 40% 80%, 55% 45%;
          opacity: 1;
        }
        100% {
          transform: scale(1.02) skew(-2deg, 1deg);
          background-position: 30% 60%, 70% 30%, 45% 55%;
          opacity: 0.95;
        }
      }
    `}</style>



      {/* Menu */}
      <Menu />

      {/* Areas Section */}
      <section
        style={{
          background: "#FFFFFF",
          borderRadius: "12px",
          padding: "2rem",
          marginTop: "4rem",
          marginBottom: "4rem",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
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
        ></h2>
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
            background: "#FFFFFF",
            color: "#000",
            fontSize: "1.3rem",
            fontFamily: "Georgia, serif",
            fontWeight: 600,
            letterSpacing: "0.05em",
            border: "1px solid rgba(0, 0, 0, 0.15)",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.background = "#F5F5F5")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.background = "#FFFFFF")
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
/* Ivory Hamburger Menu (Updated from Mocha Version) */
function Menu() {
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState<{ [key: string]: boolean }>({});
  const menuRef = useRef<HTMLDivElement>(null);
  const ivory = "#FFFFF0";
  const espresso = "#3B2F2F";

  const toggleSub = (key: string) =>
    setSubOpen((prev) => ({ ...prev, [key]: !prev[key] }));

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
      {/* Ivory Hamburger */}
      <div style={{ position: "fixed", top: 8, left: 8, zIndex: 1100 }}>
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
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <span style={{ width: 36, height: 4, background: ivory, borderRadius: 2 }} />
            <span style={{ width: 36, height: 4, background: ivory, borderRadius: 2 }} />
            <span style={{ width: 36, height: 4, background: ivory, borderRadius: 2 }} />
          </div>
        </button>
      </div>

      {/* Lead-optimized menu */}
      {open && (
        <div
          ref={menuRef}
          style={{
            position: "fixed",
            top: 60,
            left: 8,
            minWidth: "260px",
            background: "rgba(255,255,240,0.95)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
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
              color: espresso,
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

          <Link href="/" onClick={() => setOpen(false)} style={{ color: espresso }}>
            Home
          </Link>
          <Link href="/noesis" onClick={() => setOpen(false)} style={{ color: espresso }}>
            What Does Noesis Mean?
          </Link>
          <Link href="/services" onClick={() => setOpen(false)} style={{ color: espresso }}>
            Mental Health Services
          </Link>
          <Link href="/areas" onClick={() => setOpen(false)} style={{ color: espresso }}>
            Areas I Help You Overcome
          </Link>
          <Link href="/noesis-methods" onClick={() => setOpen(false)} style={{ color: espresso }}>
            The Noesis Approach
          </Link>
          <Link href="/about" onClick={() => setOpen(false)} style={{ color: espresso }}>
            About Anthoni
          </Link>
          <Link href="/for-students" onClick={() => setOpen(false)} style={{ color: espresso }}>
            Insights
          </Link>
          <Link href="/faq" onClick={() => setOpen(false)} style={{ color: espresso }}>
            FAQ
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)} style={{ color: espresso }}>
            Contact
          </Link>
        </div>
      )}
    </>
  );
}



