"use client";
import Image from "next/image";

export default function Flyer() {
  return (
    <div className="flyer">
      {/* Hero */}
      <div className="hero">
        <h1>Noesis Mental Health Care</h1>
        <p className="subline">
          When thoughts collide and emotions swell, here is calm.
        </p>

        <button className="cta">Book Your Free Consultation</button>

        {/* QR code directly under button */}
        <div className="qr">
          <Image
            src="/qr-code.png"
            alt="QR code to book consultation"
            width={220}
            height={220}
            priority
          />
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        {/* Left: Headshot */}
        <div className="headshot">
          <Image
            src="/about-headshot.jpg"
            alt="Anthoni McElrath"
            width={160}
            height={160}
            style={{ borderRadius: "50%" }}
            priority
          />
        </div>

        {/* Right: Text */}
        <div className="footer-text">
          <p className="name">Anthoni McElrath</p>
          <p>Founder & Consultant</p>
          <p>noesissystems.org</p>
        </div>
      </div>

      <style jsx>{`
        .flyer {
          position: relative;
          width: 1080px;
          height: 1350px; /* Instagram portrait ratio */
          margin: 0 auto;
          font-family: "Georgia", "Times New Roman", serif;
          color: #014d4e; /* deep teal */
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
          background: #e6e6fa; /* light lavender */
        }

        .hero {
          z-index: 1;
          padding: 2rem;
        }

        .hero h1 {
          font-size: 3.6rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          margin-bottom: 1rem;
        }

        .subline {
          font-size: 1.6rem;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          margin-bottom: 2.5rem;
          color: #5fa99b; /* sea glass green */
        }

        .cta {
          padding: 1rem 2.2rem;
          border-radius: 14px;
          background: rgba(1, 77, 78, 0.15); /* translucent deep teal */
          color: #014d4e;
          border: 2px solid #014d4e;
          font-size: 1.3rem;
          font-weight: 600;
          cursor: pointer;
          margin-bottom: 1.8rem;
        }

        .qr {
          margin-top: 1rem;
        }

        .footer {
          position: absolute;
          bottom: 70px;
          left: 70px;
          right: 70px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 1;
        }

        .footer-text {
          text-align: right;
          font-size: 1.8rem;
          line-height: 1.6;
          color: #014d4e;
        }

        .footer-text .name {
          font-weight: 700; /* emphasize your name */
          letter-spacing: 0.05em;
        }
      `}</style>
    </div>
  );
}
