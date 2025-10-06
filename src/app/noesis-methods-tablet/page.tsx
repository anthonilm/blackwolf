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
  const ivory = "#F5F0FA";

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
                       radial-gradient(circle at 80% 40%, ${ivory}25, transparent 70%),
                       radial-gradient(circle at 50% 80%, #FFFFFF25, transparent 70%)`,
          backgroundSize: "200% 200%",
          animation: "liquidMove 6s ease-in-out infinite alternate",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <style>{`
        @keyframes liquidMove {
          0% { background-position: 0% 0%, 100% 50%, 50% 100%; opacity: 0.9; }
          100% { background-position: 100% 100%, 0% 50%, 50% 0%; opacity: 1; }
        }
        .panel { padding: 2.5rem 2rem; background: linear-gradient(180deg, #fff, #fff0); }
        .phaseTag { letter-spacing: 0.14em; text-transform: uppercase; font-size: 0.9rem; color: ${taupe}; }
        .panelKicker { font-weight: 600; font-size: 1.35rem; margin: 6px 0 10px 0; color: ${yvesBlue}; }
        .panelBody { font-size: 1.15rem; line-height: 1.55; color: #0F1C2E; }
        .getTitle { margin-top: 12px; font-size: 1.05rem; letter-spacing: 0.14em; text-transform: uppercase; color: ${taupe}; }
        .getList { list-style: none; margin: 10px 0 0 0; padding: 0; display: grid; gap: 8px; }
        .getList li { position: relative; padding-left: 24px; line-height: 1.5; font-size: 1.05rem; color: #0F1C2E; }
        .getList li::before { content: "✔"; position: absolute; left: 0; top: 0.05em; font-size: 1em; color: ${yvesBlue}; }
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
            height: "28vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "2.6rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
            }}
          >
            THE NOESIS APPROACH{" "}
            <span style={{ fontSize: "1.1rem", verticalAlign: "super" }}>©</span>
          </h1>
        </section>

        {/* ABOUT */}
        <section
          style={{
            minHeight: "65vh",
            padding: "2.5rem 2rem",
            background: "linear-gradient(to bottom, #F5F0FA, #FFFFFF)",
            fontSize: "1.1rem",
            lineHeight: 1.6,
            color: "#0F1C2E",
          }}
        >
          <p>
            The world’s pressures reach into daily life, disrupting focus, draining
            energy, and unsettling stability. My work provides a structured framework
            that restores rhythm and direction—helping people regain composure and
            carry momentum through uncertainty. These challenges aren’t treated as
            distractions from growth but as material for the work itself: conditions to
            be recognized, adapted to, and navigated with steadiness.
          </p>
          <br />
          <p>
            Each process begins with close attention to how anxiety, fatigue, and stress
            appear in daily routines. From there, we design individualized strategies
            that turn tension into generative energy. This means building habits that
            protect focus, practices that renew resilience, and systems that sustain
            purpose. The aim is always forward movement: converting anxious intensity
            into patterns of behavior that support creativity, productivity, and a
            sustained sense of betterment.
          </p>
        </section>
        {/* INTRO */}
        <section
          style={{
            minHeight: "35vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2.5rem 2rem",
            background: "linear-gradient(to bottom, #FFFFFF, #F5F0FA)",
            color: "#0F1C2E",
            textAlign: "left",
          }}
        >
          <h2 style={{ fontSize: "2.2rem", marginBottom: "1.2rem" }}>
            Create the conditions you need to achieve and sustain your optimal mental performance.
          </h2>
          <p
            style={{
              fontSize: "1.15rem",
              lineHeight: 1.65,
              maxWidth: "780px",
              margin: "0 auto",
            }}
          >
            Opportunities don’t become real until the mind is steady and the body follows
            suit. When anxiety and imbalance cloud perception, even the best chances can
            slip past unseen. My role is to help people cultivate the conditions—
            internally and externally—that make opportunities visible, and to build the
            readiness and confidence to step toward them when they appear.
          </p>
        </section>

        {/* METHODS SECTION with TOGGLE */}
        <section
          style={{
            padding: "2.5rem 2rem",
            background: "linear-gradient(to bottom, #F5F0FA, #FFFFFF)",
            fontSize: "1.1rem",
            lineHeight: 1.55,
          }}
        >
          <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>
            The Approach
          </h2>

          <div style={{ display: "grid", gap: "1.2rem" }}>
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
                  padding: "1.2rem",
                  borderRadius: "8px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  display: "flex",
                  gap: "1rem",
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
                    width: "34px",
                    height: "34px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1rem",
                  }}
                >
                  {item.num}
                </div>
                <div>
                  <p style={{ fontWeight: 600, marginBottom: "0.3rem", fontSize: "1.1rem" }}>
                    {item.title}
                  </p>
                  <p style={{ fontSize: "1rem", margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <button
              onClick={() => setShowApproach(!showApproach)}
              style={{
                fontSize: "1.2rem",
                fontWeight: 500,
                color: yvesBlue,
                border: `2px solid ${yvesBlue}`,
                borderRadius: "6px",
                padding: "0.7rem 1.4rem",
                background: "transparent",
                cursor: "pointer",
              }}
            >
              {showApproach ? "Hide Full Approach" : "See Full Approach"}
            </button>
          </div>

          {showApproach && (
            <div style={{ marginTop: "2.2rem", fontSize: "1.1rem", lineHeight: 1.65 }}>
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
              <ul style={{ marginTop: "0.5rem", paddingLeft: "1.4rem" }}>
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
            minHeight: "35vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "2.5rem 2rem",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>
            THERE ARE 4 CORE PHASES WE WILL TRACK
          </h2>
          <button
            onClick={() => setShowPhases(!showPhases)}
            style={{
              fontSize: "1.3rem",
              fontWeight: 500,
              color: yvesBlue,
              border: `2px solid ${yvesBlue}`,
              borderRadius: "6px",
              padding: "0.9rem 1.6rem",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            {showPhases ? "Hide Phases" : "See the 4 Phases"}
          </button>
        </section>

        {/* FULL PHASES CONTENT */}
        {showPhases && (
          <section style={{ display: "grid", gap: "2rem", padding: "1.5rem" }}>
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
          <Link href="/" onClick={() => setOpen(false)} style={{ color: yvesBlue }}>
            Home
          </Link>
          <Link href="/about" onClick={() => setOpen(false)} style={{ color: yvesBlue }}>
            About
          </Link>
          <Link href="/noesis" onClick={() => setOpen(false)} style={{ color: yvesBlue }}>
            What Does Noesis Mean?
          </Link>
          <Link href="/services" onClick={() => setOpen(false)} style={{ color: yvesBlue }}>
            Services
          </Link>
          <Link href="/areas" onClick={() => setOpen(false)} style={{ color: yvesBlue }}>
            Areas I Help You Overcome
          </Link>
          <Link href="/noesis-methods" onClick={() => setOpen(false)} style={{ color: yvesBlue }}>
            The Noesis Approach
          </Link>

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

