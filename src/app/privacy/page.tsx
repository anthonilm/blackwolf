"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function PrivacyPage() {
  const [expanded, setExpanded] = useState(false);
  const yvesBlue = "#0018A8";

  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        padding: "4rem 2rem",
        fontFamily: "Georgia, 'Times New Roman', serif",
        overflow: "hidden",
        background: "#fff", // ✅ solid white background
      }}
    >
      {/* Gradient Background */}
      <div
        className="liquid-overlay"
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(circle at 45% 45%, #F5F0FA 0%, transparent 60%),
            radial-gradient(circle at 55% 55%, #E8E8FF 0%, transparent 70%),
            radial-gradient(circle at 50% 60%, #0018A810, transparent 75%),
            radial-gradient(circle at 50% 50%, #0018A820, transparent 90%)
          `,
          backgroundSize: "200% 200%",
          animation: "liquidMove 1s ease-in-out infinite alternate",
          zIndex: -1,
        }}
      />
      <style>{`
        @keyframes liquidMove {
          0% { background-position: 45% 45%, 55% 55%, 50% 60%, 50% 50%; opacity: 0.9; }
          100% { background-position: 55% 55%, 45% 45%, 52% 48%, 48% 52%; opacity: 1; }
        }

        /* Hide headers on mobile */
        @media (max-width: 768px) {
          .privacy-headers {
            display: none !important;
          }
        }
      `}</style>

      {/* Menu */}
      <Menu />

      {/* Top Headers */}
      <section
        className="privacy-headers"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginBottom: "3rem",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h2
            style={{
              color: yvesBlue,
              fontSize: "1.5rem",
              marginBottom: "0.3rem",
            }}
          >
            HIPAA Policies & Procedures
          </h2>
          <p style={{ color: yvesBlue, fontSize: "1rem" }}>
            Protecting health information with federal standards
          </p>
        </div>
        <div style={{ textAlign: "center" }}>
          <h2
            style={{
              color: yvesBlue,
              fontSize: "1.5rem",
              marginBottom: "0.3rem",
            }}
          >
            Client Consent & Agreement
          </h2>
          <p style={{ color: yvesBlue, fontSize: "1rem" }}>
            Clear expectations, rights, and responsibilities
          </p>
        </div>
        <div style={{ textAlign: "center" }}>
          <h2
            style={{
              color: yvesBlue,
              fontSize: "1.5rem",
              marginBottom: "0.3rem",
            }}
          >
            Confidentiality & Privacy Practices
          </h2>
          <p style={{ color: yvesBlue, fontSize: "1rem" }}>
            Safeguarding trust across student and general services
          </p>
        </div>
      </section>

      {/* Intro */}
      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          marginBottom: "2.5rem",
        }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: "1.2rem",
            color: yvesBlue,
            lineHeight: 1.6,
          }}
        >
          Noesis Systems LLC is committed to strict confidentiality and
          HIPAA-compliant care. We protect personal health information, ensure
          clear agreements, and maintain transparent practices across both
          student services and general client care.
        </p>
      </section>

      {/* Main Content */}
      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          color: yvesBlue,
          fontSize: "1rem",
          lineHeight: 1.8,
          display: "grid",
          gap: "1.5rem",
          textAlign: "left",
        }}
      >
        <p>
          All client information shared with Noesis Systems LLC is confidential
          and safeguarded in compliance with the Health Insurance Portability
          and Accountability Act (HIPAA). This includes digital records, session
          notes, and any identifying details. Access is strictly limited to
          authorized providers and systems. Confidentiality has important
          limits: if there is risk of imminent harm to self or others, disclosure
          of child or elder abuse, or a legal obligation, Noesis Systems LLC may
          be required to share information with appropriate authorities. These
          exceptions align with federal and state laws and are always handled
          with the highest sensitivity and professional care.
        </p>

        <p>
          Students and general clients alike have the right to understand their
          records, request access, and clarify how information is used in the
          coaching or consulting process. Written consent is obtained before
          sharing any details with third parties such as schools, families, or
          referring professionals.
        </p>

        <p>
          Clients are encouraged to review the Client Consent & Agreement
          document, which outlines rights, responsibilities, and the scope of
          services. Students receive additional protections regarding academic
          records and communications, ensuring that mental health support
          remains separate from academic evaluations.
        </p>

        <p>
          Noesis Systems LLC also provides clear boundaries for communication
          outside sessions. Email and messaging are available for scheduling and
          practical updates but are not substitutes for coaching or therapeutic
          dialogue. Crisis needs must be directed to emergency services or
          crisis hotlines.
        </p>

        <p>
          By choosing to work with Noesis Systems LLC, clients affirm their
          understanding of these policies and their commitment to an environment
          of mutual trust, respect, and confidentiality.
        </p>
      </section>
    </div>
  );
}

/* Yves Blue Hamburger Menu */
/* Yves Blue Hamburger Menu (Always Yves Blue) */
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
            Areas I Help You Overcome
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
