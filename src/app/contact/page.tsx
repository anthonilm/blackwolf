"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { usePathname } from "next/navigation";

export default function ContactPage() {
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

/* ----------------- Menu ----------------- */
/* Yves Blue Hamburger Menu (Always Yves Blue) */
/* Mocha Hamburger Menu (Updated to Match Previous Version) */
function Menu() {
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState<{ [key: string]: boolean }>({});
  const menuRef = useRef<HTMLDivElement>(null);
  const mocha = "#3B2F2F";

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
      {/* Mocha Hamburger */}
      <div style={{ position: "fixed", top: 8, left: 8, zIndex: 1100 }}>
        <button
          onClick={() => setOpen(!open)}
          style={{
            width: 70,
            height: 70,
            background: "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            border: "none",
            padding: 0,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <span style={{ width: 36, height: 4, background: mocha, borderRadius: 2 }} />
            <span style={{ width: 36, height: 4, background: mocha, borderRadius: 2 }} />
            <span style={{ width: 36, height: 4, background: mocha, borderRadius: 2 }} />
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
            background: "rgba(255,255,240,0.95)",
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
              color: mocha,
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
              background: "rgba(0,0,0,0.15)",
              marginBottom: "1rem",
            }}
          />

          <Link href="/" onClick={() => setOpen(false)} style={{ color: mocha }}>
            Home
          </Link>
          <Link href="/services" onClick={() => setOpen(false)} style={{ color: mocha }}>
            Mental Health Services
          </Link>
          <Link href="/areas" onClick={() => setOpen(false)} style={{ color: mocha }}>
            Areas I Help You Overcome
          </Link>
          <Link href="/noesis-methods" onClick={() => setOpen(false)} style={{ color: mocha }}>
            The Noesis Approach
          </Link>
          <Link href="/about" onClick={() => setOpen(false)} style={{ color: mocha }}>
            About Anthoni
          </Link>
          <Link href="/for-students" onClick={() => setOpen(false)} style={{ color: mocha }}>
            Insights
          </Link>
          <Link href="/faq" onClick={() => setOpen(false)} style={{ color: mocha }}>
            FAQ
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)} style={{ color: mocha }}>
            Contact
          </Link>
        </div>
      )}
    </>
  );
}


