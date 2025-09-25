"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [showPhases, setShowPhases] = useState(false);
  const [showApproach, setShowApproach] = useState(false);

  const taupe = "#7A6C61";
  const yvesBlue = "#0018A8";
  const ivory = "#F5F0FA";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      ref={containerRef}
      className="student-methods-page"
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateRows: "auto 1fr",
        fontFamily: `"Georgia", "Times New Roman", serif`,
        position: "relative",
        overflowX: "hidden",
        overflowY: "auto",
      }}
    >
      {/* Liquid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at 20% 20%, ${yvesBlue}30, transparent 70%),
                       radial-gradient(circle at 80% 40%, ${ivory}20, transparent 70%),
                       radial-gradient(circle at 50% 80%, #FFFFFF20, transparent 70%)`,
          backgroundSize: "200% 200%",
          animation: "liquidMove 6s ease-in-out infinite alternate",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <style>{`
        @keyframes liquidMove {
          0% { background-position: 0% 0%, 100% 50%, 50% 100%; opacity: 0.85; }
          100% { background-position: 100% 100%, 0% 50%, 50% 0%; opacity: 1; }
        }
        .panel { padding: 2rem 1rem; background: linear-gradient(180deg, #fff, #fff0); }
        .phaseTag { letter-spacing: 0.14em; text-transform: uppercase; font-size: 0.75rem; color: ${taupe}; }
        .panelKicker { font-weight: 600; font-size: 1.15rem; margin: 4px 0 8px 0; color: ${yvesBlue}; }
        .panelBody { font-size: 1rem; line-height: 1.5; color: #0F1C2E; }
        .getTitle { margin-top: 10px; font-size: 1rem; letter-spacing: 0.14em; text-transform: uppercase; color: ${taupe}; }
        .getList { list-style: none; margin: 8px 0 0 0; padding: 0; display: grid; gap: 6px; }
        .getList li { position: relative; padding-left: 20px; line-height: 1.4; font-size: 1rem; color: #0F1C2E; }
        .getList li::before { content: "✔"; position: absolute; left: 0; top: 0.05em; font-size: 0.9em; color: ${yvesBlue}; }
      `}</style>

      <Menu/>

      <main style={{ position: "relative", zIndex: 1 }}>
        {/* HERO */}
        <section
          style={{
            height: "25vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
            }}
          >
            STUDENT SUCCESS SYSTEMS{" "}
            <span style={{ fontSize: "0.9rem", verticalAlign: "super" }}>©</span>
          </h1>
        </section>

        {/* ABOUT (student context) */}
        <section
          style={{
            minHeight: "50vh",
            padding: "2rem 1rem",
            background: "linear-gradient(to bottom, #F5F0FA, #FFFFFF)",
            fontSize: "1rem",
            lineHeight: 1.6,
            color: "#0F1C2E",
          }}
        >
          <p>
            School environments create unique pressures—assignments pile up,
            exams demand peak focus, and energy fluctuates across weeks and
            semesters. This process is designed to restore rhythm and direction
            so students can manage their workload without burning out.
          </p>
          <br />
          <p>
            Each student begins by observing how stress, fatigue, and motivation
            affect their daily learning. From there, we build strategies that
            turn pressure into productive energy—habits that protect focus,
            routines that reduce overwhelm, and systems that sustain performance
            through exams, projects, and transitions.
          </p>
        </section>

        {/* INTRO */}
        <section
          style={{
            minHeight: "25vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem 1rem",
            textAlign: "left",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            Create the conditions you need to succeed in school and beyond.
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.6, maxWidth: "680px" }}>
            When stress and disorganization cloud thinking, opportunities to
            learn and excel slip by. Student Success Systems make those
            opportunities visible and achievable, building confidence and
            readiness to take action when it matters most.
          </p>
        </section>

        {/* METHODS SECTION with TOGGLE */}
        <section
          style={{
            padding: "2rem 1rem",
            background: "linear-gradient(to bottom, #F5F0FA, #FFFFFF)",
          }}
        >
          <h2 style={{ fontSize: "1.4rem", marginBottom: "1rem" }}>
            The Student Approach
          </h2>

          <div style={{ display: "grid", gap: "1rem" }}>
            {[
              { num: 1, title: "Readiness", desc: "Confidence and composure for exams, assignments, and deadlines." },
              { num: 2, title: "Assessment", desc: "Identifying strengths, gaps, and patterns in focus and study habits." },
              { num: 3, title: "Skills", desc: "Evidence-based methods for concentration, memory, and resilience." },
              { num: 4, title: "Plan", desc: "A structured roadmap tailored to learning goals and daily rhythms." },
              { num: 5, title: "Support", desc: "Ongoing check-ins to reinforce consistency and growth." },
              { num: 6, title: "Habits", desc: "Protective routines that sustain academic energy and reduce burnout." },
            ].map((item) => (
              <div
                key={item.num}
                style={{
                  background: "#fff",
                  padding: "1rem",
                  borderRadius: "6px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                  display: "flex",
                  gap: "0.8rem",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    background: yvesBlue,
                    color: "#fff",
                    fontWeight: 600,
                    borderRadius: "50%",
                    width: "28px",
                    height: "28px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.9rem",
                  }}
                >
                  {item.num}
                </div>
                <div>
                  <p style={{ fontWeight: 600, marginBottom: "0.2rem" }}>
                    {item.title}
                  </p>
                  <p style={{ fontSize: "0.95rem", margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <button
              onClick={() => setShowApproach(!showApproach)}
              style={{
                fontSize: "1rem",
                fontWeight: 500,
                color: yvesBlue,
                border: `2px solid ${yvesBlue}`,
                borderRadius: "6px",
                padding: "0.6rem 1.2rem",
                background: "transparent",
              }}
            >
              {showApproach ? "Hide Details" : "See Full Approach"}
            </button>
          </div>

          {showApproach && (
            <div style={{ marginTop: "1.5rem", fontSize: "1rem", lineHeight: 1.6 }}>
              <p>
                Student Success Systems draw from psychology and education
                science to steady the mind, simplify tasks, and strengthen
                learning rhythms. The aim is always progress that feels doable,
                sustainable, and confidence-building.
              </p>
              <p>
                Together we track stressors, build study systems, and design
                realistic strategies for exams, projects, and long-term goals.
              </p>
              <ul style={{ marginTop: "0.5rem", paddingLeft: "1.2rem" }}>
                <li>
                  <strong>Study systems</strong> – practical routines that
                  lighten cognitive load.
                </li>
                <li>
                  <strong>Emotional regulation</strong> – steady focus under
                  academic pressure.
                </li>
                <li>
                  <strong>Performance habits</strong> – tools to sustain energy
                  and momentum across the semester.
                </li>
              </ul>
              <p>
                Students leave with systems and skills that reduce stress,
                protect well-being, and support consistent performance.
              </p>
            </div>
          )}
        </section>

        {/* PHASES TOGGLE */}
        <section
          style={{
            minHeight: "25vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem 1rem",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "1.4rem", marginBottom: "1rem" }}>
            The 4 Core Phases
          </h2>
          <button
            onClick={() => setShowPhases(!showPhases)}
            style={{
              fontSize: "1rem",
              fontWeight: 500,
              color: yvesBlue,
              border: `2px solid ${yvesBlue}`,
              borderRadius: "6px",
              padding: "0.6rem 1.2rem",
              background: "transparent",
            }}
          >
            {showPhases ? "Hide Phases" : "See the 4 Phases"}
          </button>
        </section>

        {/* FULL PHASES CONTENT */}
        {showPhases && (
          <section style={{ display: "grid", gap: "1.5rem", padding: "1rem" }}>
            <article className="panel">
              <p className="phaseTag">PHASE 1</p>
              <h4 className="panelKicker">Diagnostic & Map</h4>
              <p className="panelBody">
                A short intake helps us see what supports you and what drains
                you. Together we map study habits, energy levels, and emotional
                triggers, leaving you with clear language and insights for what’s
                happening and where to focus.
              </p>
              <ul className="getList">
                <li>A picture of what’s helping and what’s holding you back</li>
                <li>Priority areas to reduce stress</li>
                <li>A structured starting point</li>
              </ul>
            </article>

            <article className="panel">
              <p className="phaseTag">PHASE 1.5</p>
              <h4 className="panelKicker">Audit Week</h4>
              <p className="panelBody">
                You’ll track real study-life rhythms—sleep, focus, mood, and
                distractions—so we can see how they connect to your mental load.
                We’ll review results, talk goals, and choose the right track for
                you.
              </p>
              <ul className="getList">
                <li>Snapshot of current learning rhythms</li>
                <li>Clarity on what drives fatigue or focus</li>
                <li>Simple cues for where to start</li>
              </ul>
            </article>

            <article className="panel">
              <p className="phaseTag">PHASE 2</p>
              <h4 className="panelKicker">IEP & Track</h4>
              <p className="panelBody">
                An Individual Engagement Plan tailored to your goals and
                assessment. Tracks range from Stabilization (restoring routines)
                to Motivation, Cognitive Skills, Environmental Alignment, and
                more. Each one provides focused tools for academic resilience and
                progress.
              </p>
              <ul className="getList">
                <li>A roadmap that feels achievable</li>
                <li>Study-environment tweaks to ease learning</li>
                <li>Steps paced for confidence and momentum</li>
              </ul>
            </article>

            <article className="panel">
              <p className="phaseTag">PHASE 3</p>
              <h4 className="panelKicker">Activation</h4>
              <p className="panelBody">
                Weekly steps focus on adjusting habits, study strategies, and
                self-regulation. Small wins build confidence, while tracking key
                signals keeps momentum visible.
              </p>
              <ul className="getList">
                <li>Manageable weekly adjustments</li>
                <li>Quick wins that reinforce motivation</li>
                <li>Tracking progress, even on hard weeks</li>
              </ul>
            </article>

            <article className="panel">
              <p className="phaseTag">PHASE 4</p>
              <h4 className="panelKicker">Outcomes</h4>
              <p className="panelBody">
                By this stage, students have structures and habits that match
                their learning style, sustain focus, and protect well-being for
                consistent achievement.
              </p>
              <ul className="getList">
                <li>Confidence in your learning process</li>
                <li>Protective systems for mental and emotional energy</li>
                <li>A plan for ongoing academic growth</li>
              </ul>
            </article>
          </section>
        )}
      </main>
    </div>
  );
}

/* Menu */
/* Yves Blue Hamburger Menu */
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
<Link href="/services" onClick={() => setOpen(false)} style={{ color: yvesBlue }}>
  Services
</Link>
<Link href="/areas" onClick={() => setOpen(false)} style={{ color: yvesBlue }}>
  Transformation Pathways
</Link>
<Link href="/noesis-methods" onClick={() => setOpen(false)} style={{ color: yvesBlue }}>
  The Noesis Approach
</Link>

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
