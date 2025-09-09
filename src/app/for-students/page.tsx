"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

export default function ResourcesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tilesRef = useRef<(HTMLDivElement | null)[]>([]);

  const yvesBlue = "#0018A8";
  const ivory = "#FFFFF0";

  const newsletters = [
    {
      title: "Interpolated Instability",
      href: "/newsletters/2025-04-01-interpolated-instability.pdf",
      summary:
        "This piece examines how modern life fragments thought and performance, leaving people overwhelmed by incoherent signals and reactive cycles. It offers tools for building structural coherence under pressure, showing how clarity and deliberate rhythm can restore function even in unstable environments. The aim is to help readers convert disorientation into grounded action that sustains energy and forward motion.",
    },
    {
      title: "Disidentification",
      href: "/newsletters/2025-05-10-disidentification-architecture.pdf",
      summary:
        "This newsletter explores how people become trapped in survival roles and performance-based identities that no longer serve their growth. It presents disidentification as a structural step—releasing outdated adaptations so authentic presence can reemerge. Readers are guided toward reclaiming agency by refusing false scripts and rebuilding coherence from clarity and choice.",
    },
    {
      title: "Belief Psychology",
      href: "/newsletters/2025-06-15-belief-psychological-structure.pdf",
      summary:
        "Here belief is reframed as the psychological scaffolding that holds identity together, beyond mood or opinion. It shows how the absence of belief leads to fragmentation, indecision, and erosion of trust, while the presence of belief stabilizes agency and direction. The work invites readers to anchor themselves in convictions that transform reflection into sustained, reliable action.",
    },
    {
      title: "Instability Structures",
      href: "/newsletters/2025-07-20-instability-structural-disintegration.pdf",
      summary:
        "This piece defines instability as structural disintegration—the collapse of coherence across thought, emotion, and behavior. It examines how trauma, cultural pressure, and maladaptive survival strategies erode stability, and how integration can be restored through deliberate practice and relational repair. The purpose is to help readers understand instability not as pathology but as a condition that can be reconstructed into strength.",
    },
    {
      title: "Solitary Thresholds",
      href: "/newsletters/2025-08-01-solitary-threshold.pdf",
      summary:
        "This essay reframes solo travel as an intentional threshold for re-entry into presence and agency after periods of stasis. It shows how being alone in unfamiliar environments reawakens executive function, emotional regulation, and relational orientation. Readers are encouraged to use solitude as a practice of coherence—transforming aloneness into a generative resource for clarity, momentum, and mental health.",
    },
  ];

  const pastelColors = [
    { bg: "#FFE5D9", text: "#5A2A27" },
    { bg: "#E0F7FA", text: "#004D40" },
    { bg: "#FFF9C4", text: "#4E342E" },
    { bg: "#EDE7F6", text: "#311B92" },
    { bg: "#F1F8E9", text: "#1B5E20" },
  ];

  useEffect(() => {
    if (tilesRef.current.length > 0) {
      gsap.fromTo(
        tilesRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateRows: "auto 1fr",
        fontFamily: `"Georgia", "Times New Roman", serif`,
        position: "relative",
        overflow: "hidden",
        background: "#0d0d0d", // base smokey black
      }}
    >
      {/* Smokey animated overlay */}
      <div
        className="liquid-overlay"
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at 20% 20%, rgba(50,50,50,0.5), transparent 70%),
                       radial-gradient(circle at 80% 40%, rgba(100,100,100,0.4), transparent 70%),
                       radial-gradient(circle at 50% 80%, rgba(30,30,30,0.6), transparent 70%)`,
          backgroundSize: "200% 200%",
          animation: "liquidMove 12s ease-in-out infinite alternate",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <style>{`
        @keyframes liquidMove {
          0% { background-position: 0% 0%, 100% 50%, 50% 100%; opacity: 0.9; }
          100% { background-position: 100% 100%, 0% 50%, 50% 0%; opacity: 1; }
        }

        /* Mobile layout */
        @media (max-width: 768px) {
          .tiles-container {
            display: grid;
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .summary {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      `}</style>

      {/* Menu */}
      <Menu yvesBlue={yvesBlue} ivory={ivory} />

      <main
        style={{
          position: "relative",
          zIndex: 1,
          padding: "6rem 2rem 4rem",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: 700,
            textAlign: "left",
            marginBottom: "3rem",
            color: "#fff", // white title text
          }}
        >
          Newsletters
        </h1>

        {/* Tile container */}
        <div
          className="tiles-container"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          {newsletters.map((n, idx) => {
            const colorSet = pastelColors[idx % pastelColors.length];
            return (
              <div
                key={idx}
                ref={(el) => {
                  tilesRef.current[idx] = el;
                }}
                style={{
                  width: "100%",
                  padding: "2.5rem 2rem",
                  borderRadius: "18px",
                  background: colorSet.bg,
                  color: colorSet.text,
                  boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-4px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <h2
                  style={{
                    fontSize: "2rem",
                    fontWeight: 700,
                    marginBottom: "1rem",
                  }}
                >
                  {n.title}
                </h2>
                <p
                  className="summary"
                  style={{
                    fontSize: "1.15rem",
                    lineHeight: "1.7",
                    marginBottom: "1.5rem",
                  }}
                >
                  {n.summary}
                </p>
                <a
                  href={n.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "0.9rem 1.6rem",
                    borderRadius: "10px",
                    background: colorSet.text,
                    color: colorSet.bg,
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: "1.05rem",
                    letterSpacing: "0.04em",
                  }}
                >
                  Open PDF
                </a>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

/* Shared Menu */
function Menu({ yvesBlue, ivory }: any) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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
      <div style={{ position: "fixed", top: 20, left: 20, zIndex: 1100 }}>
        <button
          onClick={() => setOpen(!open)}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ width: 24, height: 2, background: ivory }} />
            <span style={{ width: 24, height: 2, background: ivory }} />
            <span style={{ width: 24, height: 2, background: ivory }} />
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
            background: "rgba(20,20,20,0.95)", // dark smokey black
            backdropFilter: "blur(6px)", // subtle blur for depth
            padding: "1.5rem 2rem",
            borderRadius: "14px",
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem",
            zIndex: 1000,
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
                color: ivory,
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
