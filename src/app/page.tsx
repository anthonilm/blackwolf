"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export const HEADER_HEIGHT = 80;

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const panels = gsap.utils.toArray<HTMLElement>(".panel");
    const maxIndex = panels.length - 1;
    let currentIndex = 0;
    let isAnimating = false;

    gsap.set(panels[0], { z: 0, opacity: 1, scale: 1 });

    const goToPanel = (index: number) => {
      if (isAnimating) return;
      isAnimating = true;
      currentIndex = index;

      panels.forEach((panel, i) => {
        if (i === currentIndex) {
          gsap.to(panel, {
            z: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            onComplete: () => {
              isAnimating = false;
              updateProgress();
            },
          });
        } else {
          gsap.to(panel, {
            z: -2000,
            opacity: 0,
            scale: 0.85,
            duration: 1,
            ease: "power2.in",
          });
        }
      });
    };

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0 && currentIndex < maxIndex) {
        goToPanel(currentIndex + 1);
      } else if (e.deltaY < 0 && currentIndex > 0) {
        goToPanel(currentIndex - 1);
      }
    };

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" && currentIndex < maxIndex) {
        goToPanel(currentIndex + 1);
      } else if (e.key === "ArrowUp" && currentIndex > 0) {
        goToPanel(currentIndex - 1);
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      if (touchStartY - touchEndY > 50 && currentIndex < maxIndex) {
        goToPanel(currentIndex + 1);
      } else if (touchEndY - touchStartY > 50 && currentIndex > 0) {
        goToPanel(currentIndex - 1);
      }
    };

    const updateProgress = () => {
      const bar = document.querySelector<HTMLElement>(".scroll-progress");
      if (bar) {
        const percent = (currentIndex / maxIndex) * 100;
        bar.style.height = percent + "%";
      }
    };

    document.body.style.overflow = "hidden";

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("keydown", handleKey);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    updateProgress();

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  const taupe = "#7A6C61";
  const umber = "#4A2C2A";
  const yvesBlue = "#0018A8";
  const carmine = "#960018";
  const line = "rgba(0,0,0,0.08)";

  return (
    <div
      ref={containerRef}
      style={{
        height: "100vh",
        display: "grid",
        gridTemplateRows: "auto 1fr",
        background:
          "linear-gradient(to bottom, #FAF8F2 0%, #F2EDF9 35%, #E6E0F6 70%, #DCD6EB 85%, #CFCBE6 95%, #FFFFFF 100%)",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        fontFamily: `"Georgia", "Times New Roman", serif`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="liquid-overlay"
        style={{
          position: "fixed",
          inset: 0,
          background: `radial-gradient(circle at 20% 20%, ${yvesBlue}30, transparent 70%),
                       radial-gradient(circle at 80% 40%, ${carmine}30, transparent 70%),
                       radial-gradient(circle at 50% 80%, #FFFFFF40, transparent 70%)`,
          backgroundSize: "200% 200%",
          animation: "liquidMove 20s ease-in-out infinite alternate",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <style>{`
        @keyframes liquidMove {
          0% { background-position: 0% 0%, 100% 50%, 50% 100%; opacity: 0.9; }
          100% { background-position: 100% 100%, 0% 50%, 50% 0%; opacity: 1; }
        }
      `}</style>

      <Header scrolled={scrolled} umber={umber} line={line} />

      <main
        className="stage"
        style={{
          position: "relative",
          zIndex: 1,
          perspective: "1600px",
          transformStyle: "preserve-3d",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <div
          className="scrollbar"
          style={{
            position: "fixed",
            top: HEADER_HEIGHT,
            right: 10,
            width: "4px",
            height: `calc(100% - ${HEADER_HEIGHT}px - 60px)`,
            background: "rgba(0,0,0,0.05)",
            zIndex: 200,
          }}
        >
          <div
            className="scroll-progress"
            style={{
              width: "100%",
              height: "0%",
              background: yvesBlue,
              transition: "height 0.4s ease",
            }}
          />
        </div>

        <section className="panel">
          <Hero umber={umber} taupe={taupe} carmine={carmine} />
        </section>

        <section className="panel">
          <WhoWeAre carmine={carmine} />
        </section>

        <section className="panel">
          <AboutMe taupe={taupe} />
        </section>

        <section className="panel">
          <BookNow carmine={carmine} />
        </section>
      </main>
    </div>
  );
}

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

function Hero({ umber, taupe, carmine }: any) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (titleRef.current && subtitleRef.current) {
      gsap.to([titleRef.current, subtitleRef.current], {
        y: -10,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }
  }, []);

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 4rem",
        color: umber,
        position: "relative",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "2rem" }}>
        <div style={{ display: "flex", gap: "0.4rem" }}>
          <div style={{ width: "15px", height: "140px", backgroundColor: carmine }} />
          <div style={{ width: "15px", height: "140px", backgroundColor: carmine }} />
        </div>
        <h1
          ref={titleRef}
          style={{
            fontSize: "3.2rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            whiteSpace: "nowrap",
          }}
        >
          NOESIS MENTAL HEALTH CARE
        </h1>
      </div>
      <p
        ref={subtitleRef}
        style={{
          fontSize: "1.4rem",
          textTransform: "uppercase",
          letterSpacing: "0.2em",
          lineHeight: 1.6,
          maxWidth: "700px",
          color: taupe,
        }}
      >
        Transforming anxities into clarity, momentum, and creative flow.
      </p>
    </div>
  );
}

function WhoWeAre({ carmine }: any) {
  return (
    <div
      style={{
        flex: 1,
        padding: "4rem 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "3.2rem",
          marginBottom: "3rem",
          fontWeight: 800,
          color: carmine,
        }}
      >
        Mental health shapes every part of your quality of life.
      </h2>
    </div>
  );
}

function AboutMe({ taupe }: any) {
  return (
    <div
      style={{
        flex: 1,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "2rem",
        alignItems: "center",
        padding: "0 2rem",
        color: "#333",
        height: "100vh",
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
            boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
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

function BookNow({ carmine }: any) {
  return (
    <div
      style={{
        flex: 1,
        color: "#333",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "2rem",
        height: "100vh",
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
            background: carmine,
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
            border: `2px solid ${carmine}`,
            background: "transparent",
            color: carmine,
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
