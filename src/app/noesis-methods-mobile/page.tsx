"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import { HEADER_HEIGHT } from "@/lib/constants";

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [showPhases, setShowPhases] = useState(false);
  const [showApproach, setShowApproach] = useState(false);

  const taupe = "#7A6C61";
  const yvesBlue = "#0018A8";
  const ivory = "#F5F0FA"; // soft lavender

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      ref={containerRef}
      className="noesis-methods-page"
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

      <Menu />

      <main
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
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
    fontSize: "2rem",
    fontWeight: 700,
    letterSpacing: "0.08em",
  }}
>
  THE NOESIS APPROACH{" "}
  <span style={{ fontSize: "0.9rem", verticalAlign: "super" }}>©</span>
</h1>
        </section>

        {/* ABOUT */}
        <section
          style={{
            minHeight: "60vh",
            padding: "2rem 1rem",
            background: "linear-gradient(to bottom, #F5F0FA, #FFFFFF)",
            fontSize: "1rem",
            lineHeight: 1.5,
            color: "#0F1C2E",
          }}
        >
          <p>
            The world’s pressures reach into daily life, disrupting focus, draining energy, and unsettling stability. My work provides a structured framework that restores rhythm and direction—helping people regain composure and carry momentum through uncertainty. These challenges aren’t treated as distractions from growth but as material for the work itself: conditions to be recognized, adapted to, and navigated with steadiness.
          </p>
          <br />
          <p>
            Each process begins with close attention to how anxiety, fatigue, and stress appear in daily routines. From there, we design individualized strategies that turn tension into generative energy. This means building habits that protect focus, practices that renew resilience, and systems that sustain purpose. The aim is always forward movement: converting anxious intensity into patterns of behavior that support creativity, productivity, and a sustained sense of betterment.
          </p>
        </section>

        {/* INTRO */}
        <section
          style={{
            minHeight: "30vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem 1rem",
            background: "linear-gradient(to bottom, #FFFFFF, #F5F0FA)",
            color: "#0F1C2E",
            textAlign: "left",
          }}
        >
          <h2 style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>
            Create the conditions you need to achieve and sustain your optimal mental performance.
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.6,
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            Opportunities don’t become real until the mind is steady and the body follows suit. When anxiety and imbalance cloud perception, even the best chances can slip past unseen. My role is to help people cultivate the conditions—internally and externally—that make opportunities visible, and to build the readiness and confidence to step toward them when they appear.
          </p>
        </section>

        {/* METHODS SECTION with TOGGLE */}
        <section
          style={{
            padding: "2rem 1rem",
            background: "linear-gradient(to bottom, #F5F0FA, #FFFFFF)",
            fontSize: "1rem",
            lineHeight: 1.5,
          }}
        >
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            The Approach
          </h2>

          <div style={{ display: "grid", gap: "1rem" }}>
            {[
              { num: 1, title: "Readiness", desc: "Confidence and steadiness under pressure." },
              { num: 2, title: "Assessment", desc: "Clarity on the mental and emotional drivers of performance." },
              { num: 3, title: "Skills", desc: "Practices that stabilize, regulate, and sustain energy." },
              { num: 4, title: "Plan", desc: "A framework tailored to personal rhythms and needs." },
              { num: 5, title: "Support", desc: "Ongoing refinements that strengthen alignment over time." },
              { num: 6, title: "Habits", desc: "Structures that protect well-being and extend creative momentum." },
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
                fontSize: "1.1rem",
                fontWeight: 500,
                color: yvesBlue,
                border: `2px solid ${yvesBlue}`,
                borderRadius: "6px",
                padding: "0.6rem 1.2rem",
                background: "transparent",
                cursor: "pointer",
              }}
            >
              {showApproach ? "Hide Full Approach" : "See Full Approach"}
            </button>
          </div>

          {showApproach && (
            <div style={{ marginTop: "2rem", fontSize: "1rem", lineHeight: 1.6 }}>
              <p>
                The Noesis Approach draws from psychology and behavioral science
                to steady the mind and strengthen daily rhythms. It is built
                around practical tools that bring clarity, regulate energy, and
                support consistent action—so demands feel less consuming and
                progress feels more sustainable.
              </p>
              <p>
                Through ongoing conversations and simple tracking, we notice how
                stress, motivation, and performance patterns shape your days.
                From there, we build strategies that are direct, realistic, and
                easy to hold—restoring balance, reinforcing structure, and making
                follow-through feel natural.
              </p>
              <p>We focus on three essentials:</p>
              <ul style={{ marginTop: "0.5rem", paddingLeft: "1.2rem" }}>
                <li>
                  <strong>Organizational systems</strong> – practical routines
                  that lighten mental load.
                </li>
                <li>
                  <strong>Emotional regulation</strong> – composure and focus
                  under pressure.
                </li>
                <li>
                  <strong>Cognitive load management</strong> – preventing
                  overwhelm and sustaining clarity.
                </li>
              </ul>
              <p>
                Clients leave with systems and habits that support stability,
                protect well-being, and create reliable momentum in both work and
                life.
              </p>
            </div>
          )}
        </section>

        {/* PHASES TOGGLE */}
        <section
          style={{
            minHeight: "30vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem 1rem",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>
            THERE ARE 4 CORE PHASES WE WILL TRACK
          </h2>
          <button
            onClick={() => setShowPhases(!showPhases)}
            style={{
              fontSize: "1.25rem",
              fontWeight: 500,
              color: yvesBlue,
              border: `2px solid ${yvesBlue}`,
              borderRadius: "6px",
              padding: "0.8rem 1.4rem",
              background: "transparent",
              cursor: "pointer",
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
              <h4 className="panelKicker">Diagnostic &amp; Map</h4>
              <p className="panelBody">
                In our first step, you’ll get a clear snapshot of where you are
                right now. A short COM-B intake highlights what’s supporting you
                and what’s draining you, so we can see the patterns shaping your
                stress, focus, and follow-through. This session is
                interactive—you’ll have space to reflect, ask questions, and
                explore how your thoughts and emotions connect, leaving with
                language for what’s happening inside and insights to prepare you
                for the next steps.
              </p>
              <p className="getTitle">What you’ll get</p>
              <ul className="getList">
                <li>A clear picture of what’s helping and what’s draining you</li>
                <li>Priority areas to lighten the mental load</li>
                <li>A calm, structured starting point</li>
              </ul>
            </article>

            <article className="panel">
              <p className="phaseTag">PHASE 1.5</p>
              <h4 className="panelKicker">Audit Week</h4>
              <p className="panelBody">
                After the first session, you’ll track real-life patterns—sleep,
                energy, mood, actions, and disruptions—so we can see how your
                daily rhythms connect to your mental load. In this step, we
                review your COM-B results, talk through your goals, and decide
                which IEP track feels right for you. This is the moment you
                choose what habits and actions you want to change in order to
                find clarity, relief, and forward momentum. By the end of the
                week, you’ll have a clear view of what drives your effectiveness
                and a decision-ready plan for what comes next.
              </p>
              <p className="getTitle">What you’ll get</p>
              <ul className="getList">
                <li>A snapshot of your current rhythms</li>
                <li>Clarity on what’s fueling fatigue or calm</li>
                <li>Simple cues for where to focus first</li>
              </ul>
            </article>

            <article className="panel">
              <p className="phaseTag">PHASE 2</p>
              <h4 className="panelKicker">IEP &amp; Track</h4>
              <p className="panelBody">
                The IEP provides a structured plan based on your assessment
                results and goals. Six tracks are available: Stabilization First
                restores daily routines and reduces overwhelm. Emotional
                Processing focuses on how environment and stressors affect mood,
                helping you identify triggers and build healthier responses.
                Motivation Rebuild reconnects you with values and direction when
                drive feels low. Capability Expansion develops attention, memory,
                and executive function. Environmental Alignment ensures your
                surroundings reinforce progress. Identity Integration reduces
                inner conflict by aligning roles and behavior. Each track offers
                targeted tools that support mental health and establish
                consistent patterns for steady function and sustainable
                performance.
              </p>
              <p className="getTitle">What you’ll get</p>
              <ul className="getList">
                <li>A tailored, low-friction plan that feels doable</li>
                <li>Environmental tweaks that make life feel lighter</li>
                <li>A realistic pace to rebuild confidence and control</li>
              </ul>
            </article>

            <article className="panel">
              <p className="phaseTag">PHASE 3</p>
              <h4 className="panelKicker">Activation</h4>
              <p className="panelBody">
                Weekly cycles introduce small, focused changes to habits, time
                use, and daily patterns. Each adjustment is designed to support
                emotional regulation, lighten mental load, and make progress feel
                manageable. We track a few key signals that confirm stability,
                build reliability, and keep momentum visible.
              </p>
              <p className="getTitle">What you’ll get</p>
              <ul className="getList">
                <li>Gentle weekly steps that fit your capacity</li>
                <li>Quick wins to boost confidence and stability</li>
                <li>Tracking that shows progress, even on hard days</li>
              </ul>
            </article>

            <article className="panel">
              <p className="phaseTag">PHASE 4</p>
              <h4 className="panelKicker">Outcomes</h4>
              <p className="panelBody">
                By this stage, the process has reoriented your mind and routines
                toward your most effective mental and cognitive functioning.
                You’ll have patterns, behaviors, and tools that are tailored to
                your identity, context, and conditions.
              </p>
              <p className="getTitle">What you’ll get</p>
              <ul className="getList">
                <li>A clear sense of what’s working and why</li>
                <li>
                  Tools and systems designed around you that protect mental and
                  emotional energy while supporting optimal function
                </li>
                <li>A forward plan that feels safe and achievable</li>
              </ul>
            </article>
          </section>
        )}
      </main>
    </div>
  );
}

/* Menu */
//* Menu */
/* Yves Blue Hamburger Menu (Always Yves Blue) */
function Menu() {
  const yvesBlue = "#0018A8";
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
          <Link
            href="/"
            onClick={() => setOpen(false)}
            style={{ color: yvesBlue, fontWeight: 500, fontSize: "1.1rem" }}
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            style={{ color: yvesBlue, fontWeight: 500, fontSize: "1.1rem" }}
          >
            About
          </Link>
                <Link
  href="/noesis"
  onClick={() => setOpen(false)}
  style={{ color: yvesBlue, fontWeight: 500, fontSize: "1.1rem" }}
>
  What Does Noesis Mean?
</Link>

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
              <div
                style={{
                  marginLeft: "1rem",
                  marginTop: "0.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.8rem",
                }}
              >
                <Link
                  href="/services"
                  onClick={() => setOpen(false)}
                  style={{ color: yvesBlue, fontSize: "1rem" }}
                >
                  Services
                </Link>
                <Link
                  href="/areas"
                  onClick={() => setOpen(false)}
                  style={{ color: yvesBlue, fontSize: "1rem" }}
                >
                 Transformation Pathways
                </Link>
                <Link
                  href="/noesis-methods"
                  onClick={() => setOpen(false)}
                  style={{ color: yvesBlue, fontSize: "1rem" }}
                >
                  The Noesis Approach
                </Link>
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
              <div
                style={{
                  marginLeft: "1rem",
                  marginTop: "0.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.8rem",
                }}
              >
                <Link
                  href="/student-services"
                  onClick={() => setOpen(false)}
                  style={{ color: yvesBlue, fontSize: "1rem" }}
                >
                  Services
                </Link>
                <Link
                  href="/student-areas"
                  onClick={() => setOpen(false)}
                  style={{ color: yvesBlue, fontSize: "1rem" }}
                >
                   Transformation Pathways
                </Link>
                <Link
                  href="/student-methods"
                  onClick={() => setOpen(false)}
                  style={{ color: yvesBlue, fontSize: "1rem" }}
                >
                  The Noesis Method
                </Link>
              </div>
            )}
          </div>

          {/* Other */}
          <Link
            href="/for-students"
            onClick={() => setOpen(false)}
            style={{ color: yvesBlue, fontWeight: 500, fontSize: "1.1rem" }}
          >
            Insights
          </Link>
          <Link
            href="/faq"
            onClick={() => setOpen(false)}
            style={{ color: yvesBlue, fontWeight: 500, fontSize: "1.1rem" }}
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            style={{ color: yvesBlue, fontWeight: 500, fontSize: "1.1rem" }}
          >
            Contact
          </Link>
          
        </div>
      )}
    </>
  );
}
