import { NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function GET() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  await page.goto("http://localhost:3000/noesis-methods", {
    waitUntil: "networkidle0",
  });

  // Inject stronger print overrides to stack panels vertically
  await page.addStyleTag({
    content: `
      @media print {
        .railTrack {
          display: block !important;
          width: 100% !important;
          overflow: visible !important;
        }
        .panel {
          display: block !important;
          width: 100% !important;
          min-height: auto !important;
          padding: 2rem 1.5rem !important;
          page-break-inside: avoid !important;
          break-inside: avoid !important;
        }
        .panelRight {
          position: relative !important;
          top: auto !important;
          right: auto !important;
          transform: none !important;
          text-align: center !important;
          margin-top: 1rem !important;
        }
        .phaseBig {
          font-size: 2rem !important;
          opacity: 0.5 !important;
          display: block !important;
          text-align: center !important;
          margin-bottom: 1rem !important;
        }
        .progress {
          display: none !important;
        }
      }
    `,
  });

  // Measure full scroll height
  const bodyHeight = await page.evaluate(() => document.body.scrollHeight);

  // Generate one long continuous PDF page
  const pdf = await page.pdf({
    width: "800px",             // adjust if you want more width
    height: `${bodyHeight}px`,  // full scroll height
    printBackground: true,
    pageRanges: "1",            // ensures single long page
  });

  await browser.close();

  return new NextResponse(pdf, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="noesis-methods.pdf"',
    },
  });
}
