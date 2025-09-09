"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";


const sections = {
  Services: [
    {
      title: "1:1 Standalone Session – $80",
      description:
        "1 hr sessions that help you clarify strong emotions and channel deep thinking into clear action. Together we’ll transform emotion into action and action into motivation.",
      checkoutUrl: "https://www.paypal.com/ncp/payment/R2K8FTNDEH928",
    },
    {
      title: " Maintenance (2×/month) + IEP  – $200",
      description:
        "Two 1 hr sessions + a tailored plan that maps how your emotions and thoughts shape performance. You’ll leave with tools that enhance performance and engaged.",
      checkoutUrl: "https://www.paypal.com/ncp/payment/V65JZBVSQJ594",
    },
    {
      title: "3-Session Package – $250",
      description:
        "Weekly 1 hr + async support. Async support give you space to access distinct tools in the moments when you feel a lack of focus",
      checkoutUrl: "https://www.paypal.com/ncp/payment/KN9RGNWTMTEWQ",
    },
    {
      title: "6-Session Package – $400",
      description:
        "A structured arc of support designed to help you carry depth into steady progress. Across six sessions, we’ll cultivate stability, reinforce habits that protect motivation, and channel your emotional energy into performance and creative flow.",
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
      }}
    >
      {/* Animated Overlay */}
      <div
        className="liquid-overlay"
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at 20% 20%, #96001830, transparent 70%),
                       radial-gradient(circle at 80% 40%, #7A6C6130, transparent 70%),
                       radial-gradient(circle at 50% 80%, #FFFFFF30, transparent 70%)`,
          backgroundSize: "200% 200%",
          animation: "liquidMove 10s ease-in-out infinite alternate",
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
          color: "#333",
          fontWeight: 700,
          letterSpacing: "0.05em",
        }}
      >
        Act on your desire to change.
      </h1>

      {/* Services Section */}
      {Object.entries(sections).map(([category, items]) => (
        <div key={category}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "2rem",
              paddingBottom: "3rem",
            }}
          >
            {items.map((item, idx) => (
              <div
                key={idx}
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
                  textAlign: "center",
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
            color: "#960018",
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
            color: "#333",
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
    </main>
  );
}

/* Yves Blue Hamburger Menu */
function Menu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const yvesBlue = "#0018A8";

  useEffect(() => {
    if (menuRef.current) {
      if (open) {
        gsap.fromTo(
          menuRef.current,
          { y: -10, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4 }
        );
      } else {
        gsap.to(menuRef.current, { y: -10, opacity: 0, duration: 0.3 });
      }
    }
  }, [open]);

  return (
    <>
      {/* Hamburger */}
      <div style={{ position: "fixed", top: 20, left: 20, zIndex: 1100 }}>
        <button
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
            padding: "1.5rem 2rem",
            borderRadius: "14px",
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem",
            zIndex: 1000,
            fontFamily: "Georgia, 'Times New Roman', serif",
          }}
        >
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/noesis-methods", label: "How I Work" },
            { href: "/areas", label: "Areas I Help With" },
            { href: "/services", label: "Services" },
            { href: "/student-services", label: "Student Services" },
            { href: "/for-students", label: "Newsletters" },
            { href: "/faq", label: "FAQ" },
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
