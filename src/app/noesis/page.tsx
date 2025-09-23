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
    background: "#36454F",   // ✅ Charcoal background
    color: "#FFFFFF",        // ✅ White text for readability
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
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
         style={{
    fontSize: "2.5rem",
    fontWeight: "700",
    marginBottom: "2rem",
    color: "#F4C430", // ✅ Soft Saffron
  }}
>
          What Does <em>Noesis</em> Mean?
        </motion.h1>

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

/* === Menu === */
/* Full Yves Blue Hamburger Menu */
function Menu({ yvesBlue = "#0018A8", ivory = "#FFFFF0" }: any) {
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
          { y: 0, opacity: 1, duration: 0.2, ease: "power2.out" }
        );
      } else {
        gsap.to(menuRef.current, {
          y: -10,
          opacity: 0,
          duration: 0.1,
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
          <Link href="/" onClick={() => setOpen(false)} style={{ color: yvesBlue, fontWeight: 500, fontSize: "1.1rem" }}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)} style={{ color: yvesBlue, fontWeight: 500, fontSize: "1.1rem" }}>About</Link>
          <Link href="/noesis" onClick={() => setOpen(false)} style={{ color: yvesBlue, fontWeight: 500, fontSize: "1.1rem" }}>What Does Noesis Mean?</Link>

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
              <div style={{ marginLeft: "1rem", marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                <Link href="/services" onClick={() => setOpen(false)} style={{ color: yvesBlue, fontSize: "1rem" }}>Services</Link>
                <Link href="/areas" onClick={() => setOpen(false)} style={{ color: yvesBlue, fontSize: "1rem" }}> Transformation Pathways</Link>
                <Link href="/noesis-methods" onClick={() => setOpen(false)} style={{ color: yvesBlue, fontSize: "1rem" }}>The Noesis Approach</Link>
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
              <div style={{ marginLeft: "1rem", marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                <Link href="/student-services" onClick={() => setOpen(false)} style={{ color: yvesBlue, fontSize: "1rem" }}>Services</Link>
                <Link href="/student-areas" onClick={() => setOpen(false)} style={{ color: yvesBlue, fontSize: "1rem" }}> Transformation Pathways</Link>
                <Link href="/student-methods" onClick={() => setOpen(false)} style={{ color: yvesBlue, fontSize: "1rem" }}>The Noesis Method</Link>
              </div>
            )}
          </div>

          {/* Other */}
          <Link href="/for-students" onClick={() => setOpen(false)} style={{ color: yvesBlue, fontWeight: 500, fontSize: "1.1rem" }}>Insights</Link>
          <Link href="/faq" onClick={() => setOpen(false)} style={{ color: yvesBlue, fontWeight: 500, fontSize: "1.1rem" }}>FAQ</Link>
          <Link href="/contact" onClick={() => setOpen(false)} style={{ color: yvesBlue, fontWeight: 500, fontSize: "1.1rem" }}>Contact</Link>
         
        </div>
      )}
    </>
  );
}

/* === Essay Sections === */
function EssaySections() {
  const sectionStyle = {
    marginBottom: "4rem",
  };

 const headingStyle = {
  fontSize: "1.8rem",
  fontWeight: "700",
  marginBottom: "1rem",
  color: "#F4C430", // ✅ Soft Saffron
};

const subheadingStyle = {
  fontSize: "1.4rem",
  fontWeight: "600",
  marginBottom: "0.8rem",
  color: "#F4C430", // ✅ Soft Saffron
};


  const paragraphStyle = {
    marginBottom: "1.5rem",
  };

  return (
    <>
      {/* Intro */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: false, amount: 0.4 }}
        style={sectionStyle}
      >
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
      </motion.section>

      {/* Origins */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: false, amount: 0.4 }}
        style={sectionStyle}
      >
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
      </motion.section>

      {/* Noesis in Practice */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: false, amount: 0.4 }}
        style={sectionStyle}
      >
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
      </motion.section>
      {/* The Five Words of Noesis */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: false, amount: 0.4 }}
        style={sectionStyle}
      >
        <h2 style={headingStyle}>The Five Words of Noesis</h2>
        <p style={paragraphStyle}>
          To make Noesis tangible, we distill it into five guiding words:
        </p>
        <p style={paragraphStyle}>
          <strong>1. Structured</strong> — Growth requires a framework. Without
          structure, insight dissipates into scattered thoughts. Structure provides
          rhythm, boundaries, and continuity. It is the scaffolding that holds
          insight long enough to be shaped into action.
        </p>
        <p style={paragraphStyle}>
          <strong>2. Insight</strong> — Change begins with awareness. Insight is the
          spark of clarity that reveals possibilities otherwise hidden. It is the
          moment when a vague unease becomes a precise understanding, when noise
          becomes signal.
        </p>
        <p style={paragraphStyle}>
          <strong>3. Guiding</strong> — Knowledge is directional. Without
          orientation, it drifts. To guide is to point knowledge toward a goal,
          aligning it with values and purpose. Guidance turns insight into a
          compass, not a collection of facts.
        </p>
        <p style={paragraphStyle}>
          <strong>4. Purposeful</strong> — Action is hollow unless it connects to
          meaning. Purposefulness ensures that behavior is not random but resonates
          with one’s deepest motivations and commitments. It binds action to
          intention.
        </p>
        <p style={paragraphStyle}>
          <strong>5. Action</strong> — Insight only matters if lived out. Action is
          the final step that completes the cycle of Noesis: thought turning into
          life, reflection manifesting as forward motion.
        </p>
        <p style={paragraphStyle}>
          Together, these five words describe Noesis not as a static definition but
          as a process of transformation.
        </p>
      </motion.section>

      {/* Pause and Reflect */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: false, amount: 0.4 }}
        style={sectionStyle}
      >
        <h2 style={headingStyle}>Pause and Reflect</h2>
        <p style={paragraphStyle}>
          Noesis is not merely a concept—it is an invitation. To engage with it is
          to slow down and notice where your own cycles of thought either empower or
          trap you.
        </p>
        <p style={paragraphStyle}>Pause for a moment as you read:</p>
        <ul style={{ marginLeft: "1.5rem", marginBottom: "1.5rem" }}>
          <li>Where in your life do you notice cycles of overthinking or hesitation?</li>
          <li>What insight have you had recently that you have not yet acted upon?</li>
          <li>
            How could structured reflection move you closer to clarity and
            momentum?
          </li>
          <li>What does it mean, for you, to act purposefully?</li>
        </ul>
        <p style={paragraphStyle}>
          These are not abstract questions. They are openings—small but powerful
          acts of Noesis. They represent the bridge between knowing and doing,
          between clarity and life lived fully.
        </p>
      </motion.section>

      {/* Why It Matters */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4
         }}
        viewport={{ once: false, amount: 0.4 }}
        style={sectionStyle}
      >
        <h2 style={headingStyle}>Why It Matters</h2>
        <p style={paragraphStyle}>
          We live in a time saturated with distraction, acceleration, and pressure
          to perform. Many feel overwhelmed by information yet under-equipped with
          clarity. This paradox—the more we know, the less we act—is precisely where
          Noesis becomes vital.
        </p>
        <p style={paragraphStyle}>
          Noesis matters because it restores balance. It reminds us that thought is
          not complete until it guides action, and knowledge is not sufficient until
          it becomes lived experience. It challenges us to move beyond passive
          reflection and into structured, purposeful transformation.
        </p>
        <p style={paragraphStyle}>
          At <strong>Noesis Systems</strong>, this is the heartbeat of our work:
        </p>
        <ul style={{ marginLeft: "1.5rem", marginBottom: "1.5rem" }}>
          <li>Helping individuals transform anxiety into clarity.</li>
          <li>Building sustainable habits that hold under pressure.</li>
          <li>
            Generating the momentum necessary to achieve meaningful progress.
          </li>
        </ul>
        <p style={paragraphStyle}>
          Noesis offers a counterweight to the noise of the world—a way of thinking
          and acting that brings coherence, resilience, and direction.
        </p>
      </motion.section>

      {/* Conclusion */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: false, amount: 0.4 }}
        style={sectionStyle}
      >
        <h2 style={headingStyle}>Conclusion: The Living Meaning of Noesis</h2>
        <p style={paragraphStyle}>
          Defining <em>Noesis</em> is not about reducing it to a single sentence but
          about recognizing its role as a living principle. From the ancient Greek
          philosophers who saw it as the highest form of knowledge, to modern
          thinkers who see it as the act of consciousness itself, Noesis has always
          pointed to a deeper truth: clarity is transformative when it is embodied.
        </p>
        <p style={paragraphStyle}>
          For you, the reader, the question is not only “What does Noesis mean?” but
          “How will Noesis live in me?” Will insight remain an idea, or will it
          become action? Will reflection stay abstract, or will it guide your next
          step?
        </p>
        <p style={paragraphStyle}>
          In every moment of hesitation, in every cycle of overthinking, Noesis
          offers a path forward: structure, insight, guidance, purpose, and action.
          It is both definition and invitation—an ancient word with timeless
          relevance, and a living process that continues to shape lives today.
        </p>
            {/* Footer */}
      <footer
  style={{
    background: "rgba(0,0,0,0.05)",
    color: "#FFFFFF",   // ✅ White text
    textAlign: "center",
    padding: "1rem",
    fontSize: "0.85rem",
    marginTop: "4rem",
  }}
>
  © 2025 Anthoni McElrath, Noesis Systems LLC. All rights reserved.
</footer>
      </motion.section>
    </>
  );
}
