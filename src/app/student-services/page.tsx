"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

const sections = {
  "Student Services": [
    {
      title: "1:1 Standalone Session – $45",
      description:
        "A single 60-minute session focused on immediate academic needs—whether preparing for an assignment, organizing study tasks, or clarifying focus. Designed to provide quick clarity and practical strategies in one meeting.",
      checkoutUrl: "https://www.paypal.com/ncp/payment/GA9C52BCKWCN8",
    },
    {
      title: "Diagnostic + Strategy Session – $120",
      description:
        "A 90-minute deep dive to map strengths, challenges, and study habits. You’ll leave with a personalized roadmap, clarity on where to focus, and 2–3 actions you can take immediately.",
      checkoutUrl: "https://www.paypal.com/ncp/payment/ATJFLE4UVNN7U",
    },
    {
      title: "Exam Readiness Intensive – $180",
      description:
        "A 2-hour session to build a personalized exam prep system. Together we’ll break down one test into sections, design recall strategies, and create a clear countdown plan to test day.",
      checkoutUrl: "https://www.paypal.com/ncp/payment/S6LE4YE5BDQHG",
    },
    {
      title: "Executive Function Lab (4 weeks) – $450",
      description:
        "Weekly 1-hour coaching sessions to train study rhythms, focus practices, and accountability systems. Students finish with transferable routines that reduce procrastination and build confidence.",
      checkoutUrl: "https://www.paypal.com/ncp/payment/GW8GH2PMV6EXQ",
    },
    {
      title: "Academic Resilience Coaching (6–8 weeks) – $800",
      description:
        "Biweekly 1-hour coaching designed to strengthen stress regulation, recovery practices, and adaptive persistence. Students gain mental tools that sustain performance across the semester.",
      checkoutUrl: "https://www.paypal.com/ncp/payment/CYCCP9VRBV6EW",
    },
  ],
};

export default function StudentServicesPage() {
  const [showCalendly, setShowCalendly] = useState(false);
  const [currentCheckout, setCurrentCheckout] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor || "";
    setIsMobile(/android|iphone|ipad|mobile/i.test(ua));
  }, []);

  useEffect(() => {
    function handleMessage(e: MessageEvent) {
      if (e.data && (e.data as any).event === "calendly.event_scheduled") {
        if (currentCheckout) {
          window.location.href = currentCheckout;
        }
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [currentCheckout]);

  return (
<main
  style={{
    minHeight: "100vh",
    padding: "4rem 2rem",
    fontFamily: "Georgia, 'Times New Roman', serif",
    position: "relative",
    overflow: "hidden",
    zIndex: 0,
    color: "#FFFFF0", // ivory text
  }}
>
  {/* Background Overlay */}
  <div
    className="liquid-overlay"
    style={{
      position: "absolute",
      inset: 0,
      background: "linear-gradient(to bottom, #F4C43040, #014D4E)", // saffron → deep teal
      zIndex: -1,
      pointerEvents: "none",
    }}
  />
      <Menu />

      <h1
        style={{
          fontSize: "3rem",
          textAlign: "center",
          maxWidth: "72ch",
          margin: "0 auto 3rem",
          lineHeight: 1.2,
          color: "#0018A8",
          fontWeight: 700,
          letterSpacing: "0.05em",
        }}
      >
        Build confidence in your ability to learn.
      </h1>

      {Object.entries(sections).map(([category, items]) => (
        <div key={category}>
          <div
            className="services-grid"
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "nowrap",
              gap: "1rem",
              paddingBottom: "3rem",
              overflowX: "auto",
            }}
          >
            {items.map((item, idx) => (
              <div
                key={idx}
                className="service-tile"
                style={{
                  flex: "0 1 220px",
                  background: "#FFFFFFee",
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: "16px",
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "left",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  minHeight: "240px",
                }}
              >
                <h2
                  style={{
                    fontSize: "1.3rem",
                    margin: "0 0 1rem 0",
                    fontWeight: 700,
                    color: "#0018A8",
                  }}
                >
                  {item.title}
                </h2>
                <p
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: 1.5,
                    margin: "0 0 1.2rem 0",
                    color: "#333",
                  }}
                >
                  {item.description}
                </p>
                <button
                  onClick={() => {
                    setCurrentCheckout(item.checkoutUrl);
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
                    padding: "0.8rem 1.6rem",
                    borderRadius: "40px",
                    fontSize: "1rem",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    background: "#0018A8",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Proceed.
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* === THE FIRST SESSION SECTION === */}
<section
  style={{
    textAlign: "center",
    marginTop: "2rem",
    maxWidth: "700px",
    marginLeft: "auto",
    marginRight: "auto",
  }}
>
  <h2
    style={{
      fontSize: "1.8rem",
      fontWeight: 600,
      color: "#FFFFFF", // White
      marginBottom: "1rem",
      letterSpacing: "0.03em",
    }}
  >
    THE FIRST SESSION
  </h2>
  <p
    style={{
      fontSize: "1.1rem",
      lineHeight: 1.7,
      color: "#FFFFFF", // White
      fontStyle: "italic",
      marginBottom: "1.5rem",
    }}
  >
    In the first free session, you’ll leave with a clearer sense of your
    patterns, practical strategies to ease overwhelm, and a grounded
    picture of what forward movement can look like for you.
  </p>

  {/* Frosted Booking Button */}
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
      padding: "1rem 2rem",
      borderRadius: "12px",
      background: "rgba(255, 255, 255, 0.25)", // frosted look
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      color: "#FFFFFF", // White
      fontSize: "1.2rem",
      fontWeight: 600,
      letterSpacing: "0.05em",
      fontFamily: "Georgia, 'Times New Roman', serif",
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
</section>

      {showCalendly && !isMobile && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              position: "relative",
              width: "80%",
              height: "80%",
              background: "#fff",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <iframe
              src="https://calendly.com/tmcelrath26/noesis-consulting-1-1?embed_domain=localhost:3000&embed_type=Inline"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="yes"
            />
            <button
              onClick={() => {
                setShowCalendly(false);
                setCurrentCheckout(null);
              }}
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
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .services-grid {
            flex-wrap: wrap !important;
            flex-direction: column !important;
            align-items: center !important;
          }
          .service-tile {
            flex: 1 1 auto !important;
            width: 100% !important;
            max-width: 400px !important;
          }
        }
      `}</style>
    </main>
  );
}

/* === Menu Component (Updated Collapsible) === */
function Menu() {
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState<{ [key: string]: boolean }>({});
  const menuRef = useRef<HTMLDivElement>(null);
  const yvesBlue = "#0018A8";

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
      {/* Yves Blue Hamburger */}
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
            <span style={{ width: 36, height: 4, background: yvesBlue }} />
            <span style={{ width: 36, height: 4, background: yvesBlue }} />
            <span style={{ width: 36, height: 4, background: yvesBlue }} />
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
            background: "rgba(255,255,255,0.15)",
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
              color: yvesBlue,
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
              background: "rgba(255,255,255,0.25)",
              marginBottom: "1rem",
            }}
          />

          <Link href="/" onClick={() => setOpen(false)} style={{ color: yvesBlue }}>
            Home
          </Link>
          <Link href="/services" onClick={() => setOpen(false)} style={{ color: yvesBlue }}>
            Mental Health Services
          </Link>
          <Link href="/areas" onClick={() => setOpen(false)} style={{ color: yvesBlue }}>
            Transformation Pathways
          </Link>
          <Link href="/noesis-methods" onClick={() => setOpen(false)} style={{ color: yvesBlue }}>
            The Noesis Approach
          </Link>
          <Link href="/about" onClick={() => setOpen(false)} style={{ color: yvesBlue }}>
            About Anthoni
          </Link>

          {/* Student Success Systems */}
          <div>
            <div
              onClick={() => toggleSub("student")}
              style={{ cursor: "pointer", color: yvesBlue }}
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
                <Link href="/student-services" onClick={() => setOpen(false)} style={{ color: yvesBlue }}>
                  Services
                </Link>
                <Link href="/student-areas" onClick={() => setOpen(false)} style={{ color: yvesBlue }}>
                  Transformation Pathways
                </Link>
                <Link href="/student-methods" onClick={() => setOpen(false)} style={{ color: yvesBlue }}>
                  The Noesis Method
                </Link>
              </div>
            )}
          </div>

          <Link href="/for-students" onClick={() => setOpen(false)} style={{ color: yvesBlue }}>
            Insights
          </Link>
          <Link href="/faq" onClick={() => setOpen(false)} style={{ color: yvesBlue }}>
            FAQ
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)} style={{ color: yvesBlue }}>
            Contact
          </Link>
        </div>
      )}
    </>
  );
}
