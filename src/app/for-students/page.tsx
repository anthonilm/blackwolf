"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

export default function ResourcesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tilesRef = useRef<(HTMLDivElement | null)[]>([]);

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
      background: "#fff", // ✅ solid white background
    }}
  >
    {/* Smokey animated overlay (kept for structure but made transparent) */}
    <div
      className="liquid-overlay"
      style={{
        position: "absolute",
        inset: 0,
        background: "transparent", // ✅ no gradients
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
      <Menu />

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
    background: "#014D4E",   // ✅ Deep Teal background
    color: "#FFFFFF",        // ✅ White text
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
      color: "#FFFFFF", // ✅ Force white heading
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
      color: "#FFFFFF", // ✅ Force white text
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
      background: "#FFFFFF",   // ✅ White button
      color: "#014D4E",        // ✅ Deep Teal text for contrast
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

/* Yves Blue Hamburger Menu — collapsible */
/* Yves Blue Hamburger Menu */
/* ------------------------------------------------------------------ */
/* Menu Component — Hamburger always Yves Blue                        */
/* ------------------------------------------------------------------ */

/* Hamburger Menu */
function Menu() {
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState<{ [key: string]: boolean }>({});
  const menuRef = useRef<HTMLDivElement>(null);

  const yvesBlue = "#0018A8";

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
      <div style={{ position: "fixed", top: 8, left: 8, zIndex: 1100 }}>
        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          style={{
            width: 50,
            height: 50,
            background: "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            border: "none",
            padding: 0,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <span style={{ width: 22, height: 2, background: yvesBlue }} />
            <span style={{ width: 22, height: 2, background: yvesBlue }} />
            <span style={{ width: 22, height: 2, background: yvesBlue }} />
          </div>
        </button>
      </div>

      {open && (
        <div
          ref={menuRef}
          style={{
            position: "fixed",
            top: 60,
            left: 8,
            minWidth: "260px",
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
          <Link href="/" onClick={() => setOpen(false)} style={{ color: yvesBlue }}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)} style={{ color: yvesBlue }}>About</Link>
          <Link href="/noesis" onClick={() => setOpen(false)} style={{ color: yvesBlue }}>What Does Noesis Mean?</Link>

          <div>
            <div onClick={() => toggleSub("cognitive")} style={{ cursor: "pointer", color: yvesBlue }}>
              Cognitive Performance Coaching
            </div>
            {subOpen["cognitive"] && (
              <div style={{ marginLeft: "1rem", marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                <Link href="/services" onClick={() => setOpen(false)} style={{ color: yvesBlue }}>Services</Link>
                <Link href="/areas" onClick={() => setOpen(false)} style={{ color: yvesBlue }}>Transformation Pathways</Link>
                <Link href="/noesis-methods" onClick={() => setOpen(false)} style={{ color: yvesBlue }}>The Noesis Approach</Link>
              </div>
            )}
          </div>

          <div>
            <div onClick={() => toggleSub("student")} style={{ cursor: "pointer", color: yvesBlue }}>
              Student Success Systems
            </div>
            {subOpen["student"] && (
              <div style={{ marginLeft: "1rem", marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                <Link href="/student-services" onClick={() => setOpen(false)} style={{ color: yvesBlue }}>Services</Link>
                <Link href="/student-areas" onClick={() => setOpen(false)} style={{ color: yvesBlue }}>Transformation Pathways</Link>
                <Link href="/student-methods" onClick={() => setOpen(false)} style={{ color: yvesBlue }}>The Noesis Method</Link>
              </div>
            )}
          </div>

          <Link href="/for-students" onClick={() => setOpen(false)} style={{ color: yvesBlue }}>Insights</Link>
          <Link href="/faq" onClick={() => setOpen(false)} style={{ color: yvesBlue }}>FAQ</Link>
          <Link href="/contact" onClick={() => setOpen(false)} style={{ color: yvesBlue }}>Contact</Link>
        </div>
      )}
    </>
  );
}

