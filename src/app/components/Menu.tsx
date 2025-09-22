/* Enlarged, Softer Dropdown Menu */
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link"; 
import { usePathname } from "next/navigation";
import gsap from "gsap";

export default function Menu() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [subOpen, setSubOpen] = useState<{ [key: string]: boolean }>({});
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const yvesBlue = "#0018A8";
  const ivory = "#FFFFF0";

  // hamburger color: ivory only on homepage ("/"), Yves blue elsewhere
  const hamburgerColor = pathname === "/" ? ivory : yvesBlue;

  // detect mobile reliably
  useEffect(() => {
    setMounted(true);
    const ua = navigator.userAgent || navigator.vendor || "";
    const isMobileDevice = /android|iphone|ipad|mobile/i.test(ua);
    setIsMobile(isMobileDevice);
  }, []);

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

  if (!mounted) return null; // wait until client-side

  const toggleSub = (key: string) => {
    setSubOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

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
            <span style={{ width: 24, height: 2, background: hamburgerColor }} />
            <span style={{ width: 24, height: 2, background: hamburgerColor }} />
            <span style={{ width: 24, height: 2, background: hamburgerColor }} />
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
            background: "rgba(223, 245, 225, 0.25)", // soft transparent green
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
          {/* Static Links */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            style={{
              color: yvesBlue,
              fontWeight: 500,
              fontSize: "1.1rem",
              letterSpacing: "0.05em",
            }}
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            style={{
              color: yvesBlue,
              fontWeight: 500,
              fontSize: "1.1rem",
              letterSpacing: "0.05em",
            }}
          >
            About
          </Link>

          {/* Collapsible: Cognitive Performance Coaching */}
          <div>
            <div
              onClick={() => toggleSub("cognitive")}
              style={{
                cursor: "pointer",
                color: yvesBlue,
                fontWeight: 600,
                fontSize: "1.1rem",
                letterSpacing: "0.05em",
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
                  href={isMobile ? "/noesis-methods-mobile" : "/noesis-methods"}
                  onClick={() => setOpen(false)}
                  style={{ color: yvesBlue, fontSize: "1rem" }}
                >
                  How I Work
                </Link>
              </div>
            )}
          </div>

          {/* Collapsible: Student Success Systems */}
          <div>
            <div
              onClick={() => toggleSub("student")}
              style={{
                cursor: "pointer",
                color: yvesBlue,
                fontWeight: 600,
                fontSize: "1.1rem",
                letterSpacing: "0.05em",
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
                  href="/areas"
                  onClick={() => setOpen(false)}
                  style={{ color: yvesBlue, fontSize: "1rem" }}
                >
                  Areas I Help With
                </Link>
                <Link
                  href={isMobile ? "/noesis-methods-mobile" : "/noesis-methods"}
                  onClick={() => setOpen(false)}
                  style={{ color: yvesBlue, fontSize: "1rem" }}
                >
                  How I Work
                </Link>
                {/* Future page placeholder */}
              </div>
            )}
          </div>

          {/* Other Static Links */}
          <Link
            href="/for-students"
            onClick={() => setOpen(false)}
            style={{
              color: yvesBlue,
              fontWeight: 500,
              fontSize: "1.1rem",
            }}
          >
            Newsletters
          </Link>
          <Link
            href="/faq"
            onClick={() => setOpen(false)}
            style={{
              color: yvesBlue,
              fontWeight: 500,
              fontSize: "1.1rem",
            }}
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            style={{
              color: yvesBlue,
              fontWeight: 500,
              fontSize: "1.1rem",
            }}
          >
            Contact
          </Link>
          <Link
            href="/privacy"
            onClick={() => setOpen(false)}
            style={{
              color: yvesBlue,
              fontWeight: 500,
              fontSize: "1.1rem",
            }}
          >
            Privacy & Confidentiality
          </Link>
        </div>
      )}
    </>
  );
}
