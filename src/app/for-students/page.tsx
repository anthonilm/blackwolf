"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

export default function ResourcesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const yvesBlue = "#0018A8";
  const softGreen = "#DDE4D3"; // pale green
  const ivory = "#FFFFF0";

  const newsletters = [
    { title: "Interpolated Subjectivity", href: "/newsletters/2025-04-01-interpolated.pdf" },
    { title: "Disidentification", href: "/newsletters/2025-05-10-disidentification.pdf" },
    { title: "Belief Psychology", href: "/newsletters/2025-06-15-belief-psych.pdf" },
    { title: "Instability Structures", href: "/newsletters/2025-07-20-instability-struct.pdf" },
    { title: "Solitary Threads", href: "/newsletters/2025-08-01-solitary-thread.pdf" },
  ];

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
      }}
    >
      {/* Liquid overlay */}
      <div
        className="liquid-overlay"
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at 20% 20%, ${softGreen}70, transparent 70%),
                       radial-gradient(circle at 80% 40%, ${ivory}80, transparent 70%),
                       radial-gradient(circle at 50% 80%, ${softGreen}60, transparent 70%)`,
          backgroundSize: "200% 200%",
          animation: "liquidMove 8s ease-in-out infinite alternate",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <style>{`
        @keyframes liquidMove {
          0% { background-position: 0% 0%, 100% 50%, 50% 100%; opacity: 0.95; }
          100% { background-position: 100% 100%, 0% 50%, 50% 0%; opacity: 1; }
        }

        /* Mobile layout for tiles */
        @media (max-width: 768px) {
          .tiles-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
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
            color: "#111",
          }}
        >
          Research
        </h1>

        {/* Tile grid */}
        <div
          className="tiles-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)", // default desktop
            gap: "2rem",
          }}
        >
          {newsletters.map((n, idx) => (
            <div
              key={idx}
              style={{
                height: "340px",
                background: "rgba(255,255,255,0.2)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                borderRadius: "16px",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                textAlign: "center",
                boxShadow: "0 10px 28px rgba(0,0,0,0.15)",
              }}
            >
              <h2
                style={{
                  fontSize: "1.6rem",
                  fontWeight: 600,
                  marginBottom: "1rem",
                  color: "#000",
                }}
              >
                {n.title}
              </h2>
              <a
                href={n.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  textAlign: "center",
                  padding: "1rem 1.8rem",
                  borderRadius: "10px",
                  background: yvesBlue,
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  letterSpacing: "0.05em",
                }}
              >
                Open PDF
              </a>
            </div>
          ))}
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
        gsap.fromTo(menuRef.current, { y: -10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 });
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
          style={{ background: "transparent", border: "none", cursor: "pointer" }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ width: 24, height: 2, background: yvesBlue }} />
            <span style={{ width: 24, height: 2, background: yvesBlue }} />
            <span style={{ width: 24, height: 2, background: yvesBlue }} />
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
            background: "rgba(223, 245, 225, 0.25)",
            backdropFilter: "blur(10px)",
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
            { href: "/for-students", label: "Resources" },
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
