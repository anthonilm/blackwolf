"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export const HEADER_HEIGHT = 80;

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(idx);
          }
        });
      },
      { threshold: 0.6 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Palette
  const terracotta = "#A4573D";
  const taupe = "#7A6C61";
  const umber = "#4A2C2A";
  const footballGrey = "#566573";
  const blueVoid = "#1B2A41";
  const line = "rgba(0,0,0,0.08)";

  const sections = [
    <Hero terracotta={terracotta} umber={umber} taupe={taupe} />,
    <WhoWeAre taupe={taupe} />,
    <AboutMe terracotta={terracotta} taupe={taupe} />,
    <BookNow blueVoid={blueVoid} footballGrey={footballGrey} terracotta={terracotta} />,
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
        background:
          "linear-gradient(to bottom, #FAF4E6 0%, #EDE6DA 25%, #DCD6EB 50%, #B0AFAF 75%, #1B2A41 100%)",
        fontFamily: `"Georgia", "Times New Roman", serif`, // ✅ unified font
      }}
    >
      <Header scrolled={activeIndex > 0} umber={umber} line={line} />

      <main
        style={{
          height: "100vh",
          overflowY: "scroll",
          scrollSnapType: "y mandatory",
          scrollBehavior: "smooth",
          fontFamily: `"Georgia", "Times New Roman", serif`, // ✅ unified
        }}
      >
        {sections.map((Section, idx) => (
          <section
            key={idx}
            ref={(el: HTMLDivElement | null) => {
              sectionsRef.current[idx] = el;
            }}
            data-index={idx}
            style={{
              scrollSnapAlign: "start",
              height: "100vh",
              transition: "transform 0.5s ease, opacity 0.5s ease",
              transform: activeIndex === idx ? "scale(1)" : "scale(0.9)",
              opacity: activeIndex === idx ? 1 : 0.6,
              display: "flex",
              flexDirection: "column",
              background: "transparent",
              fontFamily: `"Georgia", "Times New Roman", serif`, // ✅ unified
            }}
          >
            {Section}
          </section>
        ))}
      </main>

      <Footer footballGrey={footballGrey} />
    </div>
  );
}

/* ---------------- Header ---------------- */
function Header({ scrolled, umber, line }: any) {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(255,255,255,0.7)",
        backdropFilter: "blur(6px)",
        borderBottom: `1px solid ${line}`,
        boxShadow: scrolled ? "0 1px 6px rgba(0,0,0,0.06)" : "none",
        fontFamily: `"Georgia", "Times New Roman", serif`,
      }}
    >
      <div
        style={{
          height: HEADER_HEIGHT,
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          padding: "0 16px",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <div style={{ display: "flex", gap: 18 }}>
          <Link href="/about" style={nav(umber)}>ABOUT</Link>
          <Link href="/newsletter" style={nav(umber)}>INSIGHTS</Link>
          <Link href="/noesis-methods" style={nav(umber)}>HOW I WORK</Link>
        </div>
        <div
          style={{
            textAlign: "center",
            fontWeight: 900,
            letterSpacing: "0.04em",
            color: umber,
            fontSize: 22,
          }}
        >
          <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
            NOESIS
          </Link>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 24 }}>
          <Link href="/areas" style={nav(umber)}>AREAS I HELP WITH</Link>
          <Link href="/services" style={nav(umber)}>SERVICES</Link>
          <Link href="/for-students" style={nav(umber)}>RESOURCES</Link>
          <Link href="/contact" style={nav(umber)}>CONTACT</Link>
        </div>
      </div>
    </header>
  );
}

function nav(color: string): React.CSSProperties {
  return {
    color,
    textDecoration: "none",
    fontWeight: 800,
    letterSpacing: "0.02em",
    fontSize: 14,
    fontFamily: `"Georgia", "Times New Roman", serif`,
  };
}

/* ---------------- Hero ---------------- */
function Hero({ terracotta, umber, taupe }: any) {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "2rem 4rem",
        color: umber,
        position: "relative",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "2rem" }}>
        <div style={{ display: "flex", gap: "0.4rem" }}>
          <div style={{ width: "15px", height: "140px", backgroundColor: terracotta }} />
          <div style={{ width: "15px", height: "140px", backgroundColor: terracotta }} />
        </div>
        <h1 style={{ fontSize: "3.2rem", fontWeight: 700, letterSpacing: "0.08em", whiteSpace: "nowrap" }}>
          NOESIS MENTAL HEALTH CARE
        </h1>
      </div>
      <p
        style={{
          fontSize: "1.4rem",
          textTransform: "uppercase",
          letterSpacing: "0.2em",
          lineHeight: 1.6,
          maxWidth: "700px",
          marginLeft: "3.2rem",
          color: taupe,
        }}
      >
        Transforming anxities into clarity, momentum, and creative flow.
      </p>
    </div>
  );
}

/* ---------------- Who We Are ---------------- */
function WhoWeAre({ taupe }: any) {
  return (
    <div
      style={{
        flex: 1,
        padding: "4rem 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "3.2rem",
          marginBottom: "3rem",
          fontWeight: 800,
          color: "#333",
        }}
      >
        Mental health shapes every part of your quality of life.
      </h2>

      <div
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "2rem",
          padding: "0 2rem",
          scrollSnapType: "x mandatory",
        }}
      >
        {[
          ["Practice Ethos", "I believe resilience is built through structure, not just willpower. My work helps you develop steadiness under pressure."],
          ["Model & Method", "We use short measures and structured planning to see what drains you and what supports you. Weekly sessions focus on building clarity and execution."],
          ["Access & Affordability", "Sessions are $90, with your first session free to see if this approach feels right."],
          ["Performance Outcomes", "Progress is tracked by your actions and habits, not just mood—helping you see real shifts in clarity, steadiness, and confidence."],
          ["Ethics & Integrity", "Care that is culturally aware, identity-respecting, and grounded in boundaries that protect your trust and privacy."],
          ["Student & Family Support", "I provide tools for parents and students navigating stress, learning demands, and daily behavioral friction."],
          ["Supporting Marginalized Clients", "Affordable, structurally aware systems for BIPOC, LGBTQ+, and under-resourced clients who face added barriers."],
          ["Strategic Vision", "To help you build clarity, structure, and resilience—so your challenges can become energy for growth."],
        ].map(([title, text], i) => (
          <div
            key={i}
            style={{
              flex: "0 0 340px",
              height: "400px",
              scrollSnapAlign: "start",
              borderRadius: "16px",
              padding: "2rem",
              background: `linear-gradient(to bottom right, ${taupe}, #6B5C55)`,
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
              fontFamily: `"Georgia", "Times New Roman", serif`,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-8px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 20px rgba(0,0,0,0.25)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            <h3 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "1rem" }}>{title}</h3>
            <p style={{ fontSize: "1rem", lineHeight: 1.6 }}>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- About Me ---------------- */
function AboutMe({ terracotta, taupe }: any) {
  return (
    <div
      style={{
        flex: 1,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "2rem",
        alignItems: "center",
        padding: "0 2rem",
        color: "#fff",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="/about-headshot.jpg"
          alt="Anthoni McElrath"
          style={{
            width: "100%",
            maxWidth: "360px",
            borderRadius: "12px",
            objectFit: "cover",
            boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
          }}
        />
      </div>
      <div>
        <h2 style={{ fontSize: "2rem", marginBottom: "0.5rem", fontWeight: 700 }}>
          Anthoni McElrath
        </h2>
        <h3 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
          MA, Licensed Integrative Mental Health Coach
        </h3>
        <h4 style={{ fontStyle: "italic", marginBottom: "1rem" }}>
          Founder & Consultant
        </h4>
        <p style={{ lineHeight: 1.6, maxWidth: "500px" }}>
          I help people transform instability, uncertainty, and emotional
          demands into clear, creative and generative energy. My approach blends
          psychology, behavioral science, and integrative mental health care
          that respects your identity and lived reality.
        </p>
      </div>
    </div>
  );
}

/* ---------------- Book Now ---------------- */
function BookNow({ terracotta }: any) {
  return (
    <div
      style={{
        flex: 1,
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h2 style={{ fontSize: "3.2rem", fontWeight: 800, marginBottom: "2rem" }}>
        Book Your First Free Session
      </h2>
      <div style={{ display: "flex", gap: "2rem" }}>
        <button
          style={{
            padding: "1rem 2rem",
            borderRadius: "8px",
            border: "none",
            background: terracotta,
            color: "#fff",
            fontWeight: 700,
            cursor: "pointer",
            fontFamily: `"Georgia", "Times New Roman", serif`,
          }}
        >
          Book Now
        </button>
        <button
          style={{
            padding: "1rem 2rem",
            borderRadius: "8px",
            border: "2px solid #fff",
            background: "transparent",
            color: "#fff",
            fontWeight: 700,
            cursor: "pointer",
            fontFamily: `"Georgia", "Times New Roman", serif`,
          }}
        >
          View Services
        </button>
      </div>
    </div>
  );
}

/* ---------------- Footer ---------------- */
function Footer({ footballGrey }: any) {
  return (
    <footer
      style={{
        background: "transparent",
        color: "#fff",
        padding: "56px 24px 24px",
        fontFamily: `"Georgia", "Times New Roman", serif`,
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h3 style={{ fontSize: 18, fontWeight: 900, marginBottom: "1rem" }}>
          WEEKLY INSIGHTS STRAIGHT TO YOUR INBOX.
        </h3>
        <form
          onSubmit={(e) => e.preventDefault()}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr auto",
            gap: 24,
            marginBottom: 14,
            alignItems: "end",
          }}
        >
          <input
            name="name"
            type="text"
            placeholder="NAME"
            style={{
              height: 52,
              border: "1px solid #ccc",
              background: "#fff",
              color: "#000",
              padding: "0 18px",
              fontFamily: `"Georgia", "Times New Roman", serif`,
            }}
          />
          <input
            name="email"
            type="email"
            placeholder="EMAIL"
            style={{
              height: 52,
              border: "1px solid #ccc",
              background: "#fff",
              color: "#000",
              padding: "0 18px",
              fontFamily: `"Georgia", "Times New Roman", serif`,
            }}
          />
          <button
            type="submit"
            style={{
              height: 60,
              padding: "0 28px",
              border: `1px solid #fff`,
              background: "transparent",
              fontWeight: 800,
              cursor: "pointer",
              color: "#fff",
              transition: "all 0.3s ease",
              fontFamily: `"Georgia", "Times New Roman", serif`,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#fff";
              (e.currentTarget as HTMLElement).style.color = footballGrey;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "#fff";
            }}
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </footer>
  );
}
