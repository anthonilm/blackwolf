"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

const sections = {
  Services: [
    {
      title: "1:1 Standalone Session – $80",
      description:
        "A focused 1-hour session designed to help you clarify strong emotions and turn deep thinking into clear action. We’ll redirect anxious energy into structure and movement—transforming reflection into progress and momentum.",
      checkoutUrl: "https://www.paypal.com/ncp/payment/R2K8FTNDEH928",
    },
    {
      title: " Maintenance (2×/month) + IEP  – $200",
      description:
        "Two 1-hour sessions per month, plus a personalized Individual Engagement Plan (IEP). This plan maps how your emotions and thoughts shape performance and provides tools for building habits that sustain motivation, sharpen focus, and strengthen emotional resilience.",
      checkoutUrl: "https://www.paypal.com/ncp/payment/V65JZBVSQJ594",
    },
    {
      title: "3-Session Package – $250",
      description:
        "This three-week package provides a rhythm of weekly 1-hour sessions combined with ongoing asynchronous support. The async support allows you to access strategies in the moments when focus slips, creating a structure that helps anchor anxious energy into steady clarity and momentum between sessions.",
      checkoutUrl: "https://www.paypal.com/ncp/payment/KN9RGNWTMTEWQ",
    },
    {
      title: "6-Session Package – $400",
      description:
        "This six-session arc offers a structured progression that cultivates stability and reinforces habits that protect motivation. Across the process we’ll strengthen emotional regulation and cognitive clarity, channeling emotional intensity into creativity, performance, and sustainable momentum. By the end, you will have both tools and patterns in place to carry progress forward with independence.",
      checkoutUrl: "https://www.paypal.com/ncp/payment/KMQK6HTCMY7CQ",
    },
  ],
};

export default function ServicesPage() {
  const [showCalendly, setShowCalendly] = useState(false);
  const [currentCheckout, setCurrentCheckout] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor || "";
    setIsMobile(/android|iphone|ipad|mobile/i.test(ua));
  }, []);

  // Calendly event listener
  useEffect(() => {
    function handleMessage(e: MessageEvent) {
      if (e.data.event && e.data.event === "calendly.event_scheduled") {
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

      <style>{`
        @keyframes liquidMove {
          0% { background-position: 0% 0%, 100% 50%, 50% 100%; opacity: 0.85; }
          100% { background-position: 100% 100%, 0% 50%, 50% 0%; opacity: 1; }
        }
      `}</style>

      {/* Yves Blue Menu */}
      <Menu />

      {/* Headline */}
      <h1
        style={{
          fontSize: "3rem",
          textAlign: "center",
          maxWidth: "72ch",
          margin: "0 auto 3rem",
          lineHeight: 1.2,
          color: "#0018A8", // Yves Blue
          fontWeight: 700,
          letterSpacing: "0.05em",
        }}
      >
        This is how you move from stuck to thriving.
      </h1>

      {/* Services Section */}
      {Object.entries(sections).map(([category, items]) => (
        <div key={category}>
          <div
            className="services-grid"
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "nowrap", // force single row
              gap: "2rem",
              paddingBottom: "3rem",
              overflowX: "auto", // allow horizontal scroll if overflow
            }}
          >
            {items.map((item, idx) => (
              <div
                key={idx}
                className="service-tile"
                style={{
                  flex: "0 1 340px",
                  background: "#FFFFF0cc",
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: "16px",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "left",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  minHeight: "280px",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 28px rgba(0,0,0,0.25)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 18px rgba(0,0,0,0.15)";
                }}
              >
                <h2
                  style={{
                    fontSize: "1.6rem",
                    margin: "0 0 1rem 0",
                    fontWeight: 700,
                    color: "#960018", // Carmine headers
                  }}
                >
                  {item.title}
                </h2>
                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.6,
                    margin: "0 0 1.5rem 0",
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
                    padding: "1rem 2rem",
                    borderRadius: "50px",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    background: "#0018A8", // Solid Yves Blue
                    color: "#fff",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 24px rgba(0,0,0,0.25)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 6px 18px rgba(0,0,0,0.2)";
                  }}
                >
                  Proceed
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
            color: "#0018A8", // Yves Blue
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
            color: "#000000", // Black
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
            color: "#000",
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

      {/* Calendly Modal */}
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
                background: "#0018A8", // Yves Blue close button
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

/* Yves Blue Hamburger Menu (Updated Collapsible) */
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
