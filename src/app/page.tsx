"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FaInstagram } from "react-icons/fa";

export default function Page() {
  const [showCalendly, setShowCalendly] = useState(false);
  const ivory = "#FFFFF0";
  const carmine = "#960018";
  const yvesBlue = "#0018A8";

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        fontFamily: `"Georgia", "Times New Roman", serif`,
      }}
    >
      {/* Full Heavenly Background */}
      <Image
        src="/image.png"
        alt="Heavenly background"
        fill
        priority
        quality={100}
        style={{
          objectFit: "cover",
          zIndex: 0,
        }}
      />

      <Menu />

      <Hero ivory={ivory} setShowCalendly={setShowCalendly} />

      {showCalendly && (
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
    </div>
  );
}

/* Enlarged Ivory Hamburger Menu */
function Menu() {
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState<{ [key: string]: boolean }>({});
  const menuRef = useRef<HTMLDivElement>(null);
  const yvesBlue = "#0018A8";
  const ivory = "#FFFFF0";

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
      <div style={{ position: "fixed", top: 10, left: 12, zIndex: 1100 }}>
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
          <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
            <span style={{ width: 32, height: 3, background: ivory, borderRadius: 2 }} />
            <span style={{ width: 32, height: 3, background: ivory, borderRadius: 2 }} />
            <span style={{ width: 32, height: 3, background: ivory, borderRadius: 2 }} />
          </div>
        </button>
      </div>

      {open && (
        <div
          ref={menuRef}
          style={{
            position: "fixed",
            top: 80,
            left: 12,
            minWidth: "260px",
            background: "rgba(255,255,240,0.98)", // Ivory background
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
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
              background: "rgba(0,0,0,0.15)",
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

/* Hero Section (entire page) */
function Hero({ ivory, setShowCalendly }: any) {
  const titleRef = useRef<HTMLHeadingElement>(null);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 4rem",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "2.5rem",
        }}
      >
        <div style={{ display: "flex", gap: "0.3rem", alignItems: "center" }}>
          <div
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
        style={{
          fontSize: "clamp(1rem, 2.2vw, 1.6rem)",
          textTransform: "uppercase",
          letterSpacing: "0.18em",
          lineHeight: 1.6,
          margin: "0 auto",
          textAlign: "center",
          color: ivory,
          whiteSpace: "nowrap",
        }}
      >
        Transform anxiety into creative and generative clarity.
      </p>

      <div style={{ marginTop: "2rem" }}>
        <button
          onClick={() => setShowCalendly(true)}
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
          Book Your Free Consultation
        </button>
      </div>

      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "absolute",
          bottom: "35px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <FaInstagram size={22} color="#FFFFFF" style={{ opacity: 0.85 }} />
      </a>

      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: 0,
          right: 0,
          color: ivory,
          fontSize: "0.7rem",
          letterSpacing: "0.05em",
          textAlign: "center",
        }}
      >
        © {new Date().getFullYear()} Noesis Systems LLC. All rights reserved.
      </div>
    </div>
  );
}
