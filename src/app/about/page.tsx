"use client";

import React, { useState, useRef } from "react";
import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function AboutPage() {
  const [showLong, setShowLong] = useState(false);

  const lead =
    "Anthoni McElrath is a founder and consultant delivering integrative, psychology-informed, behavior-focused mental health care.";

  const longVersion = [
    `There was a point in my life when I had read and studied everything I could find—philosophy, psychology, religion, history, and countless approaches to self-care and growth. I consumed knowledge obsessively, believing it would deliver a path to a better life. Yet despite all that study, I carried the weight of depression, anxiety, and years of instability. Awareness alone did not move me out of emotional and mental stagnation.`,
    `What shifted my path was recognizing that history’s most enlightened figures were not defined only by their ideas but by how they lived them. Their wisdom became real through behavior—how they occupied space, how they created conditions for the reality they built, and how they translated inner awareness into outward action. We remember them because their knowledge was embodied, generative, and sustained against the world. They lived deeply and whole. They got the most from life. And that is what we all want. We want to live free from the emotional and mental burdens limiting our realities.`,
    `That realization reshaped my life. I came to see that a quality life requires alignment: emotional intelligence paired with deliberate behaviors that convert reflection into forward motion. This means building structures that steady the mind, regulate emotions, and allow the body to carry us with purpose. It is not only mental health—it is the cultivation of energies that protect against instability and sustain growth over time.`,
    `This practice is the translation of that understanding. I help people stabilize themselves within unstable social, political, and environmental conditions, and develop habits that channel their depth—insight, reflection, even anxiety—into steady momentum and creative capacity. It is from this grounding that the mission of my work becomes clear.`,
  ];

  return (
    <main className={inter.className} style={styles.page}>
      {/* Menu */}
      <Menu />

      <div style={styles.container}>
        {/* Lead */}
        <div style={styles.leadBox}>
          <p style={styles.lead}>{lead}</p>
        </div>

        {/* Long Version Toggle */}
        <div style={{ margin: "16px 0 24px", textAlign: "center" }}>
          <button
            onClick={() => setShowLong((v) => !v)}
            aria-expanded={showLong}
            style={styles.longBtn}
          >
            {showLong ? "Hide Long Version" : "Read Long Version"}
          </button>
        </div>

        {/* Collapsible Long Version (ABOUT text) */}
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
            Many people with strong insight and emotional depth find themselves
            stalled and anxious—unhealthily circling reflection and falling out of
            rhythm by allowing emotion to deplete motivation and energy.
          </p>
          <p style={styles.p}>
            My work is to help people transform their emotional depth into clarity,
            structure, and forward momentum that sustains creative and generative
            energy.
          </p>
          <p style={styles.p}>
            Each client develops an Individual Engagement Plan (IEP) grounded in
            three foundations:
          </p>
          <ul style={styles.ul}>
            <li style={styles.li}>
              <strong>Organizational Skills:</strong> shaping tasks, planning,
              and execution into clear, steady rhythms
            </li>
            <li style={styles.li}>
              <strong>Emotional Regulation:</strong> directing feeling into balanced
              response rather than depletion
            </li>
            <li style={styles.li}>
              <strong>Cognitive Load Management:</strong> creating spaciousness
              for focus by clearing internal and external clutter
            </li>
          </ul>
          <p style={styles.p}>
            The purpose is to stabilize motivation, expand capacity, and sustain
            creative energy in service of life’s larger whole. These foundations are
            held together by two guiding anchors.
          </p>
        </section>

        {/* ANCHORS */}
        <section style={styles.section}>
          <h2 style={styles.h2}>ANCHORS OF THE WORK</h2>
          <ul style={styles.ul}>
            <li style={styles.li}>
              <strong>Clarity:</strong> the ability to see and organize behavior
              with precision—understanding what drives action, what creates
              friction, and what conditions allow energy to move freely.
            </li>
            <li style={styles.li}>
              <strong>Momentum:</strong> the capacity to carry that clarity forward
              through steady habits and deliberate repetition—turning awareness
              into action that holds over time.
            </li>
          </ul>
          <p style={styles.p}>
            Together, clarity and momentum form a framework where emotional depth is
            not depleted but directed, creating stability in daily life and sustaining
            creative and generative energy in alignment with life’s larger whole.
          </p>
        </section>

        {/* MISSION */}
        <section style={styles.section}>
          <h2 style={styles.h2}>MISSION</h2>
          <p style={styles.p}>
            I walk the way of the bodhisattva. This work is my way of reducing
            suffering in the world. My goal is to help those I encounter see
            freedom in the deepest truths of their own lives and live aligned with
            their fullest capabilities. The aim is not only personal healing but the
            cultivation of a prosocial world—where individual stability and creativity
            ripple outward into stronger families, healthier communities, and more
            integrated institutions.
          </p>
          <p style={styles.p}>
            This mission comes alive through the concrete work I do with clients
            every day.
          </p>
        </section>

        {/* RESEARCH */}
        <section style={styles.section}>
          <h2 style={styles.h2}>RESEARCH AND CREDENTIALS</h2>
          <p style={styles.p}>
            I hold an MA in Psychology from the University of Massachusetts (2024)
            and am a Licensed Integrative Mental Health Coach. I am also pursuing an
            interdisciplinary PhD in the humanities, where my research deepens the
            connection between individual identity and environmental consciousness.
          </p>
        </section>

        <footer style={styles.footer}>© 2025 Anthoni McElrath</footer>
      </div>
    </main>
  );
}

/* ===== Menu Component ===== */
function Menu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const yvesBlue = "#0018A8";
  const ivory = "#FFFFF0";
  const hamburgerColor = pathname === "/" ? ivory : yvesBlue;

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
            <span style={{ width: 24, height: 2, background: hamburgerColor }} />
            <span style={{ width: 24, height: 2, background: hamburgerColor }} />
            <span style={{ width: 24, height: 2, background: hamburgerColor }} />
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
            fontFamily: `"Georgia", "Times New Roman", serif`,
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

/* ===== Styles ===== */
const styles: Record<string, React.CSSProperties> = {
  page: {
    background: "rgba(122, 108, 97, 0.08)", // near-clear taupe
    color: "#333",
    padding: "60px 20px 80px",
    display: "flex",
    justifyContent: "center",
  },
  container: {
    maxWidth: 860,
    width: "100%",
  },
  leadBox: {
    borderLeft: "4px solid #0018A8",
    paddingLeft: 16,
    margin: "20px 0 32px",
  },
  lead: {
    fontSize: 20,
    fontStyle: "italic",
    lineHeight: 1.7,
    color: "#0018A8",
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
  p: {
    fontSize: 18,
    lineHeight: 1.7,
    marginBottom: 16,
  },
  ul: {
    paddingLeft: 22,
    margin: "0 0 16px",
    listStyleType: "disc",
  },
  li: {
    marginBottom: 8,
    lineHeight: 1.7,
    fontSize: 18,
  },
  section: {
    marginTop: 48,
    padding: "24px 0",
    borderTop: "1px solid rgba(0,0,0,0.08)",
  },
  footer: {
    marginTop: 60,
    textAlign: "center",
    fontSize: 14,
    color: "rgba(0,0,0,0.6)",
  },
};
