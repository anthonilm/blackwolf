"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";

import { HEADER_HEIGHT } from "@/lib/constants";

export default function StudentMethodsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  const taupe = "#7A6C61";
  const yvesBlue = "#0018A8";
  const carmine = "#960018";
  const ivory = "#F5F0FA"; // soft lavender

  // Redirect mobile users straight to the PDF
  useEffect(() => {
    setMounted(true);

    const ua = navigator.userAgent || navigator.vendor || "";
    const isMobile = /android|iphone|ipad|mobile/i.test(ua);

    if (isMobile) {
      router.replace("/student-methods-mobile");
    }
  }, [router]);

  if (!mounted) return null; // prevents hydration mismatch flicker

  return (
    <div
      ref={containerRef}
      className="student-methods-page"
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
}

.panelCols {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.panelBody {
  font-size: 16pt;       /* restored body size */
  line-height: 1.65;
  color: #0F1C2E;
  max-width: 70ch;
}

.getList li {
  position: relative;
  padding-left: 28px;
  line-height: 1.5;
  font-size: 16pt;       /* restored list size */
  color: #0F1C2E;
}

.panelRight {
  margin-top: 2rem;
  text-align: center;
}

.phaseBig {
  font-family: Georgia, serif;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: clamp(42px, 8vw, 112px);
  color: ${taupe};
  white-space: nowrap;
  opacity: 0.2;
}

/* On large screens, STEP moves to side */
@media (min-width: 1024px) {
  .panelCols {
    display: grid;
    grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
    gap: 2rem;
    align-items: center;
  }

  .panelRight {
    margin-top: 0;
    text-align: right;
  }

  .phaseBig {
    opacity: 0.4;
  }
}

        }
        .progress {
          height: 2px;
          margin: 16px 2rem 0;
          background: linear-gradient(90deg, ${carmine} 0 36%, ${yvesBlue} 36% 100%);
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

        @media print {
          .student-methods-page {
            overflow: visible !important;
            height: auto !important;
          }
          .student-methods-page .railTrack {
            display: block !important;
            width: 100% !important;
            overflow: visible !important;
          }
          .student-methods-page .panel {
            display: block !important;
            width: 100% !important;
            min-height: auto !important;
            page-break-inside: avoid !important;
            padding: 2rem 1.5rem !important;
            break-inside: avoid !important;
          }
          .student-methods-page .panelRight {
            position: relative !important;
            top: auto !important;
            right: auto !important;
            transform: none !important;
            text-align: center !important;
            margin-top: 1rem !important;
          }
          .student-methods-page .phaseBig {
            font-size: 2rem !important;
            opacity: 0.5 !important;
            display: block !important;
            text-align: center !important;
            margin-bottom: 1rem !important;
          }
          .student-methods-page .progress {
            display: none !important;
          }
          .student-methods-page section {
            max-width: 100% !important;
            margin: 0 auto !important;
          }
          .student-methods-page p,
          .student-methods-page h1,
          .student-methods-page h2,
          .student-methods-page h4 {
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
    <h1
      style={{
        fontSize: "4rem",
        fontWeight: 700,
        letterSpacing: "0.08em",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      STUDENT SUCCESS SYSTEMS
      <span style={{ fontSize: "1.5rem", verticalAlign: "super", color: yvesBlue }}>©</span>
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
              Empower students to claim control of their learning process.
            </h2>
            <p style={{ fontSize: "25px", lineHeight: 1.7 }}>
              This approach is designed to help students stabilize performance,
              regulate themselves, and pursue higher goals consistently.
              It equips them with behavioral models, environmental awareness,
              and practical strategies that turn stress and confusion into
              structure and confidence.
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
                  <p className="phaseTag">STEP 1</p>
                  <h4 className="panelKicker">Discovery & Map</h4>
                  <p className="panelBody">
                    Each student begins with a diagnostic session that maps strengths, challenges,
                    and habits. We look at how stress, environment, and daily rhythms shape learning.
                    This produces a personalized roadmap that identifies where to focus energy for the
                    greatest impact.
                  </p>
                  <p className="getTitle">What you’ll get</p>
                  <ul className="getList">
                    <li>A clear snapshot of current learning patterns</li>
                    <li>Identification of stressors and strengths</li>
                    <li>A tailored roadmap for next steps</li>
                  </ul>
                </div>
                <div className="panelRight" aria-hidden="true">
                  <span className="phaseBig">STEP 1</span>
                </div>
              </div>
            </article>

            {/* Phase 2 */}
            <article className="panel">
              <div className="panelCols">
                <div className="panelLeft">
                  <p className="phaseTag">STEP 2</p>
                  <h4 className="panelKicker">Skill Foundations</h4>
                  <p className="panelBody">
                    Students begin building practical skill sets—executive function routines,
                    focus practices, and study rhythms. They learn behavioral modeling,
                    discover their optimal learning environments, and establish confidence
                    in their ability to adapt and succeed.
                  </p>
                  <p className="getTitle">What you’ll get</p>
                  <ul className="getList">
                    <li>Transferable study and focus strategies</li>
                    <li>Behavioral awareness and self-regulation</li>
                    <li>Early wins that boost confidence</li>
                  </ul>
                </div>
                <div className="panelRight" aria-hidden="true">
                  <span className="phaseBig">STEP 2</span>
                </div>
              </div>
            </article>

            {/* Phase 3 */}
            <article className="panel">
              <div className="panelCols">
                <div className="panelLeft">
                  <p className="phaseTag">STEP 3</p>
                  <h4 className="panelKicker">Resilience & Persistence</h4>
                  <p className="panelBody">
                    Through ongoing coaching, students practice stress regulation,
                    recovery habits, and persistence strategies. This builds resilience,
                    helping them maintain focus and momentum across weeks and semesters,
                    even when conditions are unstable.
                  </p>
                  <p className="getTitle">What you’ll get</p>
                  <ul className="getList">
                    <li>Stress recovery and regulation practices</li>
                    <li>Adaptive strategies for setbacks</li>
                    <li>Confidence in long-term sustainability</li>
                  </ul>
                </div>
                <div className="panelRight" aria-hidden="true">
                  <span className="phaseBig">STEP 3</span>
                </div>
              </div>
            </article>

            {/* Phase 4 */}
            <article className="panel">
              <div className="panelCols">
                <div className="panelLeft">
                  <p className="phaseTag">STEP 4</p>
                  <h4 className="panelKicker">Outcomes & Lifelong Tools</h4>
                  <p className="panelBody">
                    By the end of the process, students carry durable systems they can apply
                    in any environment. They leave with transferrable routines, emotional
                    steadiness, and confidence in their ability to manage demands across
                    academics and life.
                  </p>
                  <p className="getTitle">What you’ll get</p>
                  <ul className="getList">
                    <li>Durable habits and cognitive routines</li>
                    <li>Tools to stabilize performance across contexts</li>
                    <li>A sense of confidence and control in learning</li>
                  </ul>
                </div>
                <div className="panelRight" aria-hidden="true">
                  <span className="phaseBig">STEP 4</span>
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
                { num: 1, title: "Behavioral Modeling", desc: "Guide students to recognize how their habits and emotional regulation affect learning." },
                { num: 2, title: "Learning-Environment Discovery", desc: "Help students identify conditions where they perform best and reproduce them." },
                { num: 3, title: "Confidence & Control", desc: "Build belief in their ability to adapt and excel regardless of environment." },
                { num: 4, title: "Practical Skill Development", desc: "Teach usable, transferable skills like study rhythms, recall strategies, and focus practices." },
                { num: 5, title: "Resilience Coaching", desc: "Strengthen persistence through stress regulation and recovery practices." },
                { num: 6, title: "Accountability Systems", desc: "Support routines that reduce procrastination and build momentum." },
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
                Student Success Systems are designed to empower learners by
                equipping them with internal tools that transcend classroom
                structures. The goal is not remediation, but confidence and
                independence in learning.
              </p>
              <p>
                This approach respects school systems and therapy boundaries
                while providing students with strategies they can apply
                immediately. Whether dealing with stress, underperformance,
                or exam anxiety, the work reinforces clarity, resilience,
                and self-direction.
              </p>
              <p>We focus on four essentials:</p>
              <ul style={{ marginTop: "0.5rem", paddingLeft: "1.2rem" }}>
                <li>
                  <strong>Executive function</strong> – structuring time and
                  tasks into manageable rhythms.
                </li>
                <li>
                  <strong>Stress regulation</strong> – calming protocols that
                  restore composure during demands.
                </li>
                <li>
                  <strong>Study systems</strong> – repeatable methods that
                  support recall and confidence under pressure.
                </li>
                <li>
                  <strong>Adaptive persistence</strong> – habits that sustain
                  progress through setbacks.
                </li>
              </ul>
              <p>
                Students leave with skills and systems that not only improve
                academic performance but also strengthen lifelong cognitive
                resilience.
              </p>
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
              Students today face pressure from academics, family expectations,
              and unpredictable environments. These conditions can overwhelm
              focus, drain energy, and lead to underperformance. Student Success
              Systems provide a structured framework that restores rhythm,
              direction, and confidence.
            </p>
            <p>
              Each process begins by identifying how stress, fatigue, and
              distractions affect daily learning routines. From there,
              strategies are built to turn tension into usable energy.
              Students learn to organize, regulate, and adapt—building
              habits that protect focus and resilience. The goal is always
              forward momentum: helping students convert challenges into
              behaviors that sustain growth across school and life.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

// === Menu Component (same visuals) ===
/* Yves Blue Hamburger Menu */
function Menu() {
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState<{ [key: string]: boolean }>({});
  const menuRef = useRef<HTMLDivElement>(null);
  const yvesBlue = "#0018A8";

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
      {/* Yves Blue Hamburger */}
      <div style={{ position: "fixed", top: 8, left: 8, zIndex: 1100 }}>
        <button
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

      {/* Lead-optimized menu */}
      {open && (
        <div
          ref={menuRef}
          style={{
            position: "fixed",
            top: 60,
            left: 8,
            minWidth: "260px",
            background: "rgba(255,255,255,0.15)",
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
              color: yvesBlue,
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
              background: "rgba(255,255,255,0.25)",
              marginBottom: "1rem",
            }}
          />

          <Link href="/" onClick={() => setOpen(false)} style={{ color: yvesBlue }}>
            Home
          </Link>
          <Link href="/services" onClick={() => setOpen(false)} style={{ color: yvesBlue }}>
            Mental Health Services
          </Link>
          <Link href="/areas" onClick={() => setOpen(false)} style={{ color: yvesBlue }}>
            Transformation Pathways
          </Link>
          <Link href="/noesis-methods" onClick={() => setOpen(false)} style={{ color: yvesBlue }}>
            The Noesis Approach
          </Link>
          <Link href="/about" onClick={() => setOpen(false)} style={{ color: yvesBlue }}>
            About Anthoni
          </Link>

          {/* Student Success Systems */}
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
