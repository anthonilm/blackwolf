"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function ContactPage() {
  const [showCalendly, setShowCalendly] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      reason: formData.get("reason"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setLoading(false);

    if (res.ok) {
      setMessage("✅ Message sent successfully!");
      (e.target as HTMLFormElement).reset();
    } else {
      setMessage("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#fff",
        padding: "4rem 2rem",
        fontFamily: "Georgia, 'Times New Roman', serif",
        position: "relative",
      }}
    >
      <Menu />

      <h1
        style={{
          fontSize: "2.5rem",
          textAlign: "center",
          marginBottom: "2rem",
          color: "#0018A8",
          fontWeight: 700,
          letterSpacing: "0.05em",
        }}
      >
        Contact Me
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          style={inputStyle}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          style={inputStyle}
        />
        <textarea
          name="reason"
          placeholder="Reason for Contacting"
          rows={6}
          required
          style={textareaStyle}
        />
        <button type="submit" style={submitStyle} disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
        {message && (
          <p
            style={{
              textAlign: "center",
              fontWeight: 600,
              color: message.startsWith("✅") ? "green" : "red",
            }}
          >
            {message}
          </p>
        )}
      </form>

      {/* Free Session Section */}
      <section
        style={{
          textAlign: "center",
          marginTop: "3rem",
          maxWidth: "700px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <h2
          style={{
            fontSize: "1.8rem",
            fontWeight: 600,
            color: "#960018",
            marginBottom: "1rem",
          }}
        >
          THE FIRST SESSION
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: 1.7,
            color: "#333",
            fontStyle: "italic",
            marginBottom: "1.5rem",
          }}
        >
          Book your first free session and leave with clarity, strategies for
          easing overwhelm, and a grounded vision for moving forward.
        </p>
        <button
          onClick={() => setShowCalendly(true)}
          style={bookButtonStyle}
        >
          Book Free First Session
        </button>
      </section>

      {showCalendly && (
        <div style={modalOverlay}>
          <div style={modalContent}>
            <iframe
              src="https://calendly.com/tmcelrath26/noesis-consulting-1-1?embed_domain=localhost:3000&embed_type=Inline"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="yes"
            />
            <button
              onClick={() => setShowCalendly(false)}
              style={closeButtonStyle}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

/* ----------------- Styles ----------------- */
const inputStyle: React.CSSProperties = {
  padding: "1rem",
  fontSize: "1rem",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

const textareaStyle: React.CSSProperties = {
  padding: "1rem",
  fontSize: "1rem",
  borderRadius: "8px",
  border: "1px solid #ccc",
  resize: "vertical",
};

const submitStyle: React.CSSProperties = {
  padding: "1rem 2rem",
  borderRadius: "8px",
  fontSize: "1.1rem",
  fontWeight: 600,
  background: "#0018A8",
  color: "#fff",
  border: "none",
  cursor: "pointer",
};

const bookButtonStyle: React.CSSProperties = {
  display: "inline-block",
  padding: "1rem 2rem",
  borderRadius: "12px",
  background: "rgba(255, 255, 255, 0.25)",
  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)",
  color: "#000",
  fontSize: "1.2rem",
  fontWeight: 600,
  border: "none",
  cursor: "pointer",
};

const modalOverlay: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(0,0,0,0.7)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalContent: React.CSSProperties = {
  position: "relative",
  width: "80%",
  height: "80%",
  background: "#fff",
  borderRadius: "12px",
  overflow: "hidden",
};

const closeButtonStyle: React.CSSProperties = {
  position: "absolute",
  top: "1rem",
  right: "1rem",
  padding: "0.6rem 1.2rem",
  fontSize: "1rem",
  fontWeight: 600,
  background: "#0018A8",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

/* ----------------- Yves Blue Hamburger Menu ----------------- */
function Menu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const yvesBlue = "#0018A8";

  useEffect(() => {
    if (menuRef.current) {
      if (open) {
        gsap.fromTo(
          menuRef.current,
          { y: -10, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4 }
        );
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
            { href: "/student-services", label: "Student Services" },
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
