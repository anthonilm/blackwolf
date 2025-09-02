"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export const HEADER_HEIGHT = 80;

export default function NoesisMethodsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const taupe = "#7A6C61";
  const yvesBlue = "#0018A8";
  const carmine = "#960018";
  const ivory = "#F5F0FA"; // soft lavender

  return (
    <div
      ref={containerRef}
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
      `}</style>

      <Menu yvesBlue={yvesBlue} ivory={ivory} />

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
              THE NOESIS APPROACH
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
              Create the conditions where your challenges become energy for growth.
            </h2>
            <p style={{ fontSize: "25px", lineHeight: 1.7 }}>
              We start by understanding the patterns shaping your thoughts, emotions, and daily rhythms. From there, we create a plan that brings stability, resilience, and a greater sense of balance. Together, we look at how you manage stress, regulate emotions, stay organized, and connect with others—highlighting both strengths and the places that feel stuck.
            </p>
            <p style={{ fontSize: "25px", lineHeight: 1.7 }}>
              Our work focuses on building routines that calm the nervous system, strengthen regulation, and create reliable structure in your day. Step by step, we introduce strategies that are practical, evidence-based, and easy to use. The aim is simple: to help you feel grounded, reduce overwhelm, and sustain well-being in the areas of life that matter most.
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
                The Noesis Approach blends psychology and behavioral science to support mental health and strengthen daily function. My approach centers on practical tools that improve clarity, stabilize regulation, and sustain steady execution—so you can move through demands with greater consistency and confidence.
              </p>
              <p>
                Through structured assessments and weekly check-ins, we look at how stress, motivation, and performance patterns show up in your life. From there, we shape clear, manageable strategies that support emotional balance, restore structure, and make follow-through easier.
              </p>
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
                Clients leave with reliable systems and habits that improve performance, protect health, and raise quality of life.
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
              Mental health is deeply affected by today’s shifting political,
              social, and environmental realities. I provide structured behavioral
              and cognitive support that helps people strengthen clarity,
              regulation, and execution even when external conditions feel
              unstable. My work acknowledges the real weight of these pressures
              and focuses on giving you practical tools to ground yourself and
              sustain steady function.
            </p>
            <p>
              Care begins with understanding. Through short, reliable measures and
              ongoing weekly observations, we track how instability shows up in
              your life and how it impacts anxiety, depression, or diminished
              support. From there, I guide you in building personalized strategies
              that transform emotional strain into creative and generative
              energy—cultivating habits and systems that stabilize your mind,
              expand your resilience, and allow clarity and purpose to take root
              even under pressure.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

/* Menu */
function Menu({ yvesBlue, ivory }: any) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuRef.current) {
      if (open) {
        gsap.fromTo(menuRef.current, { y: -10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 });
      } else {
        gsap.to(menuRef.current, { y: -10, opacity: 0, duration: 0.3 });
      }
    }
  }, [open]);

  return (
    <>
      <div style={{ position: "fixed", top: 20, left: 20, zIndex: 1100 }}>
        <button
          onClick={() => setOpen(!open)}
          style={{ background: "transparent", border: "none", cursor: "pointer" }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ width: 24, height: 2, background: yvesBlue }} />
            <span style={{ width: 24, height: 2, background: yvesBlue }} />
            <span style={{ width: 24, height: 2, background: yvesBlue }} />
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
            padding: "1.5rem 2rem",
            borderRadius: "14px",
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem",
            zIndex: 1000,
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
