"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { usePathname } from "next/navigation";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const taupe = "#7A6C61";
  const yvesBlue = "#0018A8";
  const carmine = "#960018";
  const ivory = "#FFFFF0";

  const toggleFAQ = (index: string) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSections = [
    {
      title: "Questions Mental Health Coaching",
      questions: [
        {
          q: "What do I talk about in our first session?",
          a: "We’ll focus on where you feel stuck, what challenges you face in turning insight into action, and what you want to build or improve. The first session is about mapping where you are and identifying what tools and strategies will help you move forward.",
        },
        {
          q: "How often will I meet with you?",
          a: "Most clients begin weekly or biweekly. Over time, we’ll adjust frequency based on how consistently you’re applying tools and sustaining growth outside of sessions.",
        },
        {
          q: "How long will I continue ?",
          a: "This isn’t about endless meetings. It’s about gaining tools you can use to keep growing. Some people work with me for a short, intensive stretch; others stay longer to reinforce new behaviors until they feel fully sustained. The goal is to get you to a place where you no longer need me.",
        },
        {
          q: "Do you provide in person or virtual services?",
          a: "Yes. You can choose in-person in Chicago or remote online sessions. Both formats are designed to deliver tools and structured strategies you can immediately apply.",
        },
        {
          q: "What sorts of goals can you help me reach?",
          a: "I help people transform anxiety into action, structure their energy into creativity, and convert reflection into lasting progress. Goals may include improving focus, building consistent habits, strengthening emotional intelligence, boosting performance, and sustaining the feeling of betterment that comes from growth. Please refer to the Areas I Help With page for more information.",
        },
      ],
    },
    {
      title: "Investment and Costs",
      questions: [
        {
          q: "Do you take health insurance?",
          a: "No. These services are not medical treatment, and insurance does not apply. If affordability is your concern, please see my sliding scale options.",
        },
        {
          q: "Do you have a sliding scale?",
          a: "Yes. Rates are adjusted to ensure accessibility for those committed to growth, regardless of financial circumstances.",
        },
        {
          q: "Do you accept Medicaid or Medicare?",
          a: "No. These services are not covered under government health programs. If you are looking for affordability, my sliding scale provides that pathway.",
        },
      ],
    },
    {
      title: "Questions About Online Sessions",
      questions: [
        {
          q: "What is online coaching?",
          a: "Online coaching is a structured, tool-driven session conducted virtually. It allows you to access growth strategies from anywhere while maintaining the same quality and focus as in-person work.",
        },
        {
          q: "What will I need to participate?",
          a: "A private space, a steady internet connection, and a willingness to engage actively. You don’t just show up to talk — you’ll be learning and applying actionable tools.",
        },
        {
          q: "Are online sessions secure?",
          a: "Yes. Sessions are conducted over confidential, encrypted platforms to ensure privacy and focus.",
        },
        {
          q: "Do you provide coaching through e-mail or texting?",
          a: "Yes, under the 3-session and 6-session packages. My work requires active engagement. Texting and email support snot replace interactive live sessions. Email and text are for in-moment resources.",
        },
      ],
    },
  ];

  return (
    <div
      ref={containerRef}
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
        fontFamily: `"Georgia", "Times New Roman", serif`,
        position: "relative",
        overflow: "hidden",
        background: "#F4C430", // saffron base
      }}
    >
      {/* Liquid overlay */}
      <div
        className="liquid-overlay"
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at 20% 20%, #F4C430cc, transparent 70%),
                       radial-gradient(circle at 80% 40%, #FFD166cc, transparent 70%),
                       radial-gradient(circle at 50% 80%, #FFB347aa, transparent 70%)`,
          backgroundSize: "200% 200%",
          animation: "liquidMove 1.5s ease-in-out infinite alternate",
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

      <Menu />

      <main style={{ position: "relative", zIndex: 1, padding: "6rem 2rem" }}>
        {faqSections.map((section, sIdx) => (
          <section
            key={sIdx}
            style={{
              marginBottom: "3rem",
              maxWidth: "800px",
              marginLeft: "auto",
              marginRight: "auto",
              background: "rgba(255,255,255,0.8)",
              backdropFilter: "blur(10px)",
              borderRadius: "12px",
              padding: "2rem",
              boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
            }}
          >
            <h2
              style={{
                fontSize: "1.8rem",
                fontWeight: 700,
                textAlign: "center",
                marginBottom: "1.5rem",
                color: yvesBlue,
              }}
            >
              {section.title}
            </h2>

            {section.questions.map((faq, idx) => {
              const index = `${sIdx}-${idx}`;
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  style={{
                    borderBottom: "1px solid rgba(0,0,0,0.2)",
                    marginBottom: "1rem",
                  }}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: "1rem 0",
                      background: "transparent",
                      border: "none",
                      fontSize: "1.1rem",
                      fontWeight: 500,
                      cursor: "pointer",
                      color: "#333",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    {faq.q}
                    <span style={{ fontSize: "1.3rem" }}>
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div
                      style={{
                        padding: "0 0 1rem 0",
                        fontSize: "1rem",
                        lineHeight: 1.6,
                        color: taupe,
                      }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </section>
        ))}
      </main>

      <footer
        style={{
          background: "rgba(0,0,0,0.2)",
          color: ivory,
          textAlign: "center",
          padding: "0.6rem",
          fontSize: "0.7rem",
          letterSpacing: "0.05em",
          position: "relative",
          zIndex: 1,
        }}
      >
        © {new Date().getFullYear()} Noesis Mental Health Care. All rights reserved.
      </footer>
    </div>
  );
}

/* ----------------- Menu ----------------- */
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
            Newsletters
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
          <Link
            href="/privacy"
            onClick={() => setOpen(false)}
            style={{ color: yvesBlue, fontWeight: 500, fontSize: "1.1rem" }}
          >
            Privacy &amp; Confidentiality
          </Link>
        </div>
      )}
    </>
  );
}
