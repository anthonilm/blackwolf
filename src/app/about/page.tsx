"use client";

import React, { useState, useRef, useEffect } from "react";
import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function AboutPage() {
  const [showLong, setShowLong] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor || "";
    setIsMobile(/android|iphone|ipad|mobile/i.test(ua));
  }, []);

  const longVersion = [
    `There was a point in my life when I had read and studied everything I could find—philosophy, psychology, religion, history, and countless approaches to self-care and growth, alongside courses, certifications, and degrees that deepened this pursuit. I consumed knowledge obsessively, believing it would deliver a path to a better life. Yet despite all that study, I carried the weight of depression, anxiety, and years of instability. Awareness alone did not move me out of emotional and mental stagnation.`,
    `What shifted my path was recognizing that history’s most enlightened figures were not defined only by their ideas but by how they lived them. Their wisdom became real through behavior—how they occupied space, how they created conditions for the reality they built, and how they translated inner awareness into outward action. We remember them because their knowledge was embodied, generative, and sustained against the world. They lived deeply and whole. They got the most from life. And that is what we all want. We want to live free from the emotional and mental burdens limiting our realities.`,
    `That realization reshaped my life. I came to see that a quality life requires alignment: emotional intelligence paired with deliberate behaviors that convert reflection into forward motion. This means building structures that steady the mind, regulate emotions, and allow the body to carry us with purpose. It is not only mental health—it is the cultivation of energies that protect against instability and sustain growth over time.`,
    `This practice is the translation of that understanding. I help people stabilize themselves within unstable social, political, and environmental conditions, and develop habits that channel their depth—insight, reflection, even anxiety—into steady momentum and creative capacity. It is from this grounding that the mission of my work becomes clear.`,
  ];

  return (
    <main className={inter.className} style={styles.page}>
      {/* Animated Background Overlay */}
      <div
        className="liquid-overlay"
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at 20% 20%, #26619C40, transparent 70%),
                       radial-gradient(circle at 80% 40%, #C7C9D540, transparent 70%),
                       radial-gradient(circle at 50% 80%, #FFFFFF40, transparent 70%)`,
          backgroundSize: "200% 200%",
          animation: "liquidMove 2s ease-in-out infinite alternate",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <style>{`
        @keyframes liquidMove {
          0% { background-position: 0% 0%, 100% 50%, 50% 100%; opacity: 0.9; }
          100% { background-position: 100% 100%, 0% 50%, 50% 0%; opacity: 1; }
        }

        @media (max-width: 768px) {
          .about-hero {
            display: flex !important;
            flex-direction: column !important;
            gap: 1.5rem !important;
            text-align: center !important;
          }
          .about-hero img {
            max-width: 320px;
            margin: 0 auto;
            border-radius: 12px;
          }
          .about-hero h1 {
            font-size: clamp(1.75rem, 6vw, 2.5rem) !important;
          }
          .about-hero h2 {
            font-size: clamp(1rem, 4vw, 1.25rem) !important;
          }
          .about-hero h3 {
            font-size: clamp(1.1rem, 4vw, 1.3rem) !important;
          }
          .about-hero p {
            font-size: clamp(1rem, 3.5vw, 1.2rem) !important;
            line-height: 1.6 !important;
          }
        }
      `}</style>

      <Menu />

      <div style={styles.container}>
        {/* HERO SECTION */}
        <section style={styles.hero} className="about-hero">
          <div style={styles.heroImage}>
            <img
              src="/about-headshot.jpg"
              alt="Anthoni McElrath headshot"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
          </div>
          <div style={styles.heroText}>
            <h1 style={styles.heroName}>Anthoni McElrath</h1>
            <h2 style={styles.heroTitle}>
              M.A., Licensed Integrative Mental Health Coach
            </h2>
            <h3 style={styles.heroSubtitle}>Founder & Consultant</h3>
            <p style={styles.heroDescription}>
I help people transform anxiety into action, structure their energy into creativity and generativity, and convert trauma reflection into life enhancing progress. Goals may include improving focus, building consistent habits, strengthening emotional intelligence, boosting performance, achieving a growth mindset, and sustaining optimum mental performance. </p>
          </div>
        </section>

        {/* The Path Behind the Work */}
        <div style={{ margin: "32px 0 24px", textAlign: "center" }}>
          <button
            onClick={() => setShowLong((v) => !v)}
            aria-expanded={showLong}
            style={styles.longBtn}
          >
            {showLong ? "Hide Long Version" : "Read Long Version"}
          </button>
        </div>

        {/* The Path Behind the Work */}
        <div
          style={{
            overflow: "hidden",
            maxHeight: showLong ? 4000 : 0,
            transition: "max-height 360ms ease",
            marginTop: showLong ? 16 : 0,
          }}
        >
          {longVersion.map((p, i) => (
            <p key={i} style={styles.p}>
              {p}
            </p>
          ))}
        </div>

        {/* WHAT I DO */}
        <section style={styles.section}>
          <h2 style={styles.h2}>WHAT I DO</h2>
          <p style={styles.p}>
            Anxiety is my specialty. For many people, anxiety becomes a cycle of reflection without resolution—thinking without moving, circling without creating. Insight and emotional depth are valuable, but when they stall into overthinking, they erode motivation, focus, and energy.
          </p>
          <p style={styles.p}>
            My work is to break that cycle. I help people convert anxious energy into action—transforming tension into rhythm, reflection into progress, and emotional intensity into creative, generative output. The aim is not to quiet anxiety by suppressing it, but to redirect it into patterns of behavior that build stability, momentum, and betterment.
          </p>
          <p style={styles.p}>
            Each client develops an Individual Engagement Plan (IEP) built on
            three foundations:
          </p>
          <ul style={styles.ul}>
            <li style={styles.li}>
              <strong>Organizational Skills:</strong> structuring tasks, planning, and execution into clear rhythms that reduce overwhelm and restore control.
            </li>
            <li style={styles.li}>
              <strong>Emotional Regulation:</strong> channeling anxious energy into balanced, constructive responses rather than depletion.
            </li>
            <li style={styles.li}>
              <strong>Cognitive Load Management:</strong> clearing mental and environmental clutter so focus and creativity can flourish.
            </li>
          </ul>
          <p style={styles.p}>
            The purpose is simple: to stabilize motivation, sharpen focus, and sustain forward momentum. Anxiety becomes a source of energy, not paralysis—a driver of clarity, creativity, and enhanced quality of life.
          </p>
        </section>

        {/* ANCHORS */}
        <section style={styles.section}>
          <h2 style={styles.h2}>ANCHORS OF THE WORK</h2>
          <ul style={styles.ul}>
            <li style={styles.li}>
              <strong>Clarity:</strong> the ability to recognize what drives action, what creates friction, and how to design conditions that let energy move freely.
            </li>
            <li style={styles.li}>
              <strong>Momentum:</strong> the discipline of carrying that clarity forward through deliberate repetition and steady habit—turning awareness into engineered progress.
            </li>
          </ul>
          <p style={styles.p}>
            Together, clarity and momentum create a framework where emotional depth is not consumed but redirected—transforming reflection into action and sustaining creative, generative energy that enhances life in tangible ways.
          </p>
        </section>

        {/* MISSION */}
        <section style={styles.section}>
          <h2 style={styles.h2}>MISSION</h2>
          <p style={styles.p}>
            I walk the way of the bodhisattva. This work is my way of reducing
            suffering in the world. My goal is to help those I encounter see
            freedom in the deepest truths of their own lives and live aligned
            with their fullest capabilities. The aim is not only personal
            healing but the cultivation of a prosocial world—where individual
            stability and creativity ripple outward into stronger families,
            healthier communities, and more integrated institutions.
          </p>
          <p style={styles.p}>
            This mission comes alive in the concrete work I do each day: guiding clients to move beyond stasis, equipping them with tools for growth, and helping them transform reflection into deliberate action that improves both their own lives and the lives of those around them.
          </p>
        </section>

        {/* RESEARCH */}
        <section style={styles.section}>
          <h2 style={styles.h2}>RESEARCH AND CREDENTIALS</h2>
          <p style={styles.p}>
I hold an MA in Psychology and am a Licensed Integrative Mental Health Coach, with 6 years of academic advising experience. I am now pursuing a psychoanalytically oriented PhD bridging Environmental Studies and Comparative Literature, where my research interrogates how cultural narratives and engineered social behaviors mediate relations to built and natural environments and participate in the psycho-social formation of distinct identities. </p>
        </section>

        {/* BOOKING BUTTON */}
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
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
              fontSize: "1.2rem",
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

        {/* CALENDLY EMBED */}
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

        <footer style={styles.footer}>© 2025 Anthoni McElrath</footer>
      </div>
    </main>
  );
}

/* MENU */
function Menu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const yvesBlue = "#0018A8";
  const ivory = "#FFFFF0";
  const hamburgerColor = pathname === "/" ? ivory : yvesBlue;

  return (
    <>
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
            <span style={{ width: 24, height: 2, background: hamburgerColor }} />
            <span style={{ width: 24, height: 2, background: hamburgerColor }} />
            <span style={{ width: 24, height: 2, background: hamburgerColor }} />
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
            WebkitBackdropFilter: "blur(10px)",
            padding: "1.5rem 2rem",
            borderRadius: "14px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem",
            fontFamily: `"Georgia", "Times New Roman", serif`,
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

/* STYLES */
const styles: Record<string, React.CSSProperties> = {
  page: {
    position: "relative",
    color: "#333",
    padding: "60px 20px 80px",
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
  },
  container: {
    maxWidth: 1100,
    width: "100%",
    position: "relative",
    zIndex: 1,
  },
  hero: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "2rem",
    alignItems: "center",
    marginBottom: "4rem",
  },
  heroImage: { width: "100%" },
  heroText: { textAlign: "left" },
  heroName: {
    fontSize: "2.5rem",
    fontWeight: 700,
    marginBottom: "0.5rem",
    color: "#0018A8",
  },
  heroTitle: { fontSize: "1rem", marginBottom: "0.25rem" },
  heroSubtitle: {
    fontSize: "1.2rem",
    fontStyle: "italic",
    marginBottom: "1rem",
  },
  heroDescription: {
    fontSize: "1.1rem",
    lineHeight: 1.6,
    color: "#333",
    maxWidth: "50ch",
  },
  longBtn: {
    appearance: "none",
    display: "inline-block",
    padding: "12px 22px",
    borderRadius: 12,
    background: "#960018",
    color: "#fff",
    border: "none",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    fontWeight: 600,
    fontSize: 15,
    fontFamily: "Georgia, 'Times New Roman', serif",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  },
  h2: {
    fontSize: 16,
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: 12,
    color: "#960018",
  },
  p: { fontSize: 18, lineHeight: 1.7, marginBottom: 16 },
  ul: { paddingLeft: 22, margin: "0 0 16px", listStyleType: "disc" },
  li: { marginBottom: 8, lineHeight: 1.7, fontSize: 18 },
  section: { marginTop: 48, padding: "24px 0", borderTop: "1px solid rgba(0,0,0,0.08)" },
  footer: { marginTop: 60, textAlign: "center", fontSize: 14, color: "rgba(0,0,0,0.6)" },
};
