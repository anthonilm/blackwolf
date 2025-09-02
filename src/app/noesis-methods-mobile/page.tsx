"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export const HEADER_HEIGHT = 80;

export default function NoesisMethodsMobilePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [showPhases, setShowPhases] = useState(false);

  const taupe = "#7A6C61";
  const yvesBlue = "#0018A8";
  const carmine = "#960018";
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
        .panel {
          padding: 1.5rem 1rem;
          background: linear-gradient(180deg, #fff, #fff0);
        }
        .phaseTag {
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-size: 0.75rem;
          color: ${taupe};
        }
        .panelKicker {
          font-weight: 600;
          font-size: 1.15rem;
          margin: 4px 0 8px 0;
          color: ${yvesBlue};
        }
        .panelBody {
          font-size: 1rem;
          line-height: 1.6;
          color: #0F1C2E;
        }
        .getList {
          list-style: none;
          margin: 8px 0 0 0;
          padding: 0;
          display: grid;
          gap: 6px;
        }
        .getList li {
          position: relative;
          padding-left: 20px;
          line-height: 1.5;
          font-size: 1rem;
          color: #0F1C2E;
        }
        .getList li::before {
          content: "✔";
          position: absolute;
          left: 0;
          top: 0.05em;
          font-size: 0.9em;
          color: ${yvesBlue};
        }
      `}</style>

      <Menu yvesBlue={yvesBlue} ivory={ivory} />

      <main
        style={{
          position: "relative",
          zIndex: 1,
          overflowY: "auto",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {/* HERO */}
        <section
          style={{
            padding: "2.5rem 1rem 1.5rem 1rem",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <div style={{ display: "flex", gap: "0.3rem" }}>
              <div style={{ width: "6px", height: "40px", backgroundColor: yvesBlue }} />
              <div style={{ width: "6px", height: "40px", backgroundColor: yvesBlue }} />
            </div>
            <h1 style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "0.08em" }}>
              THE NOESIS APPROACH
            </h1>
          </div>
        </section>

        {/* ABOUT */}
        <section
          style={{
            padding: "1.5rem 1rem",
            background: "linear-gradient(to bottom, #F5F0FA, #FFFFFF)",
            fontSize: "1rem",
            lineHeight: 1.6,
            color: "#0F1C2E",
          }}
        >
          <p style={{ marginBottom: "1.2rem" }}>
            Mental health is deeply affected by today’s shifting political, social, and
            environmental realities. I provide structured behavioral and cognitive support
            that helps people strengthen clarity, regulation, and execution even when
            external conditions feel unstable.
          </p>
          <p>
            Care begins with understanding. Through short, reliable measures and weekly
            observations, we track how instability shows up in your life and how it impacts
            anxiety, depression, or diminished support. From there, I guide you in building
            personalized strategies that transform emotional strain into creative and
            generative energy.
          </p>
        </section>

        {/* INTRO */}
        <section
          style={{
            padding: "1.5rem 1rem",
            background: "linear-gradient(to bottom, #FFFFFF, #F5F0FA)",
            color: "#0F1C2E",
          }}
        >
          <h2 style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>
            Create the conditions where your challenges become energy for growth.
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.6, marginBottom: "1rem" }}>
            We start by understanding the patterns shaping your thoughts, emotions, and
            daily rhythms. From there, we create a plan that brings stability, resilience,
            and a greater sense of balance.
          </p>
          <p style={{ fontSize: "1rem", lineHeight: 1.6 }}>
            Our work focuses on building routines that calm the nervous system, strengthen
            regulation, and create reliable structure in your day.
          </p>
        </section>

        {/* METHODS SECTION */}
        <section
          style={{
            padding: "1.5rem 1rem",
            background: "linear-gradient(to bottom, #F5F0FA, #FFFFFF)",
            fontSize: "1rem",
            lineHeight: 1.6,
          }}
        >
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>The Approach</h2>
          <ul style={{ paddingLeft: "1.2rem", marginBottom: "1rem" }}>
            <li>Performance Readiness — confidence under pressure</li>
            <li>Targeted Assessment — clarity on mental factors</li>
            <li>Evidence-Based Skills — stability strategies</li>
            <li>Personalized Plan — coping systems</li>
            <li>Ongoing Support — weekly refinements</li>
            <li>Habit Fortification — protect well-being</li>
          </ul>
          <p>
            Clients leave with reliable systems and habits that improve performance, protect
            health, and raise quality of life.
          </p>
        </section>

        {/* PHASES TOGGLE + CONTENT */}
        <section
          style={{
            padding: "1.5rem 1rem",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "1.75rem", marginBottom: "1.5rem" }}>
            THERE ARE 4 CORE PHASES WE WILL TRACK
          </h2>
          <button
            onClick={() => setShowPhases(!showPhases)}
            style={{
              fontSize: "1.2rem",
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

          {showPhases && (
            <div style={{ marginTop: "2rem", display: "grid", gap: "1.5rem" }}>
              {/* === FULL ORIGINAL PHASES KEPT INTACT === */}
              <article className="panel">
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
              </article>

              <article className="panel">
                <p className="phaseTag">PHASE 1.5</p>
                <h4 className="panelKicker">Audit Week</h4>
                <p className="panelBody">
                  After the first session, you’ll track real-life patterns—sleep, energy, mood, actions, and disruptions—so we can see how your daily rhythms connect to your mental load. In this step, we review your COM-B results, talk through your goals, and decide which IEP track feels right for you. This is the moment you choose what habits and actions you want to change in order to find clarity, relief, and forward momentum. By the end of the week, you’ll have a clear view of what drives your effectiveness and a decision-ready plan for what comes next.
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
                  The IEP provides a structured plan based on your assessment results and goals. Six tracks are available: Stabilization First restores daily routines and reduces overwhelm. Emotional Processing focuses on how environment and stressors affect mood, helping you identify triggers and build healthier responses. Motivation Rebuild reconnects you with values and direction when drive feels low. Capability Expansion develops attention, memory, and executive function. Environmental Alignment ensures your surroundings reinforce progress. Identity Integration reduces inner conflict by aligning roles and behavior. Each track offers targeted tools that support mental health and establish consistent patterns for steady function and sustainable performance.
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
                  Weekly cycles introduce small, focused changes to habits, time use, and daily patterns. Each adjustment is designed to support emotional regulation, lighten mental load, and make progress feel manageable. We track a few key signals that confirm stability, build reliability, and keep momentum visible.
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
                  By this stage, the process has reoriented your mind and routines toward your most effective mental and cognitive functioning. You’ll have patterns, behaviors, and tools that are tailored to your identity, context, and conditions.
                </p>
                <p className="getTitle">What you’ll get</p>
                <ul className="getList">
                  <li>A clear sense of what’s working and why</li>
                  <li>Tools and systems designed around you that protect mental and emotional energy while supporting optimal function</li>
                  <li>A forward plan that feels safe and achievable</li>
                </ul>
              </article>
            </div>
          )}
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
          style={{
            width: 40,
            height: 40,
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            gap: 6,
            border: "none",
            cursor: "pointer",
          }}
        >
          <span style={{ width: 24, height: 2, background: yvesBlue }} />
          <span style={{ width: 24, height: 2, background: yvesBlue }} />
          <span style={{ width: 24, height: 2, background: yvesBlue }} />
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
            { href: "/noesis-methods-mobile", label: "How I Work" },
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
                fontSize: "1rem",
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
