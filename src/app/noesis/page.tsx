"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import gsap from "gsap";

export default function NoesisPage() {
  const yvesBlue = "#0018A8";

  return (
  <div
  style={{
    minHeight: "100vh",
    position: "relative",
    fontFamily: "Georgia, 'Times New Roman', serif",
    background: "linear-gradient(135deg, #C0C0C0, #E8E8E8, #D3D3D3)", // silver gradient
    color: "#4B3621", // mocha brown text
    overflowX: "hidden",
  }}
>
      {/* Scroll Progress */}
      <ScrollProgress />

      {/* Menu */}
      <Menu />

      {/* Content */}
      <main
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "6rem 2rem",
          lineHeight: 1.7,
          fontSize: "1.1rem",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            marginBottom: "2rem",
            color: "#0018A8",
          }}
        >
          What Does <em>Noesis</em> Mean?
        </h1>

        {/* Sections go here */}
        <EssaySections />
      </main>
    </div>
  );
}

/* === Scroll Progress === */
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "4px",
        background: "#0018A8",
        transformOrigin: "0%",
        zIndex: 2000,
        scaleX: scrollYProgress,
      }}
    />
  );
}

/* Hamburger Menu */
/* Mocha Hamburger Menu (Updated to Match Previous Version) */
function Menu() {
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState<{ [key: string]: boolean }>({});
  const menuRef = useRef<HTMLDivElement>(null);
  const mocha = "#3B2F2F";

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
      {/* Mocha Hamburger */}
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
            <span style={{ width: 36, height: 4, background: mocha, borderRadius: 2 }} />
            <span style={{ width: 36, height: 4, background: mocha, borderRadius: 2 }} />
            <span style={{ width: 36, height: 4, background: mocha, borderRadius: 2 }} />
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
            background: "rgba(255,255,240,0.95)",
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
              color: mocha,
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

          <Link href="/" onClick={() => setOpen(false)} style={{ color: mocha }}>
            Home
          </Link>
          <Link href="/services" onClick={() => setOpen(false)} style={{ color: mocha }}>
            Mental Health Services
          </Link>
          <Link href="/areas" onClick={() => setOpen(false)} style={{ color: mocha }}>
            Areas I Help You Overcome
          </Link>
          <Link href="/noesis-methods" onClick={() => setOpen(false)} style={{ color: mocha }}>
            The Noesis Approach
          </Link>
          <Link href="/about" onClick={() => setOpen(false)} style={{ color: mocha }}>
            About Anthoni
          </Link>
          <Link href="/for-students" onClick={() => setOpen(false)} style={{ color: mocha }}>
            Insights
          </Link>
          <Link href="/faq" onClick={() => setOpen(false)} style={{ color: mocha }}>
            FAQ
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)} style={{ color: mocha }}>
            Contact
          </Link>
        </div>
      )}
    </>
  );
}





/* === Essay Sections === */
function EssaySections() {
  const sectionStyle = { marginBottom: "4rem" };

  const headingStyle = {
    fontSize: "1.8rem",
    fontWeight: "700",
    marginBottom: "1rem",
    color: "#0018A8",
  };

  const subheadingStyle = {
    fontSize: "1.4rem",
    fontWeight: "600",
    marginBottom: "0.8rem",
    color: "#0018A8",
  };

  const paragraphStyle = { marginBottom: "1.5rem" };

  return (
    <>
      {/* Intro */}
      <section style={sectionStyle}>
        <p style={paragraphStyle}>
          The word <em>Noesis</em> carries a depth of meaning that stretches across
          history, philosophy, and lived human experience. It is more than a term
          of intellectual curiosity—it is a framework for living with clarity,
          purpose, and momentum. At its core, Noesis means the act of understanding:
          the turning of thought into insight, and insight into action.
        </p>
        <p style={paragraphStyle}>
          To define <em>Noesis</em> is not only to examine a word but to explore a
          way of engaging with the world. It is to ask: How do we know what we know?
          How do we take the fragments of thought, emotion, and perception and
          integrate them into something that guides life forward? These questions
          animate both the ancient origins of the term and its modern relevance.
        </p>
      </section>

      {/* Origins */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>The Origins of Noesis</h2>
        <h3 style={subheadingStyle}>The Ancient Greek Roots</h3>
        <p style={paragraphStyle}>
          The word <em>Noesis</em> comes from the ancient Greek <em>νόησις</em>,
          which translates as “understanding,” “perception,” or “direct
          intellectual insight.” For Greek philosophers, this word did not refer to
          casual knowledge or vague opinion. Instead, it named the most elevated
          form of knowing—grasping truth in its purest form.
        </p>
        <p style={paragraphStyle}>
          Plato distinguished <em>Noesis</em> from belief (<em>doxa</em>). Belief
          could be swayed by appearances or emotions, but Noesis was stable,
          precise, and enduring. It represented the soul’s ability to perceive the
          Forms: those timeless, unchanging realities such as justice, beauty, and
          truth. When someone achieved Noesis, they were not guessing, assuming, or
          persuaded—they were perceiving essence directly.
        </p>
        <p style={paragraphStyle}>
          Aristotle, while critical of Plato’s theory of Forms, also elevated Noesis
          as the highest human faculty. For him, it was the rational mind perceiving
          first principles: truths so fundamental they required no further proof.
          Where other forms of knowledge dealt with contingencies, Noesis dealt with
          what could not be otherwise.
        </p>
        <h3 style={subheadingStyle}>Later Philosophical Uses</h3>
        <p style={paragraphStyle}>
          Centuries later, the German philosopher Edmund Husserl, founder of
          phenomenology, reclaimed the word to describe the conscious act of thought
          itself. For Husserl, Noesis was not about distant metaphysical objects,
          but about the way consciousness intends the world. Perceiving, imagining,
          judging, and remembering—these were all noetic acts.
        </p>
        <p style={paragraphStyle}>
          In Husserl’s framework, Noesis and Noema were inseparable: Noesis was the
          act of consciousness, while Noema was the content toward which
          consciousness was directed. This language gave precision to what it means
          to say that humans are not passive receivers of information but active
          participants in shaping how reality appears to them.
        </p>
      </section>

      {/* Noesis in Practice */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>Noesis in Practice</h2>
        <h3 style={subheadingStyle}>From Philosophy to Daily Life</h3>
        <p style={paragraphStyle}>
          For many, the word <em>Noesis</em> might seem abstract or confined to
          ancient texts. But its power lies in how it speaks to daily struggles of
          thought, focus, and action.
        </p>
        <p style={paragraphStyle}>
          When people become overwhelmed—caught in cycles of overthinking, burnout,
          or hesitation—it is often because raw reflection has not yet become
          structured understanding. Reflection without form turns in circles. What
          Noesis offers is a way to break that cycle: to take reflection, give it
          shape, and turn it into purposeful behavior.
        </p>
        <p style={paragraphStyle}>
          At <strong>Noesis Systems</strong>, this translation is at the heart of
          our work. We see Noesis not as an academic term but as a living process:
          the ability to transform awareness into action, and insight into
          sustainable progress. It is the bridge between inner clarity and outer
          momentum.
        </p>
        <h3 style={subheadingStyle}>Creative and Generative Thinking</h3>
        <p style={paragraphStyle}>
          In practice, Noesis means creative and generative thinking patterns.
          Creativity without structure can feel chaotic; structure without
          creativity can feel rigid. Noesis harmonizes the two, allowing people to
          recognize patterns, frame problems, and generate solutions.
        </p>
        <p style={paragraphStyle}>
          It is the mental energy that moves a person from “I realize something is
          wrong” to “I now see a path forward.” In this way, Noesis is not only an
          act of knowing but an act of creating: shaping raw awareness into form,
          and form into movement.
        </p>
      </section>

      {/* Five Words */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>The Five Words of Noesis</h2>
        <p style={paragraphStyle}>
          To make Noesis tangible, we distill it into five guiding words:
        </p>
        <p style={paragraphStyle}>
          <strong>1. Structured</strong> — Growth requires a framework. Without
          structure, insight dissipates into scattered thoughts.
        </p>
        <p style={paragraphStyle}>
          <strong>2. Insight</strong> — Change begins with awareness. Insight is the
          spark of clarity that reveals possibilities otherwise hidden.
        </p>
        <p style={paragraphStyle}>
          <strong>3. Guiding</strong> — Knowledge is directional. Guidance turns
          insight into a compass.
        </p>
        <p style={paragraphStyle}>
          <strong>4. Purposeful</strong> — Action is hollow unless it connects to
          meaning.
        </p>
        <p style={paragraphStyle}>
          <strong>5. Action</strong> — Insight only matters if lived out.
        </p>
      </section>

      {/* Pause and Reflect */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>Pause and Reflect</h2>
        <ul style={{ marginLeft: "1.5rem", marginBottom: "1.5rem" }}>
          <li>Where in your life do you notice cycles of overthinking?</li>
          <li>What insight have you had recently not yet acted upon?</li>
          <li>How could structured reflection move you forward?</li>
        </ul>
      </section>

      {/* Why It Matters */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>Why It Matters</h2>
        <p style={paragraphStyle}>
          We live in a time saturated with distraction and pressure. Many feel
          overwhelmed by information yet under-equipped with clarity.
        </p>
        <p style={paragraphStyle}>
          Noesis restores balance. It reminds us thought is not complete until it
          guides action.
        </p>
      </section>

      {/* Conclusion */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>Conclusion: The Living Meaning of Noesis</h2>
        <p style={paragraphStyle}>
          Defining <em>Noesis</em> is not about reducing it to a single sentence but
          about recognizing its role as a living principle.
        </p>
        <p style={paragraphStyle}>
          For you, the reader, the question is not only “What does Noesis mean?” but
          “How will Noesis live in me?”
        </p>
        <footer
          style={{
            background: "rgba(0,0,0,0.05)",
            color: "#FFFFFF",
            textAlign: "center",
            padding: "1rem",
            fontSize: "0.85rem",
            marginTop: "4rem",
          }}
        >
          © 2025 Anthoni McElrath, Noesis Systems LLC. All rights reserved.
        </footer>
      </section>
    </>
  );
}
