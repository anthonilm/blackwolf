"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";

import { HEADER_HEIGHT } from "@/lib/constants";

export default function NoesisMethodsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

 const taupe = "#5E4C41";   // darker, earthier taupe
const yvesBlue = "#001078"; // deeper Yves Blue
const carmine = "#6E0012";  // darker carmine
const ivory = "#E0D8EA";    // deeper lavender-ivory

  // Redirect mobile users straight to the PDF
  useEffect(() => {
    setMounted(true);

    const ua = navigator.userAgent || navigator.vendor || "";
    const isMobile = /android|iphone|ipad|mobile/i.test(ua);

    if (isMobile) {
      router.replace("/noesis-methods-mobile");
    }
  }, [router]);

  if (!mounted) return null; // prevents hydration mismatch flicker

  return (
    <div
      ref={containerRef}
      className="noesis-methods-page"
      style={{
        height: "100vh",
        display: "grid",
        gridTemplateRows: "auto 1fr",
        fontFamily: `"Georgia", "Times New Roman", serif`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Liquid overlay */}
     <div
  style={{
    position: "absolute",
    inset: 0,
    background: `radial-gradient(circle at 20% 20%, ${yvesBlue}55, transparent 70%),
                 radial-gradient(circle at 80% 40%, ${ivory}40, transparent 70%),
                 radial-gradient(circle at 50% 80%, #D9C9E140, transparent 70%)`,
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
        .rail {
          position: relative;
          margin: 2rem 0;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
        }
        .railTrack {
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: 100vw;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
        }
        .panel {
          position: relative;
          scroll-snap-align: start;
          padding: 4rem 2rem;
          min-height: 80vh;
          background: linear-gradient(180deg, #fff, #fff0);
        }
        @media (min-width: 1024px) {
          .panel {
            display: grid;
            grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
            gap: 2rem;
            align-items: center;
            text-align: left;
          }
        }
        .panelLeft { max-width: 720px; margin: 0 auto; }
        .phaseTag {
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-size: 12px;
          color: ${taupe};
        }
        .panelKicker {
          font-weight: 600;
          font-size: 1.5rem;
          margin: 4px 0 8px 0;
          color: ${yvesBlue};
        }
        .panelBody {
          font-size: 20pt;
          line-height: 1.65;
          color: #0F1C2E;
          max-width: 70ch;
        }
        .panelRight {
          position: absolute;
          top: 50%;
          right: 2rem;
          transform: translateY(-50%);
          pointer-events: none;
          text-align: right;
        }
        .phaseBig {
          font-family: Georgia, serif;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-size: clamp(42px, 8vw, 112px);
          color: ${taupe};
          white-space: nowrap;
        }
        .progress {
          height: 2px;
          margin: 16px 2rem 0;
         background: linear-gradient(to bottom, #E0D8EA, #F2F2F2);
          opacity: 0.6;
        }
        .getTitle {
          margin-top: 10px;
          font-size: 14px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: ${taupe};
        }
        .getList {
          list-style: none;
          margin: 8px 0 0 0;
          padding: 0;
          display: grid;
          gap: 6px;
          max-width: 70ch;
        }
        .getList li {
          position: relative;
          padding-left: 28px;
          line-height: 1.5;
          font-size: 20pt;
          color: #0F1C2E;
        }
        .getList li::before {
          content: "✔";
          position: absolute;
          left: 0;
          top: 0.05em;
          font-size: 1em;
          color: ${yvesBlue};
        }

        /* === PRINT OVERRIDES FOR PDF EXPORT === */
        @media print {
          .noesis-methods-page {
            overflow: visible !important;
            height: auto !important;
          }

          .noesis-methods-page .railTrack {
            display: block !important;
            width: 100% !important;
            overflow: visible !important;
          }

          .noesis-methods-page .panel {
            display: block !important;
            width: 100% !important;
            min-height: auto !important;
            page-break-inside: avoid !important;
            padding: 2rem 1.5rem !important;
            break-inside: avoid !important;
          }

          .noesis-methods-page .panelRight {
            position: relative !important;
            top: auto !important;
            right: auto !important;
            transform: none !important;
            text-align: center !important;
            margin-top: 1rem !important;
          }

          .noesis-methods-page .phaseBig {
            font-size: 2rem !important;
            opacity: 0.5 !important;
            display: block !important;
            text-align: center !important;
            margin-bottom: 1rem !important;
          }

          .noesis-methods-page .progress {
            display: none !important;
          }

          .noesis-methods-page section {
            max-width: 100% !important;
            margin: 0 auto !important;
          }

          .noesis-methods-page p,
          .noesis-methods-page h1,
          .noesis-methods-page h2,
          .noesis-methods-page h4 {
            text-align: left !important;
          }
        }
      `}</style>

      <Menu />

      <main
        style={{
          position: "relative",
          zIndex: 1,
          height: "100%",
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
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
  <div style={{ display: "flex", gap: "0.4rem" }}>
    <div style={{ width: "10px", height: "60px", backgroundColor: yvesBlue }} />
    <div style={{ width: "10px", height: "60px", backgroundColor: yvesBlue }} />
  </div>
  <h1 style={{ fontSize: "4rem", fontWeight: 700, letterSpacing: "0.08em" }}>
    THE NOESIS APPROACH{" "}
    <span style={{ fontSize: "1.2rem", verticalAlign: "super" }}>©</span>
  </h1>
</div>
        </section>

        {/* INTRO */}
        <section
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "4rem 2rem",
            background: "linear-gradient(to bottom, #F5F0FA, #FFFFFF)",
            color: "#0F1C2E",
          }}
        >
          <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "left" }}>
            <h2 style={{ fontSize: "3.5rem", marginBottom: "1.5rem" }}>
              Create the conditions you need to achieve and sustain your optimal mental performance.
            </h2>
            <p style={{ fontSize: "25px", lineHeight: 1.7 }}>
Opportunities don’t become real until the mind is steady and the body follows suit. When anxiety and imbalance cloud perception, even the best chances can slip past unseen. My role is to help people cultivate the conditions—internally and externally—that make opportunities visible, and to build the readiness and confidence to step toward them when they appear.
             
            </p>
          </div>
        </section>

        {/* PHASES */}
        <section className="rail" aria-label="Method phases">
          <div className="railTrack">
            {/* Phase 1 */}
            <article className="panel">
              <div className="panelCols">
                <div className="panelLeft">
                  <p className="phaseTag">PHASE 1</p>
                  <h4 className="panelKicker">Diagnostic &amp; Map</h4>
                  <p className="panelBody">
                    In our first step, you’ll get a clear snapshot of where you are right now. A short COM-B intake highlights what’s supporting you and what’s draining you, so we can see the patterns shaping your stress, focus, and follow-through. This session is interactive—you’ll have space to reflect, ask questions, and explore how your thoughts and emotions connect, leaving with language for what’s happening inside and insights to prepare you for the next steps.
                  </p>
                  <p className="getTitle">What you’ll get</p>
                  <ul className="getList">
                    <li>A clear picture of what’s helping and what’s draining you</li>
                    <li>Priority areas to lighten the mental load</li>
                    <li>A calm, structured starting point</li>
                  </ul>
                </div>
                <div className="panelRight" aria-hidden="true">
                  <span className="phaseBig">PHASE 1</span>
                </div>
              </div>
            </article>

            {/* Phase 1.5 */}
            <article className="panel">
              <div className="panelCols">
                <div className="panelLeft">
                  <p className="phaseTag">PHASE 1.5</p>
                  <h4 className="panelKicker">Audit Week</h4>
                  <p className="panelBody">
                    After the first session, you’ll track real-life patterns—sleep, energy, mood, actions, and disruptions—so we can see how your daily rhythms connect to your mental load. In this step, we review your COM-B results, talk through your goals, and decide which IEP track feels right for you. This is the moment you choose what habits and actions you want to change in order to find clarity, relief, and forward momentum. By the end of the week, you’ll have a clear view of what drives your effectiveness and a decision-ready plan for what comes next
                  </p>
                  <p className="getTitle">What you’ll get</p>
                  <ul className="getList">
                    <li>A snapshot of your current rhythms</li>
                    <li>Clarity on what’s fueling fatigue or calm</li>
                    <li>Simple cues for where to focus first</li>
                  </ul>
                </div>
                <div className="panelRight" aria-hidden="true">
                  <span className="phaseBig">PHASE 1.5</span>
                </div>
              </div>
            </article>

            {/* Phase 2 */}
            <article className="panel">
              <div className="panelCols">
                <div className="panelLeft">
                  <p className="phaseTag">PHASE 2</p>
                  <h4 className="panelKicker">IEP &amp; Track</h4>
                  <p className="panelBody">
                    The IEP provides a structured plan based on your assessment results and goals. Six tracks are available: Stabilization First restores daily routines and reduces overwhelm. Emotional Processing focuses on how environment and stressors affect mood, helping you identify triggers and build healthier responses. Motivation Rebuild reconnects you with values and direction when drive feels low. Capability Expansion develops attention, memory, and executive function. Environmental Alignment ensures your surroundings reinforce progress. Identity Integration reduces inner conflict by aligning roles and behavior. Each track offers targeted tools that support mental health and establish consistent patterns for steady function and sustainable performance.
                  </p>
                  <p className="getTitle">What you’ll get</p>
                  <ul className="getList">
                    <li>A tailored, low-friction plan that feels doable</li>
                    <li>Environmental tweaks that make life feel lighter</li>
                    <li>A realistic pace to rebuild confidence and control</li>
                  </ul>
                </div>
                <div className="panelRight" aria-hidden="true">
                  <span className="phaseBig">PHASE 2</span>
                </div>
              </div>
            </article>

            {/* Phase 3 */}
            <article className="panel">
              <div className="panelCols">
                <div className="panelLeft">
                  <p className="phaseTag">PHASE 3</p>
                  <h4 className="panelKicker">Activation</h4>
                  <p className="panelBody">
                    Weekly cycles introduce small, focused changes to habits, time use, and daily patterns. Each adjustment is designed to support emotional regulation, lighten mental load, and make progress feel manageable. We track a few key signals that confirm stability, build reliability, and keep momentum visible.
                  </p>
                  <p className="getTitle">What you’ll get</p>
                  <ul className="getList">
                    <li>Gentle weekly steps that fit your capacity</li>
                    <li>Quick wins to boost confidence and stability</li>
                    <li>Tracking that shows progress, even on hard days</li>
                  </ul>
                </div>
                <div className="panelRight" aria-hidden="true">
                  <span className="phaseBig">PHASE 3</span>
                </div>
              </div>
            </article>

            {/* Phase 4 */}
            <article className="panel">
              <div className="panelCols">
                <div className="panelLeft">
                  <p className="phaseTag">PHASE 4</p>
                  <h4 className="panelKicker">Outcomes</h4>
                  <p className="panelBody">
                    By this stage, the process has reoriented your mind and routines toward your most effective mental and cognitive functioning. You’ll have patterns, behaviors, and tools that are tailored to your identity, context, and conditions.
                  </p>
                  <p className="getTitle">What you’ll get</p>
                  <ul className="getList">
                    <li>A clear sense of what’s working and why</li>
                    <li>Tools and systems designed around you that protect mental and emotional energy while supporting optimal functione</li>
                    <li>A forward plan that feels safe and achievable</li>
                  </ul>
                </div>
                <div className="panelRight" aria-hidden="true">
                  <span className="phaseBig">PHASE 4</span>
                </div>
              </div>
            </article>
          </div>
          <div className="progress" aria-hidden="true" />
        </section>

        {/* METHODS SECTION */}
        <section
          style={{
            minHeight: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "3rem 2rem",
            background: "linear-gradient(to bottom, #F5F0FA, #FFFFFF)",
            color: "#0F1C2E",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2.5rem",
              maxWidth: "1100px",
              width: "100%",
            }}
          >
            {/* Left side tiles */}
            <div style={{ display: "grid", gap: "1.25rem" }}>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 600 }}>The Approach</h2>
              {[
                { num: 1, title: "Performance Readiness", desc: "Build confidence and resilience to handle high-pressure and daily challenges." },
                { num: 2, title: "Targeted Assessment", desc: "Identify the emotional and mental factors affecting clarity, focus, and execution." },
                { num: 3, title: "Evidence-Based Skills", desc: "Learn strategies that strengthen stability under real-world demands." },
                { num: 4, title: "Personalized Plan", desc: "Create coping systems tailored to your unique needs." },
                { num: 5, title: "Ongoing Support", desc: "Weekly guidance and refinements to keep progress steady." },
                { num: 6, title: "Habit Fortification", desc: "Protect mental well-being and prevent burnout." },
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
                    fontSize: "1rem",
                  }}
                >
                  <div
                    style={{
                      flexShrink: 0,
                      background: yvesBlue,
                      color: "#fff",
                      fontWeight: 600,
                      borderRadius: "50%",
                      width: "32px",
                      height: "32px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
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

            {/* Right side narrative */}
            <div style={{ fontSize: "20px", lineHeight: 1.7, textAlign: "left" }}>
              <p>
The Noesis Approach draws from psychology and behavioral science to steady the mind and strengthen daily rhythms. It is built around practical tools that bring clarity, regulate energy, and support consistent action—so demands feel less consuming and progress feels more sustainable.              </p>
              <p>
Through ongoing conversations and simple tracking, we notice how stress, motivation, and performance patterns shape your days. From there, we build strategies that are direct, realistic, and easy to hold—restoring balance, reinforcing structure, and making follow-through feel natural.              </p>
              <p>We focus on three essentials:</p>
              <ul style={{ marginTop: "0.5rem", paddingLeft: "1.2rem" }}>
                <li>
                  <strong>Organizational systems</strong> – practical routines that lighten mental load.
                </li>
                <li>
                  <strong>Emotional regulation</strong> – composure and focus under pressure.
                </li>
                <li>
                  <strong>Cognitive load management</strong> – preventing overwhelm and sustaining clarity.
                </li>
              </ul>
              <p>
Clients leave with systems and habits that support stability, protect well-being, and create reliable momentum in both work and life.              </p>
            </div>
          </div>
        </section>
        

        {/* ABOUT SECTION */}
        <section
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "4rem 2rem",
            background: "linear-gradient(to bottom, #F5F0FA, #FFFFFF)",
            color: "#0F1C2E",
            fontSize: "20pt",
            lineHeight: 1.65,
          }}
        >
          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              display: "grid",
              gap: "2rem",
              textAlign: "left",
            }}
          >
            <p>
The world’s pressures reach into daily life, disrupting focus, draining energy, and unsettling stability. My work provides a structured framework that restores rhythm and direction—helping people regain composure and carry momentum through uncertainty. These challenges aren’t treated as distractions from growth but as material for the work itself: conditions to be recognized, adapted to, and navigated with steadiness.            </p>
            <p>
Each process begins with close attention to how anxiety, fatigue, and stress appear in daily routines. From there, we design individualized strategies that turn tension into generative energy. This means building habits that protect focus, practices that renew resilience, and systems that sustain purpose. The aim is always forward movement: converting anxious intensity into patterns of behavior that support creativity, productivity, and a sustained sense of betterment. </p>
          </div>
        </section>
      </main>
    </div>
  );
}


//* Menu */
//* Menu */
/* Yves Blue Hamburger Menu */
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
                  Areas I Help With
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
                  Areas I Help With
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
